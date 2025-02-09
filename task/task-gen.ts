import { TASK_COMPILE } from "hardhat/builtin-tasks/task-names";
import { task } from "hardhat/config";

import { genTask } from "../src/task-gen";
import { setDefaultConfig } from "../src/utils";

task("task-gen", "Generate Hardhat tasks dynamically")
  .addFlag("noCompile", "Don't compile before running this task")
  .setAction(async function (args, hre, runSuper) {
    const taskGenConf = setDefaultConfig(hre.userConfig.taskGen);

    if (!args.noCompile) {
      await hre.run(TASK_COMPILE, { noTaskGen: true });
    }
    await genTask({ conf: taskGenConf, runTask: false });
  });
