import "hardhat/types/config";

import { TaskGenConfig } from "./interfaces";
declare module "hardhat/types/config" {
  interface HardhatConfig {
    taskGen?: TaskGenConfig;
  }
  interface HardhatUserConfig {
    taskGen?: TaskGenConfig;
  }
}
