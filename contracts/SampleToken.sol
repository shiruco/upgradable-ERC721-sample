pragma solidity ^0.5.0;

import "zos-lib/contracts/Initializable.sol";
import 'openzeppelin-eth/contracts/token/ERC721/ERC721Full.sol';
import 'openzeppelin-eth/contracts/token/ERC721/ERC721Mintable.sol';

contract SampleToken is Initializable, ERC721Full, ERC721Mintable {

  function initialize(string memory name, string memory symbol) public initializer {
    ERC721.initialize();
    ERC721Enumerable.initialize();
    ERC721Metadata.initialize(name, symbol);
    ERC721Mintable.initialize(msg.sender);
  }

  function version() public view returns (string memory) {
    // set version
    string memory ver = "v0";

    return ver;
  }
}
