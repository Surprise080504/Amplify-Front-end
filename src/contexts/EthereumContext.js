import { createContext, useContext } from "react";
import Web3 from "web3";

export const EthereumContext = createContext({
  provider: [],
  accounts: [],
  web3: Web3 ? Web3 : null,
  currentAcc: "",
});

export const useEthContext = () => useContext(EthereumContext);
