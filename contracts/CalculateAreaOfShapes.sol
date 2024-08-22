// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract CalculateAreaOfShapes {
    function getAreaOfTriangle(uint256 _base, uint256 _height)
        public
        pure
        returns (uint256)
    {
        return (_base * _height) / 2;
    }

    function getAreaOfSquare(uint256 _side) public pure returns (uint256) {
        return (_side * _side);
    }

    function getAreaOfRectangle(uint256 _width, uint256 _length) public pure returns (uint256) {    
    
    return (_width * _length);

    }
}
