# 📜 Hardhat Contract Commands

## AwesomeCat

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

## MyERC1155

| Function Name | Parameters | Outputs | Command |
|---------------|------------|---------|---------|
| DEFAULT_ADMIN_ROLE |  | `output1` (bytes32) | `npx hardhat task-gen:MyERC1155:DEFAULT_ADMIN_ROLE --contract-address <contractAddress:optional>` |
| MINTER_ROLE |  | `output1` (bytes32) | `npx hardhat task-gen:MyERC1155:MINTER_ROLE --contract-address <contractAddress:optional>` |
| PAUSER_ROLE |  | `output1` (bytes32) | `npx hardhat task-gen:MyERC1155:PAUSER_ROLE --contract-address <contractAddress:optional>` |
| URI_SETTER_ROLE |  | `output1` (bytes32) | `npx hardhat task-gen:MyERC1155:URI_SETTER_ROLE --contract-address <contractAddress:optional>` |
| balanceOf | `account` (address), `id` (uint256) | `output1` (uint256) | `npx hardhat task-gen:MyERC1155:balanceOf --contract-address <contractAddress:optional> --account <account> --id <id>` |
| balanceOfBatch | `accounts` (address[]), `ids` (uint256[]) | `output1` (uint256[]) | `npx hardhat task-gen:MyERC1155:balanceOfBatch --contract-address <contractAddress:optional> --accounts <accounts> --ids <ids>` |
| burn | `account` (address), `id` (uint256), `value` (uint256) |  | `npx hardhat task-gen:MyERC1155:burn --contract-address <contractAddress:optional> --account <account> --id <id> --value <value>` |
| burnBatch | `account` (address), `ids` (uint256[]), `values` (uint256[]) |  | `npx hardhat task-gen:MyERC1155:burnBatch --contract-address <contractAddress:optional> --account <account> --ids <ids> --values <values>` |
| exists | `id` (uint256) | `output1` (bool) | `npx hardhat task-gen:MyERC1155:exists --contract-address <contractAddress:optional> --id <id>` |
| getRoleAdmin | `role` (bytes32) | `output1` (bytes32) | `npx hardhat task-gen:MyERC1155:getRoleAdmin --contract-address <contractAddress:optional> --role <role>` |
| grantRole | `role` (bytes32), `account` (address) |  | `npx hardhat task-gen:MyERC1155:grantRole --contract-address <contractAddress:optional> --role <role> --account <account>` |
| hasRole | `role` (bytes32), `account` (address) | `output1` (bool) | `npx hardhat task-gen:MyERC1155:hasRole --contract-address <contractAddress:optional> --role <role> --account <account>` |
| isApprovedForAll | `account` (address), `operator` (address) | `output1` (bool) | `npx hardhat task-gen:MyERC1155:isApprovedForAll --contract-address <contractAddress:optional> --account <account> --operator <operator>` |
| mint | `account` (address), `id` (uint256), `amount` (uint256), `data` (bytes) |  | `npx hardhat task-gen:MyERC1155:mint --contract-address <contractAddress:optional> --account <account> --id <id> --amount <amount> --data <data>` |
| mintBatch | `to` (address), `ids` (uint256[]), `amounts` (uint256[]), `data` (bytes) |  | `npx hardhat task-gen:MyERC1155:mintBatch --contract-address <contractAddress:optional> --to <to> --ids <ids> --amounts <amounts> --data <data>` |
| pause |  |  | `npx hardhat task-gen:MyERC1155:pause --contract-address <contractAddress:optional>` |
| paused |  | `output1` (bool) | `npx hardhat task-gen:MyERC1155:paused --contract-address <contractAddress:optional>` |
| renounceRole | `role` (bytes32), `callerConfirmation` (address) |  | `npx hardhat task-gen:MyERC1155:renounceRole --contract-address <contractAddress:optional> --role <role> --caller-confirmation <callerConfirmation>` |
| revokeRole | `role` (bytes32), `account` (address) |  | `npx hardhat task-gen:MyERC1155:revokeRole --contract-address <contractAddress:optional> --role <role> --account <account>` |
| safeBatchTransferFrom | `from` (address), `to` (address), `ids` (uint256[]), `values` (uint256[]), `data` (bytes) |  | `npx hardhat task-gen:MyERC1155:safeBatchTransferFrom --contract-address <contractAddress:optional> --from <from> --to <to> --ids <ids> --values <values> --data <data>` |
| safeTransferFrom | `from` (address), `to` (address), `id` (uint256), `value` (uint256), `data` (bytes) |  | `npx hardhat task-gen:MyERC1155:safeTransferFrom --contract-address <contractAddress:optional> --from <from> --to <to> --id <id> --value <value> --data <data>` |
| setApprovalForAll | `operator` (address), `approved` (bool) |  | `npx hardhat task-gen:MyERC1155:setApprovalForAll --contract-address <contractAddress:optional> --operator <operator> --approved <approved>` |
| setURI | `newuri` (string) |  | `npx hardhat task-gen:MyERC1155:setURI --contract-address <contractAddress:optional> --newuri <newuri>` |
| supportsInterface | `interfaceId` (bytes4) | `output1` (bool) | `npx hardhat task-gen:MyERC1155:supportsInterface --contract-address <contractAddress:optional> --interface-id <interfaceId>` |
| totalSupply |  | `output1` (uint256) | `npx hardhat task-gen:MyERC1155:totalSupply:1 --contract-address <contractAddress:optional>` |
| totalSupply | `id` (uint256) | `output1` (uint256) | `npx hardhat task-gen:MyERC1155:totalSupply:2 --contract-address <contractAddress:optional> --id <id>` |
| unpause |  |  | `npx hardhat task-gen:MyERC1155:unpause --contract-address <contractAddress:optional>` |
| uri | `param1` (uint256) | `output1` (string) | `npx hardhat task-gen:MyERC1155:uri --contract-address <contractAddress:optional> --param1 <param1>` |

## MyERC20

| Function Name | Parameters | Outputs | Command |
|---------------|------------|---------|---------|
| DEFAULT_ADMIN_ROLE |  | `output1` (bytes32) | `npx hardhat task-gen:MyERC20:DEFAULT_ADMIN_ROLE --contract-address <contractAddress:optional>` |
| DOMAIN_SEPARATOR |  | `output1` (bytes32) | `npx hardhat task-gen:MyERC20:DOMAIN_SEPARATOR --contract-address <contractAddress:optional>` |
| MINTER_ROLE |  | `output1` (bytes32) | `npx hardhat task-gen:MyERC20:MINTER_ROLE --contract-address <contractAddress:optional>` |
| PAUSER_ROLE |  | `output1` (bytes32) | `npx hardhat task-gen:MyERC20:PAUSER_ROLE --contract-address <contractAddress:optional>` |
| allowance | `owner` (address), `spender` (address) | `output1` (uint256) | `npx hardhat task-gen:MyERC20:allowance --contract-address <contractAddress:optional> --owner <owner> --spender <spender>` |
| approve | `spender` (address), `value` (uint256) | `output1` (bool) | `npx hardhat task-gen:MyERC20:approve --contract-address <contractAddress:optional> --spender <spender> --value <value>` |
| balanceOf | `account` (address) | `output1` (uint256) | `npx hardhat task-gen:MyERC20:balanceOf --contract-address <contractAddress:optional> --account <account>` |
| burn | `value` (uint256) |  | `npx hardhat task-gen:MyERC20:burn --contract-address <contractAddress:optional> --value <value>` |
| burnFrom | `account` (address), `value` (uint256) |  | `npx hardhat task-gen:MyERC20:burnFrom --contract-address <contractAddress:optional> --account <account> --value <value>` |
| decimals |  | `output1` (uint8) | `npx hardhat task-gen:MyERC20:decimals --contract-address <contractAddress:optional>` |
| eip712Domain |  | `fields` (bytes1), `name` (string), `version` (string), `chainId` (uint256), `verifyingContract` (address), `salt` (bytes32), `extensions` (uint256[]) | `npx hardhat task-gen:MyERC20:eip712Domain --contract-address <contractAddress:optional>` |
| getRoleAdmin | `role` (bytes32) | `output1` (bytes32) | `npx hardhat task-gen:MyERC20:getRoleAdmin --contract-address <contractAddress:optional> --role <role>` |
| grantRole | `role` (bytes32), `account` (address) |  | `npx hardhat task-gen:MyERC20:grantRole --contract-address <contractAddress:optional> --role <role> --account <account>` |
| hasRole | `role` (bytes32), `account` (address) | `output1` (bool) | `npx hardhat task-gen:MyERC20:hasRole --contract-address <contractAddress:optional> --role <role> --account <account>` |
| mint | `to` (address), `amount` (uint256) |  | `npx hardhat task-gen:MyERC20:mint --contract-address <contractAddress:optional> --to <to> --amount <amount>` |
| name |  | `output1` (string) | `npx hardhat task-gen:MyERC20:name --contract-address <contractAddress:optional>` |
| nonces | `owner` (address) | `output1` (uint256) | `npx hardhat task-gen:MyERC20:nonces --contract-address <contractAddress:optional> --owner <owner>` |
| pause |  |  | `npx hardhat task-gen:MyERC20:pause --contract-address <contractAddress:optional>` |
| paused |  | `output1` (bool) | `npx hardhat task-gen:MyERC20:paused --contract-address <contractAddress:optional>` |
| permit | `owner` (address), `spender` (address), `value` (uint256), `deadline` (uint256), `v` (uint8), `r` (bytes32), `s` (bytes32) |  | `npx hardhat task-gen:MyERC20:permit --contract-address <contractAddress:optional> --owner <owner> --spender <spender> --value <value> --deadline <deadline> --v <v> --r <r> --s <s>` |
| renounceRole | `role` (bytes32), `callerConfirmation` (address) |  | `npx hardhat task-gen:MyERC20:renounceRole --contract-address <contractAddress:optional> --role <role> --caller-confirmation <callerConfirmation>` |
| revokeRole | `role` (bytes32), `account` (address) |  | `npx hardhat task-gen:MyERC20:revokeRole --contract-address <contractAddress:optional> --role <role> --account <account>` |
| supportsInterface | `interfaceId` (bytes4) | `output1` (bool) | `npx hardhat task-gen:MyERC20:supportsInterface --contract-address <contractAddress:optional> --interface-id <interfaceId>` |
| symbol |  | `output1` (string) | `npx hardhat task-gen:MyERC20:symbol --contract-address <contractAddress:optional>` |
| totalSupply |  | `output1` (uint256) | `npx hardhat task-gen:MyERC20:totalSupply --contract-address <contractAddress:optional>` |
| transfer | `to` (address), `value` (uint256) | `output1` (bool) | `npx hardhat task-gen:MyERC20:transfer --contract-address <contractAddress:optional> --to <to> --value <value>` |
| transferFrom | `from` (address), `to` (address), `value` (uint256) | `output1` (bool) | `npx hardhat task-gen:MyERC20:transferFrom --contract-address <contractAddress:optional> --from <from> --to <to> --value <value>` |
| unpause |  |  | `npx hardhat task-gen:MyERC20:unpause --contract-address <contractAddress:optional>` |

## MyERC721

| Function Name | Parameters | Outputs | Command |
|---------------|------------|---------|---------|
| DEFAULT_ADMIN_ROLE |  | `output1` (bytes32) | `npx hardhat task-gen:MyERC721:DEFAULT_ADMIN_ROLE --contract-address <contractAddress:optional>` |
| MINTER_ROLE |  | `output1` (bytes32) | `npx hardhat task-gen:MyERC721:MINTER_ROLE --contract-address <contractAddress:optional>` |
| PAUSER_ROLE |  | `output1` (bytes32) | `npx hardhat task-gen:MyERC721:PAUSER_ROLE --contract-address <contractAddress:optional>` |
| approve | `to` (address), `tokenId` (uint256) |  | `npx hardhat task-gen:MyERC721:approve --contract-address <contractAddress:optional> --to <to> --token-id <tokenId>` |
| balanceOf | `owner` (address) | `output1` (uint256) | `npx hardhat task-gen:MyERC721:balanceOf --contract-address <contractAddress:optional> --owner <owner>` |
| burn | `tokenId` (uint256) |  | `npx hardhat task-gen:MyERC721:burn --contract-address <contractAddress:optional> --token-id <tokenId>` |
| getApproved | `tokenId` (uint256) | `output1` (address) | `npx hardhat task-gen:MyERC721:getApproved --contract-address <contractAddress:optional> --token-id <tokenId>` |
| getRoleAdmin | `role` (bytes32) | `output1` (bytes32) | `npx hardhat task-gen:MyERC721:getRoleAdmin --contract-address <contractAddress:optional> --role <role>` |
| grantRole | `role` (bytes32), `account` (address) |  | `npx hardhat task-gen:MyERC721:grantRole --contract-address <contractAddress:optional> --role <role> --account <account>` |
| hasRole | `role` (bytes32), `account` (address) | `output1` (bool) | `npx hardhat task-gen:MyERC721:hasRole --contract-address <contractAddress:optional> --role <role> --account <account>` |
| isApprovedForAll | `owner` (address), `operator` (address) | `output1` (bool) | `npx hardhat task-gen:MyERC721:isApprovedForAll --contract-address <contractAddress:optional> --owner <owner> --operator <operator>` |
| name |  | `output1` (string) | `npx hardhat task-gen:MyERC721:name --contract-address <contractAddress:optional>` |
| ownerOf | `tokenId` (uint256) | `output1` (address) | `npx hardhat task-gen:MyERC721:ownerOf --contract-address <contractAddress:optional> --token-id <tokenId>` |
| pause |  |  | `npx hardhat task-gen:MyERC721:pause --contract-address <contractAddress:optional>` |
| paused |  | `output1` (bool) | `npx hardhat task-gen:MyERC721:paused --contract-address <contractAddress:optional>` |
| renounceRole | `role` (bytes32), `callerConfirmation` (address) |  | `npx hardhat task-gen:MyERC721:renounceRole --contract-address <contractAddress:optional> --role <role> --caller-confirmation <callerConfirmation>` |
| revokeRole | `role` (bytes32), `account` (address) |  | `npx hardhat task-gen:MyERC721:revokeRole --contract-address <contractAddress:optional> --role <role> --account <account>` |
| safeMint | `to` (address), `uri` (string) |  | `npx hardhat task-gen:MyERC721:safeMint --contract-address <contractAddress:optional> --to <to> --uri <uri>` |
| safeTransferFrom | `from` (address), `to` (address), `tokenId` (uint256) |  | `npx hardhat task-gen:MyERC721:safeTransferFrom:1 --contract-address <contractAddress:optional> --from <from> --to <to> --token-id <tokenId>` |
| safeTransferFrom | `from` (address), `to` (address), `tokenId` (uint256), `data` (bytes) |  | `npx hardhat task-gen:MyERC721:safeTransferFrom:2 --contract-address <contractAddress:optional> --from <from> --to <to> --token-id <tokenId> --data <data>` |
| setApprovalForAll | `operator` (address), `approved` (bool) |  | `npx hardhat task-gen:MyERC721:setApprovalForAll --contract-address <contractAddress:optional> --operator <operator> --approved <approved>` |
| supportsInterface | `interfaceId` (bytes4) | `output1` (bool) | `npx hardhat task-gen:MyERC721:supportsInterface --contract-address <contractAddress:optional> --interface-id <interfaceId>` |
| symbol |  | `output1` (string) | `npx hardhat task-gen:MyERC721:symbol --contract-address <contractAddress:optional>` |
| tokenByIndex | `index` (uint256) | `output1` (uint256) | `npx hardhat task-gen:MyERC721:tokenByIndex --contract-address <contractAddress:optional> --index <index>` |
| tokenOfOwnerByIndex | `owner` (address), `index` (uint256) | `output1` (uint256) | `npx hardhat task-gen:MyERC721:tokenOfOwnerByIndex --contract-address <contractAddress:optional> --owner <owner> --index <index>` |
| tokenURI | `tokenId` (uint256) | `output1` (string) | `npx hardhat task-gen:MyERC721:tokenURI --contract-address <contractAddress:optional> --token-id <tokenId>` |
| totalSupply |  | `output1` (uint256) | `npx hardhat task-gen:MyERC721:totalSupply --contract-address <contractAddress:optional>` |
| transferFrom | `from` (address), `to` (address), `tokenId` (uint256) |  | `npx hardhat task-gen:MyERC721:transferFrom --contract-address <contractAddress:optional> --from <from> --to <to> --token-id <tokenId>` |
| unpause |  |  | `npx hardhat task-gen:MyERC721:unpause --contract-address <contractAddress:optional>` |
