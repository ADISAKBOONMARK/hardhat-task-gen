import { TASK_CLEAN, TASK_COMPILE } from "hardhat/builtin-tasks/task-names";
import { task } from "hardhat/config";

import { setDefaultConfig } from "../src/utils";

task(TASK_COMPILE)
  .addFlag("noTaskGen", "Don't task-gen after running this task")
  .setAction(async function (args, hre, runSuper) {
    const taskGenConf = setDefaultConfig(hre.userConfig.taskGen);

    if (taskGenConf.clear) {
      await hre.run(TASK_CLEAN);
    }

    await runSuper();

    if (taskGenConf.runOnCompile && !args.noTaskGen) {
      await hre.run("task-gen", { noCompile: true });
    }
  });
