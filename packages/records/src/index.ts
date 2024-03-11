import {
  EDNS,
  EdnsChainId,
  Net,
  TypedAddress,
  TypedText,
} from "@ednsdomains/core";

export class RecordManager {
  private edns: EDNS = EDNS.getInstance();
  private factoryType: "chain" | "api" = "chain";
  private net: Net;

  public constructor(factoryType: "chain" | "api", net: Net = Net.MAINNET) {
    this.factoryType = factoryType;
    this.net = net;
  }

  public GetAllRecords = async (fqdn: string, chainId?: EdnsChainId) => {
    return {
      text: await this.GetTextRecord(fqdn, chainId),
      // typedText: await this.GetTypedTextRecords(fqdn, chainId),
      address: await this.GetAddressRecord(fqdn, chainId),
      // typedAddress: await this.GetTypedAddressRecords(fqdn, chainId),
    };
  };

  public GetTextRecord = async (fqdn: string, chainId?: EdnsChainId) => {
    const factory = this.edns.getFactory({
      type: this.factoryType,
      net: this.net,
      chainId,
    });
    return await factory.getMethods()["text"](fqdn);
  };

  public GetTypedTextRecord = async (
    fqdn: string,
    type: TypedText,
    chainId?: EdnsChainId
  ) => {
    const factory = this.edns.getFactory({
      type: this.factoryType,
      net: this.net,
      chainId,
    });
    return await factory.getTypedMethods()["typedText"](fqdn, type);
  };

  public GetAddressRecord = async (fqdn: string, chainId?: EdnsChainId) => {
    const factory = this.edns.getFactory({
      type: this.factoryType,
      net: this.net,
      chainId,
    });
    return await factory.getMethods()["address"](fqdn);
  };

  public GetTypedAddressRecord = async (
    fqdn: string,
    type: TypedAddress,
    chainId?: EdnsChainId
  ) => {
    const factory = this.edns.getFactory({
      type: this.factoryType,
      net: this.net,
      chainId,
    });
    return await factory.getTypedMethods()["typedAddress"](fqdn, type);
  };

  public GetSubDomainRecords = (fqdn: string, chainId?: EdnsChainId) => {};
}
