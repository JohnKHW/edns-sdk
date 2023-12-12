"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IEncryptedPhoneNumberResolver__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes",
                name: "host",
                type: "bytes",
            },
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
                internalType: "bytes",
                name: "payload",
                type: "bytes",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "SetEncryptedPhoneNumber",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "host",
                type: "string",
            },
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "string",
                name: "tld",
                type: "string",
            },
        ],
        name: "getEncryptedPhoneNumber",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "host",
                type: "string",
            },
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "string",
                name: "tld",
                type: "string",
            },
            {
                internalType: "bytes",
                name: "payload",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "setEncryptedPhoneNumber",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "host",
                type: "string",
            },
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "string",
                name: "tld",
                type: "string",
            },
            {
                internalType: "bytes",
                name: "payload",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "setEncryptedPhoneNumber_SYNC",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class IEncryptedPhoneNumberResolver__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IEncryptedPhoneNumberResolver__factory = IEncryptedPhoneNumberResolver__factory;
IEncryptedPhoneNumberResolver__factory.abi = _abi;
//# sourceMappingURL=IEncryptedPhoneNumberResolver__factory.js.map