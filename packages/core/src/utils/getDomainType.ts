import tlds from "../data/tlds.json";

export const getDomainType = (
  fqdn: string
): "classical" | "universal" | "omni" => {
  const [tld] = fqdn.split(".").reverse();

  for (const chain of tlds.classical) {
    if (chain.names.includes(tld)) {
      return "classical";
    }
  }

  for (const category of tlds.universal) {
    if (category.names.includes(tld)) {
      return "universal";
    }
  }

  for (const category of tlds.omni) {
    if (category.names.includes(tld)) {
      return "omni";
    }
  }
  throw new Error("Unknown domain type");
  // const isUniversal;
  // return (tlds as ITldList)[tld].type;
};
