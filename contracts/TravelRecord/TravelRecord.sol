//SPDX-License-Identifier: MIT
import '../TransactionHistory/TransactionHistory.sol';
pragma solidity 0.8.19;

contract TravelRecord{
    struct Details{
        bool exists;
        address ctr;
    }
    mapping(string => Details) M;
    function AddDetails(string memory email,string memory txnTime,string memory txnPackage,uint256 txnQuantity,string memory txntransactionId) public{
        if(M[email].exists)
        {
            TransactionHistory(M[email].ctr).pushData(txnTime,txnPackage,txnQuantity,txntransactionId);
        }
        else
        {
            TransactionHistory TXN = new TransactionHistory();
            address contractAddress = address(TXN);
            M[email].ctr=contractAddress;
            M[email].exists=true;
            TransactionHistory(M[email].ctr).pushData(txnTime,txnPackage,txnQuantity,txntransactionId);
        }
    }
    function retrieve(string memory email) public view returns(TransactionHistory.Data[] memory){
        return TransactionHistory(M[email].ctr).retrieve();
    }
}