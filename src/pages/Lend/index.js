import React, { useState, useEffect } from "react";
import CustomBtn from "../../components/BtnComponent";
import OutlineBtn from "../../components/OutlineComponent";
import LendModal from "../../components/LendModal";
import { cardData } from "../../data";
import {
  HomeOut,
  BorrowTitle,
  BorrowContainer,
  LPTokenPart,
  Btns,
  BorrowCard,
  BorrowValue,
  TokenText,
  SupplyText,
  TokenDiv,
  Circle,
  LPMain,
  Textline,
  ResToken,
  ResTop,
  ResLeft,
  ResRight,
  FirstLine,
  HideTitle,
  BalText,
  SecLine,
} from "./lend.style";
import { Link } from "react-router-dom";
const ItemArr = [
  "Total Supply",
  "Total Borrow",
  "Utilization",
  "Supply APR",
  "Borrow APR",
  "Farming APR",
];
export default function MarketsContainer(props) {
  const [visible, setVisible] = useState(false);
  const [balance, setbalance] = useState(123.1);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const marketName = props.match.params.marketName;
    setItems(cardData.filter((e) => e.marketName === marketName)[0]);
  }, []);

  return (
    <HomeOut>
      <Link to="/">
        <HideTitle>AMPLIFY</HideTitle>
      </Link>
      <BorrowTitle>{items.marketName}</BorrowTitle>
      <BorrowContainer>
        {items.marketData?.map((e, index) => (
          <BorrowCard key={index}>
            <BorrowValue direct="left">${e.lValue.toUpperCase()}</BorrowValue>
            <SupplyText>{e.label}</SupplyText>
            <BorrowValue direct="right">${e.rValue.toUpperCase()}</BorrowValue>
          </BorrowCard>
        ))}
      </BorrowContainer>
      <LPTokenPart>
        <LPMain>
          <Textline>
            <TokenText width="70px">Token</TokenText>
            <TokenText width="120px">Balance</TokenText>
          </Textline>
          <FirstLine>
            <TokenDiv>
              <Circle />
            </TokenDiv>
            <BalText>00000000</BalText>
            <Btns>
              <OutlineBtn text="DEPOSIT" clickFunc={() => setVisible(true)} />
              <CustomBtn text="WITHDRAW" clickFunc={() => setVisible(true)} />
            </Btns>
          </FirstLine>
          <SecLine>
            <TokenDiv>
              <Circle />
            </TokenDiv>
            <BalText>00000000</BalText>
            <Btns>
              <OutlineBtn text="DEPOSIT" clickFunc={() => setVisible(true)} />
              <CustomBtn text="WITHDRAW" clickFunc={() => setVisible(true)} />
            </Btns>
          </SecLine>
        </LPMain>
        {/* ---------------------------Mobile Token, Balance Part-------- start ---------- */}
        <ResToken>
          <ResTop>
            <ResLeft>
              Token
              <br />
              <span>Balance</span>
            </ResLeft>
            <ResRight>
              <Circle />
              <span>00000000</span>
            </ResRight>
          </ResTop>
          <Btns>
            <OutlineBtn text="DEPOSIT" clickFunc={() => setVisible(true)} />
            <OutlineBtn text="WITHDRAW" clickFunc={() => setVisible(true)} />
          </Btns>
        </ResToken>
        <ResToken mt="40px">
          <ResTop>
            <ResLeft>
              Token
              <br />
              <span>Balance</span>
            </ResLeft>
            <ResRight>
              <Circle />
              <span>00000000</span>
            </ResRight>
          </ResTop>
          <Btns>
            <OutlineBtn text="DEPOSIT" clickFunc={() => setVisible(true)} />
            <OutlineBtn text="WITHDRAW" clickFunc={() => setVisible(true)} />
          </Btns>
        </ResToken>
        {/* ---------------------------Mobile Token, Balance Part-------- end ---------- */}
      </LPTokenPart>
      <LendModal
        visible={visible}
        closeFunc={() => setVisible(false)}
        value={balance}
      />
    </HomeOut>
  );
}
