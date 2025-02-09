import { extendEnvironment } from "hardhat/config";

import { genTask } from "./src/task-gen";
import "./src/type-extensions";
import { setDefaultConfig } from "./src/utils";
import "./task/compile";
import "./task/task-gen";

extendEnvironment(async (hre) => {
  const taskGenConf = setDefaultConfig(hre.userConfig.taskGen);
  await genTask({ conf: taskGenConf, runTask: true });
});
