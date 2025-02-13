// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

contract AwesomeCat {
    enum Gender {
        Male,
        Female
    }

    struct Cat {
        uint256 id;
        Gender gender;
    }

    struct Parent {
        Cat father;
        Cat mother;
    }

    mapping(uint256 catId => Parent) public parents;
    mapping(address owner => Cat) public owners;
    mapping(uint256 catId => Cat) public cats;

    uint256 private currentId;

    function craftGender() public view returns (Gender) {
        return block.timestamp % 2 == 0 ? Gender.Male : Gender.Female;
    }

    function mintCat() public returns (Cat memory) {
        Cat memory newCat = Cat({id: currentId, gender: craftGender()});

        currentId++;
        owners[msg.sender] = newCat;
        cats[newCat.id] = newCat;

        return newCat;
    }

    function breedBatch(
        uint256[] memory catIdsA,
        uint256[] memory catIdsB
    ) public returns (Cat[] memory newCats) {
        require(
            catIdsA.length == catIdsB.length,
            "ERROR: Mismatched array lengths"
        );
        Cat[] memory catsA = new Cat[](catIdsA.length);
        Cat[] memory catsB = new Cat[](catIdsB.length);
        for (uint256 i = 0; i < catIdsA.length; i++) {
            catsA[i] = cats[catIdsA[i]];
            catsB[i] = cats[catIdsB[i]];
        }
        return _breedBatch(catsA, catsB);
    }

    function breedBatch(
        Cat[] memory catsA,
        Cat[] memory catsB
    ) public returns (Cat[] memory newCats) {
        return _breedBatch(catsA, catsB);
    }

    function _breedBatch(
        Cat[] memory catsA,
        Cat[] memory catsB
    ) internal returns (Cat[] memory newCats) {
        require(
            catsA.length == catsB.length,
            "ERROR: Mismatched array lengths"
        );

        newCats = new Cat[](catsA.length);
        for (uint256 i = 0; i < catsA.length; i++) {
            newCats[i] = breed(catsA[i], catsB[i]);
        }
        return newCats;
    }

    function breed(
        uint256 catIdA,
        uint256 catIdB
    ) public returns (Cat memory newCat) {
        Cat memory catA = cats[catIdA];
        Cat memory catB = cats[catIdB];
        return _breed(catA, catB);
    }

    function breed(
        Cat memory catA,
        Cat memory catB
    ) public returns (Cat memory newCat) {
        return _breed(catA, catB);
    }

    function _breed(
        Cat memory catA,
        Cat memory catB
    ) internal returns (Cat memory newCat) {
        require(exists(catA.id), "ERROR: Cat A does not exist");
        require(exists(catB.id), "ERROR: Cat B does not exist");

        require(
            catA.gender != catB.gender,
            "ERROR: Parents cannot have the same gender"
        );

        newCat = Cat({id: currentId++, gender: craftGender()});

        cats[newCat.id] = newCat;
        owners[msg.sender] = newCat;

        if (catA.gender == Gender.Male) {
            parents[newCat.id] = Parent({father: catA, mother: catB});
        } else {
            parents[newCat.id] = Parent({father: catB, mother: catA});
        }

        return newCat;
    }

    function exists(uint256 catId) public view returns (bool) {
        return cats[catId].id == catId;
    }
}
