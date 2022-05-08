import React, { Suspense, useEffect, useState } from "react";
import Web3 from "web3";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { EthereumContext } from "./contexts/EthereumContext";

import AppRouter from "./router";
//scss files
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function App() {
  const [provider, setProvider] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [currentAcc, setCurrentAcc] = useState("");

  useEffect(() => {
    const { ethereum } = window;

    if (ethereum && ethereum.isMetaMask) {
      setProvider(ethereum);
      setWeb3(new Web3(ethereum));
      ethereum.on("accountsChanged", (accs) => {
        setAccounts(accs);
        setCurrentAcc(accs[0]);
      });
      ethereum.on("chainChanged", (chainId) => {
        if (chainId === "0x1") {
          toast("Ethereum mainnet connected successfully");
        } else {
          toast.error("Please connect to Ethereum Mainnet", {
            theme: "dark",
          });
        }
      });
    } else {
      toast.error("Please install Metamask wallet in this browser", {
        theme: "dark",
      });
    }
  }, []);

  useEffect(() => {
    const setCurrentlyConnectedAccount = async () => {
      let accounts = await web3.eth.getAccounts();
      if (accounts && accounts.length > 0) {
        setCurrentAcc(accounts[0]);
      }
    };
    if (web3) {
      setCurrentlyConnectedAccount();
    }
  }, [web3]);

  return (
    <React.Fragment>
      <EthereumContext.Provider
        value={{ provider, accounts, web3, currentAcc }}
      >
        <Suspense fallback={null}>
          <AppRouter />
        </Suspense>
      </EthereumContext.Provider>
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;
