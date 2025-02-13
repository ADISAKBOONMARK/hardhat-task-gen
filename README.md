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

// or

require("@adisakboonmark/hardhat-task-gen");
```

2. Run the task generation command:

```sh
$ npx hardhat task-gen
```

3. Use the generated tasks to interact with your contracts:

```sh
$ npx hardhat task-gen:MyERC20:transfer --contract-address 0x123...456 --to 0xabc...123 --amount 1000

$ npx hardhat task-gen:MyERC721:name --contract-address 0x123...456

$ npx hardhat task-gen:MyERC1155:balanceOfBatch --contract-address 0x123...456 --accounts '["0xabc...123","0xabc...456"]' --ids '[0,1]'
```

4. Run the helper command:

```sh
$ npx hardhat task-gen:MyERC1155:balanceOfBatch --help
Hardhat version 2.22.18

Usage: hardhat [GLOBAL OPTIONS] task-gen:MyERC1155:balanceOfBatch --accounts <STRING> [--contract-address <STRING>] --ids <STRING>

OPTIONS:

  --accounts            Parameter of type address[] (for tuple and array, provide a JSON string)
  --contract-address    The contract address
  --ids                 Parameter of type uint256[] (for tuple and array, provide a JSON string)

task-gen:MyERC1155:balanceOfBatch: Calls balanceOfBatch function on MyERC1155

For global options help run: hardhat help
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
    outPath: "./tasks-generated", // Specify the output path for generated tasks.
    clear: true, // Clear existing artifacts before generating the tasks, and it will force-run compilation. 
    runOnCompile: false, // Generate tasks automatically on each compile.
    prefix: "task-gen", // Set a custom task prefix.
  },
};
```

## Example Overloaded Commands

For a contract named `MyERC1155` with overloaded functions `totalSupply()` and `totalSupply(uint256)`:

```sh
npx hardhat task-gen:MyERC1155:transfer:1         # Calls the totalSupply() function
npx hardhat task-gen:MyERC1155:transfer:2 --id 0  # Calls the totalSupply(uint256) function
```

## Example Commands Document

[Full Version Example Document](./demo-tasks-generated/TASK_LIST.md)

### 📜 Hardhat Contract Commands

#### MyERC1155

| Function Name         | Parameters                                                                                                          | Command                                                                                                                                                                  |
| --------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DEFAULT_ADMIN_ROLE    |                                                                                                                     | `npx hardhat task-gen:MyERC1155:DEFAULT_ADMIN_ROLE --contract-address <contractAddress:optional>`                                                                        |
| URI_SETTER_ROLE       |                                                                                                                     | `npx hardhat task-gen:MyERC1155:URI_SETTER_ROLE --contract-address <contractAddress:optional>`                                                                           |
| burn                  | `account` (address), `id` (uint256), `value` (uint256)                                                              | `npx hardhat task-gen:MyERC1155:burn --contract-address <contractAddress:optional> --account <account> --id <id> --value <value>`                                        |
| burnBatch             | `account` (address), `ids` (uint256[]), `values` (uint256[])                                                        | `npx hardhat task-gen:MyERC1155:burnBatch --contract-address <contractAddress:optional> --account <account> --ids <ids> --values <values>`                               |
| exists                | `id` (uint256)                                                                                                      | `npx hardhat task-gen:MyERC1155:exists --contract-address <contractAddress:optional> --id <id>`                                                                          |
| mint                  | `account` (address), `id` (uint256), `amount` (uint256), `data` (bytes)                                             | `npx hardhat task-gen:MyERC1155:mint --contract-address <contractAddress:optional> --account <account> --id <id> --amount <amount> --data <data>`                        |
| mintBatch             | `to` (address), `ids` (uint256[]), `amounts` (uint256[]), `data` (bytes)                                            | `npx hardhat task-gen:MyERC1155:mintBatch --contract-address <contractAddress:optional> --to <to> --ids <ids> --amounts <amounts> --data <data>`                         |
| safeBatchTransferFrom | `from` (address), `to` (address), `ids` (uint256[]), `values` (uint256[]), `data` (bytes)                           | `npx hardhat task-gen:MyERC1155:safeBatchTransferFrom --contract-address <contractAddress:optional> --from <from> --to <to> --ids <ids> --values <values> --data <data>` |
| safeTransferFrom      | `from` (address), `to` (address), `id` (uint256), `value` (uint256), `data` (bytes)                                 | `npx hardhat task-gen:MyERC1155:safeTransferFrom --contract-address <contractAddress:optional> --from <from> --to <to> --id <id> --value <value> --data <data>`          |
| supportsInterface     | `interfaceId` (bytes4)                                                                                              | `npx hardhat task-gen:MyERC1155:supportsInterface --contract-address <contractAddress:optional> --interface-id <interfaceId>`                                            |
| totalSupply           |                                                                                                                     | `npx hardhat task-gen:MyERC1155:totalSupply:1 --contract-address <contractAddress:optional>`                                                                             |
| totalSupply           | `id` (uint256)                                                                                                      | `npx hardhat task-gen:MyERC1155:totalSupply:2 --contract-address <contractAddress:optional> --id <id>`                                                                   |
| uri                   | `` (uint256) | `npx hardhat task-gen:MyERC1155:uri --contract-address <contractAddress:optional> --param1 <param1>` |

## IMPORTANT

### Invalid Casing in Parameter Names (#HH208)

#### Problem:

Parameters like `_type`, `_amount` use underscores, which violate camelCase formatting.

#### Solution:

Fix this issue by removing underscores from all parameter names to ensure camelCase compliance.
