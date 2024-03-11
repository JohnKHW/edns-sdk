import axios from "../utils/axios";
import { Records } from "../abstracts/records.abstract";
import { ethers } from "ethers";
import { TypedText, TypedAddress } from "../types";
import { ResolverParams } from "../constants";
import { Net } from "../enums";

interface IApiFactoryProps {
  net?: Net;
}
export class ApiFactory extends Records {
  private net: Net;
  public constructor({ net = Net.MAINNET }: IApiFactoryProps) {
    super();
    this.net = net;
  }

  private getResolverParams() {
    return {
      ...ResolverParams,
      net: this.net,
    };
  }

  public async isExists(fqdn: string): Promise<boolean> {
    try {
      const res = await axios.get(`/domain/${fqdn}`, {
        params: { ...this.getResolverParams() },
      });
      return res.data.success ?? false;
    } catch (err) {
      return false;
    }
  }
  public async getOwner(fqdn: string): Promise<string> {
    try {
      const res = await axios.get(`/owner/${fqdn}`, {
        params: { ...this.getResolverParams() },
      });
      return res.data.data;
    } catch (err) {
      return ethers.constants.AddressZero;
    }
  }
  public async getName(fqdn: string): Promise<string> {
    throw new Error("Method not implemented.");
  }
  public async getResolver(fqdn: string): Promise<string> {
    throw new Error("Method not implemented.");
  }
  public async getExpiry(fqdn: string): Promise<number> {
    try {
      const res = await axios.get(`/expiry/${fqdn}`, {
        params: { ...this.getResolverParams() },
      });
      return res.data.data;
    } catch (err) {
      return 0;
    }
  }
  public async getUser(fqdn: string): Promise<string> {
    try {
      const res = await axios.get(`/owner/${fqdn}`, {
        params: { ...this.getResolverParams() },
      });
      return res.data.data;
    } catch (err) {
      return ethers.constants.AddressZero;
    }
  }
  public async getUserExpiry(fqdn: string): Promise<number> {
    throw new Error("Method not implemented.");
  }
  public getMethods() {
    return {
      text: async (fqdn: string) => {
        try {
          const res = await axios.get(`/record/${fqdn}/text`, {
            params: { ...this.getResolverParams() },
          });
          return res.data.data.text || "";
        } catch (err) {
          return "";
        }
      },
      address: async (fqdn: string) => {
        try {
          const res = await axios.get(`/record/${fqdn}/address`, {
            params: { ...this.getResolverParams() },
          });
          return res.data.data.address;
        } catch (err) {
          return ethers.constants.AddressZero;
        }
      },
    };
  }

  public getTypedMethods() {
    return {
      typedText: async (fqdn: string, type: TypedText) => {
        try {
          const res = await axios.get(`/record/${fqdn}/text/${type}`, {
            params: { ...this.getResolverParams() },
          });
          return res.data.data;
        } catch (err) {
          return "";
        }
      },
      typedAddress: async (fqdn: string, type: TypedAddress) => {
        try {
          const res = await axios.get(`/record/${fqdn}/address/${type}`, {
            params: { ...this.getResolverParams() },
          });
          return res.data.data.address;
        } catch (err) {
          return ethers.constants.AddressZero;
        }
      },
    };
  }
}
