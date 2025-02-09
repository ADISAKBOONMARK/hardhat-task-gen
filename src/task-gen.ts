import "@nomicfoundation/hardhat-ethers";
import dotenv from "dotenv";
import fs from "fs-extra";
import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import path from "path";

import { OPTIONAL_PARAM, PARAM } from "./constants";
import { TaskGenConfig } from "./interfaces";
import "./type-extensions";
import { convertToKebabCase } from "./utils";

dotenv.config();

const ABI_DIRECTORY: string =
  process.env.ABI_DIRECTORY || "./artifacts/contracts/";

export const getAllABIPaths = function (dir: string): string[] {
  let abiFiles: string[] = [];
  if (fs.pathExistsSync(dir)) {
    fs.readdirSync(dir).forEach((file) => {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        abiFiles = abiFiles.concat(getAllABIPaths(fullPath));
      } else if (file.endsWith(".json") && !file.endsWith(".dbg.json")) {
        abiFiles.push(fullPath);
      }
    });
  }
  return abiFiles;
};

export const genTask = async function ({
  conf = {},
  runTask = false,
}: {
  conf: TaskGenConfig;
  runTask: boolean;
}) {
  const contractsMap = new Map();
  const abiPaths = getAllABIPaths(ABI_DIRECTORY);
  const prefix = conf.prefix ? `${conf.prefix}:` : "";

  abiPaths.forEach((abiPath) => {
    const contractJson = JSON.parse(fs.readFileSync(abiPath, "utf8"));

    if (contractJson.abi) {
      const contractABI: any = contractJson.abi;
      const contractName: string = path.basename(abiPath, ".json");

      const functionCount = new Map();

      contractABI.forEach((item: any) => {
        if (item.type === "function") {
          const count = functionCount.get(item.name) || 0;
          functionCount.set(item.name, count + 1);
          const uniqueTaskName =
            count === 0
              ? `${prefix}${contractName}:${item.name}`
              : `${prefix}${contractName}:${item.name}:${count + 1}`;

          if (runTask) {
            let newTask = task(
              uniqueTaskName,
              `Calls ${item.name} function on ${contractName} with variant ${
                count + 1
              }`
            ).addOptionalParam(
              PARAM.contractAddress.name,
              PARAM.contractAddress.des
            );

            item.inputs.forEach((input: any, index: number) => {
              const paramName = input.name
                ? input.name.replaceAll("_", "")
                : `param${index}`;

              newTask = newTask.addParam(
                paramName,
                `Parameter of type ${input.type} (for tuples, provide a JSON string)`
              );
            });

            if (item.stateMutability === "payable") {
              newTask = newTask.addOptionalParam(
                OPTIONAL_PARAM.payableValue.name,
                OPTIONAL_PARAM.payableValue.des
              );
            }

            newTask.setAction(
              async (taskArgs, hre: HardhatRuntimeEnvironment) => {
                const [signer] = await hre.ethers.getSigners();
                const contract = new hre.ethers.Contract(
                  taskArgs.contractAddress ||
                    process.env.TASK_GEN_CONTRACT_ADDRESS,
                  contractABI,
                  signer
                );

                const functionArgs = item.inputs.map(
                  (input: any, index: number) =>
                    taskArgs[input.name || `param${index}`]
                );

                const txOptions: Record<string, any> = {};
                if (
                  item.stateMutability === "payable" &&
                  taskArgs.payableValue
                ) {
                  txOptions.value = taskArgs.payableValue;
                }

                const result = await contract[item.name](
                  ...functionArgs,
                  txOptions
                );
                console.log(
                  `✅ ${contractName}.${item.name} executed successfully!`
                );
                console.log(`📊 Output:`, result);
              }
            );
          }

          if (!runTask) {
            let taskCommand = `npx hardhat ${uniqueTaskName} --contract-address <contractAddress:optional>`;
            item.inputs.forEach((input: any) => {
              const inputName = input.name.replaceAll("_", "");
              taskCommand += ` --${convertToKebabCase(
                inputName
              )} <${inputName}>`;
            });
            if (item.stateMutability === "payable") {
              taskCommand += ` --payable-value <payableValue:optional>`;
            }

            if (!contractsMap.has(contractName)) {
              contractsMap.set(contractName, {
                name: contractName,
                functions: [],
              });
            }

            contractsMap.get(contractName).functions.push({
              name: item.name,
              params: item.inputs,
              cmd: taskCommand,
            });
          }
        }
      });
    }
  });

  const generatedTasks = Array.from(contractsMap.values());

  if (generatedTasks.length > 0 && !runTask) {
    await fs.outputFile(
      `${conf.path}/task-list.json`,
      JSON.stringify(generatedTasks, null, 2)
    );
  }

  if (generatedTasks.length > 0 && !runTask) {
    let readmeContent = "# 📜 Hardhat Contract Commands\n\n";

    generatedTasks.forEach((contract) => {
      readmeContent += `## ${contract.name}\n\n`;
      readmeContent += "| Function Name | Parameters | Command |\n";
      readmeContent += "|---------------|------------|---------|\n";

      contract.functions.forEach((func: any) => {
        const params = func.params
          .map((param: any) => `\`${param.name}\` (${param.type})`)
          .join(", ");
        readmeContent += `| ${func.name} | ${params} | \`${func.cmd}\` |\n`;
      });
    });

    await fs.outputFile(`${conf.path}/TASK_LIST.md`, readmeContent);
  }

  if (generatedTasks.length > 0 && !runTask) {
    let cmds: string = "\n📜 Generated Hardhat Commands:";
    console.log(cmds);

    generatedTasks.forEach((command) => {
      console.log(command.name);
      cmds += "\n" + command.name;
      command.functions.forEach((func: any) => {
        console.log(func.cmd);
        cmds += "\n" + func.cmd;
      });
      console.log();
      cmds += "\n";
    });

    await fs.outputFile(`${conf.path}/task-list.log`, cmds);
  }
};
