import React from "react";
import CustomBtn from "../BtnComponent";
import {
  ZapModal,
  ZapBack,
  LionCard,
  CardImg,
  SubText,
  CardTitle,
  CardMoney,
  ZAPBtn,
} from "./earned.style";

export default function ConfirmContainer({ visible }) {
  return (
    <>
      {visible && (
        <ZapModal>
          <LionCard>
            <CardImg src="img/img2.png" alt="" />
            <CardTitle>70.7825</CardTitle>
            <CardMoney>[$493.81]</CardMoney>
            <SubText>TIGER Earned</SubText>
            <ZAPBtn>
              <CustomBtn
                width="30px"
                height="60px"
                radius="50%"
                fontsize="27px"
                borderbottom={false}
                text="minus"
                // clickFunc={() => ChangeZapFlag()}
              />
              <CustomBtn
                width="45px"
                height="60px"
                fontsize="20px"
                radius="50%"
                borderbottom={false}
                bgColor="#C44407"
                text="lightning"
                // clickFunc={() => ChangeZapFlag()}
              />
              <CustomBtn
                width="45px"
                height="60px"
                fontsize="27px"
                radius="50%"
                borderbottom={false}
                text="plus"
                // clickFunc={() => ChangeZapFlag()}
              />
            </ZAPBtn>
          </LionCard>
          <ZapBack />
        </ZapModal>
      )}
    </>
  );
}
