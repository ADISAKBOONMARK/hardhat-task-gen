import { TaskGenConfig } from "./interfaces";

export const PARAM = {
  contractAddress: {
    name: "contractAddress",
    des: "The contract address",
  },
};

export const OPTIONAL_PARAM = {
  payableValue: {
    name: "payableValue",
    des: "Amount of ETH to send (default: 0)",
  },
};

export const DEFAULT_CONFIG: TaskGenConfig = {
  outPath: "./tasks-generated",
  clear: true,
  runOnCompile: true,
};
