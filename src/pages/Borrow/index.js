import React, { useState } from "react";
import CustomBtn from "../../components/BtnComponent";
import OutlineBtn from "../../components/OutlineComponent";
import DepositModal from "../../components/ConfirmComponent";
import { Link } from "react-router-dom";

import {
  HomeOut,
  BorrowTitle,
  LPTokenImg,
  BorrowContainer,
  LPTokenPart,
  LP,
  QuesImg,
  ResBtns,
  Btns,
  BorrowCard,
  HideTitle,
  BorrowValue,
  SupplyText,
} from "./borrow.style";
const ItemArr = [
  "Total Supply",
  "Total Borrow",
  "Utilization",
  "Supply APR",
  "Borrow APR",
  "Farming APR",
];
const Values = {
  start_liquid_Price: 1.01,
  end_liquid_Price: 3.08,
  twap_price: 2.18,
  borrow: 123,
  fee: "0.0001BT/ 0.0000001ETH",
  reward_apr: 123,
  borrow_apr: -15,
  estimated_apr: 109,
};
export default function MarketsContainer() {
  const [visible, setVisible] = useState(false);
  const [modalValues, setModalValues] = useState(Values);
  return (
    <HomeOut>
      <Link to="/">
        <HideTitle>AMPLIFY</HideTitle>
      </Link>
      <BorrowTitle>Borrow</BorrowTitle>
      <BorrowContainer>
        {ItemArr.map((e, index) => (
          <BorrowCard key={index}>
            <BorrowValue direct="left">$00K</BorrowValue>
            <SupplyText>{e}</SupplyText>
            <BorrowValue direct="right">$00K</BorrowValue>
          </BorrowCard>
        ))}
      </BorrowContainer>
      <LPTokenPart>
        <LP>
          <span>LP Token</span>
          <br />
          <LPTokenImg src="img/twocircle.png" alt="" draggable={false} />
        </LP>
        <Btns>
          <OutlineBtn text="DEPOSIT" clickFunc={() => setVisible(true)} />
          <CustomBtn text="LEVERAGE" clickFunc={() => setVisible(true)} />
          <CustomBtn text="WITHDRAW" clickFunc={() => setVisible(true)} />
          <OutlineBtn text="DELEVERAGE" clickFunc={() => setVisible(true)} />
        </Btns>
        <QuesImg src="img/ques.png" alt="" draggable={false} />
      </LPTokenPart>
      <ResBtns>
        <OutlineBtn text="DEPOSIT" clickFunc={() => setVisible(true)} />
        <OutlineBtn text="LEVERAGE" clickFunc={() => setVisible(true)} />
        <OutlineBtn text="WITHDRAW" clickFunc={() => setVisible(true)} />
        <OutlineBtn text="DELEVERAGE" clickFunc={() => setVisible(true)} />
      </ResBtns>
      <DepositModal
        visible={visible}
        closeFunc={() => setVisible(false)}
        value={modalValues}
      />
    </HomeOut>
  );
}
