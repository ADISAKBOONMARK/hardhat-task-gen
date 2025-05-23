import { DEFAULT_CONFIG } from "./constants";
import { TaskGenConfig } from "./interfaces";

export const setDefaultConfig = (
  conf: TaskGenConfig | undefined
): TaskGenConfig => {
  return {
    outPath:
      conf?.outPath !== undefined ? conf.outPath : DEFAULT_CONFIG.outPath,
    clear: conf?.clear !== undefined ? conf.clear : DEFAULT_CONFIG.clear,
    runOnCompile:
      conf?.runOnCompile !== undefined
        ? conf.runOnCompile
        : DEFAULT_CONFIG.runOnCompile,
    prefix: conf?.prefix,
  };
};

export const convertToKebabCase = (str: string) => {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
};

export const convertToCamelCase = (str: string) => {
  return str
    .replace(/^_+|_+$/g, "") // Remove leading and trailing underscores
    .replace(/[-_](.)/g, (_, char) => char.toUpperCase()) // Convert to camelCase
    .replace(/^([A-Z])/, (match) => match.toLowerCase()); // Ensure first letter is lowercase
};
