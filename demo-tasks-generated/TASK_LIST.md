# 📜 Hardhat Contract Commands

## MyToken

| Function Name | Parameters | Command |
|---------------|------------|---------|
| DEFAULT_ADMIN_ROLE |  | `npx hardhat task-gen:MyToken:DEFAULT_ADMIN_ROLE --contract-address <contractAddress:optional>` |
| DOMAIN_SEPARATOR |  | `npx hardhat task-gen:MyToken:DOMAIN_SEPARATOR --contract-address <contractAddress:optional>` |
| MINTER_ROLE |  | `npx hardhat task-gen:MyToken:MINTER_ROLE --contract-address <contractAddress:optional>` |
| PAUSER_ROLE |  | `npx hardhat task-gen:MyToken:PAUSER_ROLE --contract-address <contractAddress:optional>` |
| allowance | `owner` (address), `spender` (address) | `npx hardhat task-gen:MyToken:allowance --contract-address <contractAddress:optional> --owner <owner> --spender <spender>` |
| approve | `spender` (address), `value` (uint256) | `npx hardhat task-gen:MyToken:approve --contract-address <contractAddress:optional> --spender <spender> --value <value>` |
| balanceOf | `account` (address) | `npx hardhat task-gen:MyToken:balanceOf --contract-address <contractAddress:optional> --account <account>` |
| burn | `value` (uint256) | `npx hardhat task-gen:MyToken:burn --contract-address <contractAddress:optional> --value <value>` |
| burnFrom | `account` (address), `value` (uint256) | `npx hardhat task-gen:MyToken:burnFrom --contract-address <contractAddress:optional> --account <account> --value <value>` |
| decimals |  | `npx hardhat task-gen:MyToken:decimals --contract-address <contractAddress:optional>` |
| eip712Domain |  | `npx hardhat task-gen:MyToken:eip712Domain --contract-address <contractAddress:optional>` |
| getRoleAdmin | `role` (bytes32) | `npx hardhat task-gen:MyToken:getRoleAdmin --contract-address <contractAddress:optional> --role <role>` |
| grantRole | `role` (bytes32), `account` (address) | `npx hardhat task-gen:MyToken:grantRole --contract-address <contractAddress:optional> --role <role> --account <account>` |
| hasRole | `role` (bytes32), `account` (address) | `npx hardhat task-gen:MyToken:hasRole --contract-address <contractAddress:optional> --role <role> --account <account>` |
| mint | `to` (address), `amount` (uint256) | `npx hardhat task-gen:MyToken:mint --contract-address <contractAddress:optional> --to <to> --amount <amount>` |
| name |  | `npx hardhat task-gen:MyToken:name --contract-address <contractAddress:optional>` |
| nonces | `owner` (address) | `npx hardhat task-gen:MyToken:nonces --contract-address <contractAddress:optional> --owner <owner>` |
| pause |  | `npx hardhat task-gen:MyToken:pause --contract-address <contractAddress:optional>` |
| paused |  | `npx hardhat task-gen:MyToken:paused --contract-address <contractAddress:optional>` |
| permit | `owner` (address), `spender` (address), `value` (uint256), `deadline` (uint256), `v` (uint8), `r` (bytes32), `s` (bytes32) | `npx hardhat task-gen:MyToken:permit --contract-address <contractAddress:optional> --owner <owner> --spender <spender> --value <value> --deadline <deadline> --v <v> --r <r> --s <s>` |
| renounceRole | `role` (bytes32), `callerConfirmation` (address) | `npx hardhat task-gen:MyToken:renounceRole --contract-address <contractAddress:optional> --role <role> --caller-confirmation <callerConfirmation>` |
| revokeRole | `role` (bytes32), `account` (address) | `npx hardhat task-gen:MyToken:revokeRole --contract-address <contractAddress:optional> --role <role> --account <account>` |
| supportsInterface | `interfaceId` (bytes4) | `npx hardhat task-gen:MyToken:supportsInterface --contract-address <contractAddress:optional> --interface-id <interfaceId>` |
| symbol |  | `npx hardhat task-gen:MyToken:symbol --contract-address <contractAddress:optional>` |
| totalSupply |  | `npx hardhat task-gen:MyToken:totalSupply --contract-address <contractAddress:optional>` |
| transfer | `to` (address), `value` (uint256) | `npx hardhat task-gen:MyToken:transfer --contract-address <contractAddress:optional> --to <to> --value <value>` |
| transferFrom | `from` (address), `to` (address), `value` (uint256) | `npx hardhat task-gen:MyToken:transferFrom --contract-address <contractAddress:optional> --from <from> --to <to> --value <value>` |
| unpause |  | `npx hardhat task-gen:MyToken:unpause --contract-address <contractAddress:optional>` |
