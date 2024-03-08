import { Network } from "../enums";

export interface IResolverParams {
  net: Network;
  onchain: boolean;
  version: string;
  chain_id: number;
}
