// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

contract NFTMarketplace is ERC721URIStorage 
{
    address payable owner;

    constructor() ERC721("NFTMarketplace", "NFTM") {
        owner = payable(msg.sender);
    }

    struct items{
        uint256 tokenId,
        address owner,
        address seller,
        bool sold;
    }

    mapping(uint256 => items) idToMarket;
    items[];

    function sellItem(uint256 _tokenId)public view returns(uint256)
    {
        require()
    }
}
