//SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract TransactionHistory{
    struct Data{
        string time;
        string Package;
        uint256 quantity;
        string transactionId;   
    }
    Data[] public UserData;
    function pushData(string memory txnTime,string memory txnPackage,uint256 txnQuantity,string memory txntransactionId)public
    {
        UserData.push(Data(txnTime,txnPackage,txnQuantity,txntransactionId));
    }
    function retrieve() public view returns(Data[] memory){
        return UserData;
    }

}