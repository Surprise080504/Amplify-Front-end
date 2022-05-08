import React from "react";
import { Link } from "react-router-dom";
import CustomBtn from "../../components/BtnComponent";
import OutlineBtn from "../../components/OutlineComponent";
import EarnedModal from "../../components/TigerEarnedComponent";
import { toast } from "react-toastify";
import { useEthContext } from "../../contexts/EthereumContext";
import { HomeOut, HomeImg, Btns, SubText, LearnMoreText } from "./home.style";

export default function HomeContainer() {
  const { provider, currentAcc } = useEthContext();
  const ShowToast = () => {
    toast.warn("Please connect to Metamask", {
      theme: "dark",
    });
  };
  return (
    <HomeOut>
      <HomeImg src="img/mark.png" alt="" draggable={false} />
      <Btns>
        {currentAcc ? (
          <Link to="/markets">
            <OutlineBtn
              text="MARKETS"
              clickFunc={() => console.log("clicked!!!")}
            />
          </Link>
        ) : (
          <OutlineBtn text="MARKETS" clickFunc={() => ShowToast()} />
        )}

        {currentAcc ? (
          <Link to="/borrow">
            <OutlineBtn
              text="BORROW"
              clickFunc={() => console.log("clicked!!!")}
            />
          </Link>
        ) : (
          <OutlineBtn text="BORROW" clickFunc={() => ShowToast()} />
        )}
        {currentAcc ? (
          <Link to="/lend">
            <OutlineBtn
              text="LEND"
              clickFunc={() => console.log("clicked!!!")}
            />
          </Link>
        ) : (
          <OutlineBtn text="LEND" clickFunc={() => ShowToast()} />
        )}
        {currentAcc ? (
          <Link to="/xampl">
            <OutlineBtn
              text="xAMPL"
              clickFunc={() => console.log("clicked!!!")}
            />
          </Link>
        ) : (
          <OutlineBtn text="xAMPL" clickFunc={() => ShowToast()} />
        )}
      </Btns>
      <SubText>
        Amplify Finance provides ecentralized lending on the Cronos Network.
      </SubText>
      <LearnMoreText>Learn More</LearnMoreText>
    </HomeOut>
  );
}
