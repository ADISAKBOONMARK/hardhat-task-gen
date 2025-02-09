import { HardhatUserConfig } from "hardhat/config";

import "./";

import dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.22",
      },
    ],
  },
  taskGen: {
    outPath: "./demo-tasks-generated",
    runOnCompile: true,
    prefix: "task-gen",
  },
};

export default config;
