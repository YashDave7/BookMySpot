// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

contract Eppo is ERC721URIStorage {
    address public owner;
    address public professional;
    address public client;
    bool public isApproved;
    event Approved(uint);
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    string svgPartOne =
        '<svg xmlns="http://www.w3.org/2000/svg" width="270" height="270" fill="none"><path fill="url(#B)" d="M0 0h270v270H0z"/><defs><filter id="A" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="270" width="270"><feDropShadow dx="0" dy="1" stdDeviation="2" flood-opacity=".225" width="200%" height="200%"/></filter></defs><path d="M72.863 42.949c-.668-.387-1.426-.59-2.197-.59s-1.529.204-2.197.59l-10.081 6.032-6.85 3.934-10.081 6.032c-.668.387-1.426.59-2.197.59s-1.529-.204-2.197-.59l-8.013-4.721a4.52 4.52 0 0 1-1.589-1.616c-.384-.665-.594-1.418-.608-2.187v-9.31c-.013-.775.185-1.538.572-2.208a4.25 4.25 0 0 1 1.625-1.595l7.884-4.59c.668-.387 1.426-.59 2.197-.59s1.529.204 2.197.59l7.884 4.59a4.52 4.52 0 0 1 1.589 1.616c.384.665.594 1.418.608 2.187v6.032l6.85-4.065v-6.032c.013-.775-.185-1.538-.572-2.208a4.25 4.25 0 0 0-1.625-1.595L41.456 24.59c-.668-.387-1.426-.59-2.197-.59s-1.529.204-2.197.59l-14.864 8.655a4.25 4.25 0 0 0-1.625 1.595c-.387.67-.585 1.434-.572 2.208v17.441c-.013.775.185 1.538.572 2.208a4.25 4.25 0 0 0 1.625 1.595l14.864 8.655c.668.387 1.426.59 2.197.59s1.529-.204 2.197-.59l10.081-5.901 6.85-4.065 10.081-5.901c.668-.387 1.426-.59 2.197-.59s1.529.204 2.197.59l7.884 4.59a4.52 4.52 0 0 1 1.589 1.616c.384.665.594 1.418.608 2.187v9.311c.013.775-.185 1.538-.572 2.208a4.25 4.25 0 0 1-1.625 1.595l-7.884 4.721c-.668.387-1.426.59-2.197.59s-1.529-.204-2.197-.59l-7.884-4.59a4.52 4.52 0 0 1-1.589-1.616c-.385-.665-.594-1.418-.608-2.187v-6.032l-6.85 4.065v6.032c-.013.775.185 1.538.572 2.208a4.25 4.25 0 0 0 1.625 1.595l14.864 8.655c.668.387 1.426.59 2.197.59s1.529-.204 2.197-.59l14.864-8.655c.657-.394 1.204-.95 1.589-1.616s.594-1.418.609-2.187V55.538c.013-.775-.185-1.538-.572-2.208a4.25 4.25 0 0 0-1.625-1.595l-14.993-8.786z" fill="#fff"/><defs><linearGradient id="B" x1="0" y1="0" x2="270" y2="270" gradientUnits="userSpaceOnUse"><stop stop-color="#cb5eee"/><stop offset="1" stop-color="#0cd7e4" stop-opacity=".99"/></linearGradient></defs><text x="32.5" y="231" font-size="27" fill="#fff" filter="url(#A)" font-family="Plus Jakarta Sans,DejaVu Sans,Noto Color Emoji,Apple Color Emoji,sans-serif" font-weight="bold">';
    string svgPartTwo = "</text></svg>";

    struct Transaction {
        address client;
        address professional;
        uint256 amount;
        uint256 time;
    }

    mapping(address => Transaction[]) internal History;
    mapping(address => bool) internal getDiscount;

    constructor() ERC721("Eppo","EP") {
        owner = msg.sender;
    }

    function approveC(string calldata _name) external onlyClient {
        string memory finalSVG = string(
            abi.encodePacked(svgPartOne, _name, svgPartTwo)
        );
        uint256 newRecordId = _tokenIds.current();

        string memory json = Base64.encode(
            abi.encodePacked(
               '{"name": "',
                _name,
                '", "description": "A sucessful transfer.", "image": "data:image/svg+xml;base64,',
                Base64.encode(bytes(finalSVG)),
                '"}'
            )
        );
         string memory finalTokenUri = string(
            abi.encodePacked("data:application/json;base64,", json)
        );
        console.log(
            "/n----------------------------------------------------------------------"
        );
        console.log("Final tokenURI", finalTokenUri);
        console.log(
            "-----------------------------------------------------------------------\n"
        );
        _safeMint(msg.sender, newRecordId);
        _setTokenURI(newRecordId, finalTokenUri);
        console.log("Successfully minted!"); 
        _tokenIds.increment();
        uint256 balance = address(this).balance;
        (bool sent, ) = payable(professional).call{value: balance}("");
        require(sent, "Failed to send Ether");
        emit Approved(balance);
        isApproved = true;
    }

    function GetDiscount() external onlyClient {
        uint256 token = balanceOf(client);
        if(token == 1) {
            // give discount
            getDiscount[msg.sender] = true;
        }
    }

    function cancelPro() external onlyPro {
        uint256 balance = address(this).balance;
        (bool sent, ) = payable(client).call{value: balance}("");
        require(sent, "Failed to send Ether");
    }

    function cancel() external onlyClient {
        uint256 balance = address(this).balance;
        uint256 userAmount = (balance * 80) / 100;
        uint256 proAmount = balance - userAmount;
        (bool sent, ) = payable(professional).call{value: proAmount}("");
        require(sent, "Failed to send Ether");
        (bool s, ) = payable(client).call{value: userAmount}("");
        require(s, "Failed to send Ether");
    }

    function transfer(address payable _reci) external payable {
        professional = _reci;
        client = msg.sender;
        History[_reci].push(
            Transaction(msg.sender, _reci, msg.value, block.timestamp)
        );
    }

    function getHistory(
        address _address
    ) public view returns (Transaction[] memory) {
        return History[_address];
    }

    modifier onlyClient() {
        require(msg.sender == client);
        _;
    }
    modifier onlyPro () {
        require(msg.sender == professional);
        _;
    }
}
// 0xA7CBbA825aC39f3EB7198EC59c228bb042b4450D
