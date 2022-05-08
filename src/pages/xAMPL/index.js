import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomBtn from "../../components/BtnComponent";
import OutlineBtn from "../../components/OutlineComponent";
import StakeModal from "../../components/StakeModal";

import {
  HomeOut,
  BorrowTitle,
  BorrowSubTitle,
  CardContainer,
  GateText,
  Cardlogo,
  RewardText,
  TVLTitle,
  CardGrp,
  APRText,
  StakeBtns,
  AmplePart,
  HideTitle,
  AmpleLeft,
  AmpleRight,
  AmpText,
  AmpLogoImg,
} from "./xAMPL.style";
export default function MarketsContainer() {
  const [visible, setVisible] = useState(false);
  return (
    <HomeOut>
      <Link to="/">
        <HideTitle>AMPLIFY</HideTitle>
      </Link>
      <BorrowTitle>xAMPL</BorrowTitle>
      <BorrowSubTitle>Staking & Governance</BorrowSubTitle>
      <GateText>
        The gateway for on-chain governance and fee distribution of the Amplify
        protocol.
      </GateText>
      <CardGrp>
        <CardContainer>
          <Cardlogo src="img/cardlogo.png" alt="" draggable={false} />
          <TVLTitle mt="30px">
            Staked TVL
            <br />
            $000000
          </TVLTitle>
          <APRText mt="18px">
            APR Estimate
            <br />
            <span>00.00%</span>
          </APRText>
          <AmplePart>
            <AmpleLeft>
              <AmpLogoImg src="img/cardlogo.png" alt="" draggable={false} />
              <AmpText>
                1<br />
                <span>xAMPLE</span>
              </AmpText>
            </AmpleLeft>
            <span>=</span>
            <AmpleRight>
              <AmpLogoImg src="img/cardlogo.png" alt="" draggable={false} />
              <AmpText>
                1.655665
                <br />
                <span>xAMPLE</span>
              </AmpText>
            </AmpleRight>
          </AmplePart>
        </CardContainer>
        <CardContainer>
          <Cardlogo src="img/cardlogo.png" alt="" draggable={false} />
          <TVLTitle mt="30px">Stake xTAROT, Earn tFTM</TVLTitle>
          <RewardText>Rewards Ended</RewardText>
          <TVLTitle mt="40px">
            Staked TVL
            <br />
            $000000
          </TVLTitle>
          <APRText mt="34px">
            APR Estimate
            <br />
            <span>00.00%</span>
          </APRText>
          <StakeBtns>
            <OutlineBtn
              text="STAKE"
              width="140px"
              clickFunc={() => setVisible(true)}
            />
            <OutlineBtn
              text="UNSTAKE"
              width="140px"
              clickFunc={() => setVisible(true)}
            />
          </StakeBtns>
        </CardContainer>
      </CardGrp>
      <StakeModal visible={visible} closeFunc={() => setVisible(false)} />
    </HomeOut>
  );
}
