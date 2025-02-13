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

#### AwesomeCat

| Function Name | Parameters | Outputs | Command |
|---------------|------------|---------|---------|
| breed | `catA` tuple[`id` (uint256),`gender` (uint8)], `catB` tuple[`id` (uint256),`gender` (uint8)] | `newCat` tuple[`id` (uint256),`gender` (uint8)] | `npx hardhat task-gen:AwesomeCat:breed:1 --contract-address <contractAddress:optional> --cat-a <catA> --cat-b <catB>` |
| breed | `catIdA` (uint256), `catIdB` (uint256) | `newCat` tuple[`id` (uint256),`gender` (uint8)] | `npx hardhat task-gen:AwesomeCat:breed:2 --contract-address <contractAddress:optional> --cat-id-a <catIdA> --cat-id-b <catIdB>` |
| breedBatch | `catIdsA` (uint256[]), `catIdsB` (uint256[]) | `newCats` tuple[[`id` (uint256),`gender` (uint8)]] | `npx hardhat task-gen:AwesomeCat:breedBatch:1 --contract-address <contractAddress:optional> --cat-ids-a <catIdsA> --cat-ids-b <catIdsB>` |
| breedBatch | `catsA` tuple[[`id` (uint256),`gender` (uint8)]], `catsB` tuple[[`id` (uint256),`gender` (uint8)]] | `newCats` tuple[[`id` (uint256),`gender` (uint8)]] | `npx hardhat task-gen:AwesomeCat:breedBatch:2 --contract-address <contractAddress:optional> --cats-a <catsA> --cats-b <catsB>` |
| cats | `catId` (uint256) | `id` (uint256), `gender` (uint8) | `npx hardhat task-gen:AwesomeCat:cats --contract-address <contractAddress:optional> --cat-id <catId>` |
| craftGender |  | `output1` (uint8) | `npx hardhat task-gen:AwesomeCat:craftGender --contract-address <contractAddress:optional>` |
| exists | `catId` (uint256) | `output1` (bool) | `npx hardhat task-gen:AwesomeCat:exists --contract-address <contractAddress:optional> --cat-id <catId>` |
| mintCat |  | `output1` tuple[`id` (uint256),`gender` (uint8)] | `npx hardhat task-gen:AwesomeCat:mintCat --contract-address <contractAddress:optional>` |
| owners | `owner` (address) | `id` (uint256), `gender` (uint8) | `npx hardhat task-gen:AwesomeCat:owners --contract-address <contractAddress:optional> --owner <owner>` |
| parents | `catId` (uint256) | `father` tuple[`id` (uint256),`gender` (uint8)], `mother` tuple[`id` (uint256),`gender` (uint8)] | `npx hardhat task-gen:AwesomeCat:parents --contract-address <contractAddress:optional> --cat-id <catId>` |

## IMPORTANT

### Invalid Casing in Parameter Names (#HH208)

#### Problem:

Parameters like `_type`, `_amount` use underscores, which violate camelCase formatting.

#### Solution:

Fix this issue by removing underscores from all parameter names to ensure camelCase compliance.
