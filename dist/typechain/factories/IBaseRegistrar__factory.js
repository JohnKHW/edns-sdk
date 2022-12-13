"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IBaseRegistrar__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes",
                name: "name",
                type: "bytes",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "tld",
                type: "bytes",
            },
            {
                indexed: false,
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "DomainReclaimed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes",
                name: "name",
                type: "bytes",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "tld",
                type: "bytes",
            },
            {
                indexed: false,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "expires",
                type: "uint256",
            },
        ],
        name: "DomainRegistered",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes",
                name: "name",
                type: "bytes",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "tld",
                type: "bytes",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "expires",
                type: "uint256",
            },
        ],
        name: "DomainRenewed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes",
                name: "tld",
                type: "bytes",
            },
            {
                indexed: false,
                internalType: "address",
                name: "controller",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "SetController",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "name",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "tld",
                type: "bytes",
            },
        ],
        name: "getExpires",
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
                internalType: "bytes",
                name: "tld",
                type: "bytes",
            },
        ],
        name: "isAvailable",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "tld",
                type: "bytes",
            },
        ],
        name: "isAvailable",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
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
                internalType: "address",
                name: "controller",
                type: "address",
            },
        ],
        name: "isControllerApproved",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
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
        ],
        name: "isExists",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
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
                internalType: "bytes",
                name: "tld",
                type: "bytes",
            },
        ],
        name: "isExists",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
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
                internalType: "bytes",
                name: "tld",
                type: "bytes",
            },
        ],
        name: "ownerOf",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
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
                internalType: "bytes",
                name: "tld",
                type: "bytes",
            },
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "uint64",
                name: "expires",
                type: "uint64",
            },
        ],
        name: "register",
        outputs: [],
        stateMutability: "nonpayable",
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
                internalType: "bytes",
                name: "tld",
                type: "bytes",
            },
            {
                internalType: "uint64",
                name: "expires",
                type: "uint64",
            },
        ],
        name: "renew",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "tld",
                type: "bytes",
            },
            {
                internalType: "address",
                name: "controller",
                type: "address",
            },
            {
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "setControllerApproval",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class IBaseRegistrar__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IBaseRegistrar__factory = IBaseRegistrar__factory;
IBaseRegistrar__factory.abi = _abi;
//# sourceMappingURL=IBaseRegistrar__factory.js.map