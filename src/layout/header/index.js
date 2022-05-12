import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useEthContext } from "../../contexts/EthereumContext";
import {
  HeaderOut,
  Header,
  Left,
  Right,
  WalletImg,
  Tabs,
  HeaderTab,
} from "./header.style";
import NON_ConnectImg from "../../assets/Img/non_connect.png";
import ConnectImg from "../../assets/Img/connected.png";

export default function HeaderContainer() {
  const { provider, currentAcc } = useEthContext();
  const location = useLocation();
  const [active, setActive] = useState(0);
  const ChangeActive = (e) => {
    setActive(e);
  };

  const handleConnectWallet = async () => {
    if (provider) {
      if (Number(window.ethereum.chainId) !== 25) {
        toast.error("Please switch to Cronos network", {
          theme: "dark",
        });
      } else {
        await provider.request({ method: `eth_requestAccounts` });
      }
    } else {
      toast.error("Please install Metamask wallet in this browser", {
        theme: "dark",
      });
    }
  };

  return (
    <HeaderOut>
      <Header>
        <Link to="/">
          <Left>{currentAcc ? `AMPLIFY` : ""}</Left>
        </Link>
        <Right onClick={handleConnectWallet}>
          <WalletImg
            src={currentAcc ? ConnectImg : NON_ConnectImg}
            alt=""
            draggable={false}
          />
          {currentAcc
            ? `${currentAcc.substring(0, 5)}...${currentAcc.substring(39)}`
            : "CONNECT"}
        </Right>
      </Header>
      {location.pathname !== "/" && currentAcc && (
        <Tabs>
          <Link to="/markets">
            <HeaderTab
              active={active === 0 && true}
              onClick={() => ChangeActive(0)}
            >
              Markets
            </HeaderTab>
          </Link>
          {/* <Link to="/borrow">
            <HeaderTab
              active={active === 1 && true}
              onClick={() => ChangeActive(1)}
            >
              Borrow
            </HeaderTab>
          </Link>
          <Link to="/lend">
            <HeaderTab
              active={active === 2 && true}
              onClick={() => ChangeActive(2)}
            >
              Lend
            </HeaderTab>
          </Link> */}
          <Link to="/xampl">
            <HeaderTab
              active={active === 3 && true}
              onClick={() => ChangeActive(3)}
            >
              xAMPL
            </HeaderTab>
          </Link>
        </Tabs>
      )}
    </HeaderOut>
  );
}
