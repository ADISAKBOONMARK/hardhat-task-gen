# hardhat-task-gen

## Overview

`hardhat-task-gen` is a Hardhat plugin that automatically generates tasks from ABI files. This allows you to easily interact with smart contracts without manually defining Hardhat tasks.

## Features

- Auto-generates Hardhat tasks from contract ABIs
- Supports overloaded functions with numbered suffixes
- Allows configurable task prefixes
- Handles payable functions with optional parameters
- Provides clear CLI commands for contract interactions

## Installation

```sh
npm install --save-dev @adisakboonmark/hardhat-task-gen
```

## Usage

1. Add the plugin to your Hardhat config (`hardhat.config.ts` or `hardhat.config.js`):

```ts
import "@adisakboonmark/hardhat-task-gen";
```

```js
require("@adisakboonmark/hardhat-task-gen");
```

2. Run the task generation command:

```sh
npx hardhat task-gen
```

3. Use the generated tasks to interact with your contracts:

```sh
npx hardhat MyContract:transfer --contract-address 0x123... --to 0xabc... --amount 1000
```

## Environment Variables

### ABI Directory

The plugin reads ABI files from the directory specified by the environment variable:

```sh
process.env.ABI_DIRECTORY || "./artifacts/contracts/"
```

If `ABI_DIRECTORY` is not set, it defaults to `./artifacts/contracts/`.

### Default Contract Address

When executing a generated task, the contract address is determined using:

```ts
const contract = new hre.ethers.Contract(
  taskArgs.contractAddress || process.env.TASK_GEN_CONTRACT_ADDRESS,
  contractABI,
  signer
);
```

If `TASK_GEN_CONTRACT_ADDRESS` is not set, you must provide the contract address explicitly using `--contract-address`.

## Configuration

You can customize the task generation by modifying your Hardhat config:

```ts
module.exports = {
  taskGen: {
    outPath: "./tasks-generated", // Specify the output path for generated tasks (optional)
    clear: true, // Clear existing tasks before generating new ones (optional)
    runOnCompile: false, // Generate tasks automatically on each compile (optional)
    prefix: "custom-prefix", // Set a custom task prefix (optional)
  },
};
```

## Example Generated Commands

For a contract named `Token` with overloaded `transfer` functions:

```sh
npx hardhat Token:transfer      # Calls the basic transfer function
npx hardhat Token:transfer:2    # Calls the overloaded transfer function
```

## Example Commands Document

[Full Version Example Document](./demo-tasks-generated/TASK_LIST.md)

### 📜 Hardhat Contract Commands

| Function Name      | Parameters | Command                                                                                         |
| ------------------ | ---------- | ----------------------------------------------------------------------------------------------- |
| DEFAULT_ADMIN_ROLE |            | `npx hardhat task-gen:MyToken:DEFAULT_ADMIN_ROLE --contract-address <contractAddress:optional>` |
| DOMAIN_SEPARATOR   |            | `npx hardhat task-gen:MyToken:DOMAIN_SEPARATOR --contract-address <contractAddress:optional>`   |
| name | | `npx hardhat task-gen:MyToken:name --contract-address <contractAddress:optional>` |
| nonces | `owner` (address) | `npx hardhat task-gen:MyToken:nonces --contract-address <contractAddress:optional> --owner <owner>` |
| pause | | `npx hardhat task-gen:MyToken:pause --contract-address <contractAddress:optional>` |
| paused | | `npx hardhat task-gen:MyToken:paused --contract-address <contractAddress:optional>` |
