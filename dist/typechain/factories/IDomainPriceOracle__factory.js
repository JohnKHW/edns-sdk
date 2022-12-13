"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDomainPriceOracle__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "tld",
                type: "bytes32",
            },
        ],
        name: "getFee",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "name",
                type: "bytes",
            },
            {
                internalType: "bytes32",
                name: "tld",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "durations",
                type: "uint256",
            },
        ],
        name: "getPrice",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "tld",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "fee",
                type: "uint256",
            },
        ],
        name: "setFee",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "tld",
                type: "bytes32",
            },
            {
                internalType: "uint256[]",
                name: "price_",
                type: "uint256[]",
            },
        ],
        name: "setPrice",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class IDomainPriceOracle__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IDomainPriceOracle__factory = IDomainPriceOracle__factory;
IDomainPriceOracle__factory.abi = _abi;
//# sourceMappingURL=IDomainPriceOracle__factory.js.map