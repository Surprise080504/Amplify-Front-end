import React from "react";
import CustomBtn from "../BtnComponent";
import OutBtn from "../OutlineComponent";
import {
  ZapModal,
  ZapModalBody,
  CloseBtn,
  ZapTitle,
  SelectBottomLabel,
  CusInputPart,
  CusInput,
  MaxBtn,
  GoBtn,
  ZapBack,
  CirclePart,
  ArrowImg,
  Btns,
  Xpart,
  Values,
  LiqPart,
  LeveBtn,
} from "./confirm.style";
import { MdClose } from "react-icons/md";

export default function ConfirmContainer({ visible, closeFunc, value }) {
  return (
    <>
      {visible && (
        <ZapModal>
          <ZapModalBody>
            <CloseBtn>
              <MdClose
                onClick={() => closeFunc(false)}
                className="closeclass"
              />
            </CloseBtn>
            <CirclePart>
              <Xpart>
                <span>1x</span>
                <ArrowImg src="img/cardarrow.png" alt="" />
                <span>3x</span>
              </Xpart>
              CURRENT LEVERAGE
            </CirclePart>
            <LiqPart>
              <span>
                {value.start_liquid_Price} - {value.end_liquid_Price}
              </span>
              <br />
              LIQUIDATION PRICE
            </LiqPart>
            <LiqPart>
              <span>{value.twap_price}</span>
              <br />
              TWAP PRICE
              <br />
              TKN/TKN
            </LiqPart>
            <ArrowImg src="img/modaImg.png" alt="" mt="38px" width="300px" />
            <Values>
              Slippage
              <br />
              {`Borrow: $${value.borrow}`}
              <br />
              Fee: {value.fee}
              <br />
              Reward APR: {value.reward_apr}%
              <br />
              Borrow APR: {value.borrow_apr}%
              <br />
              Estimated APR: {value.estimated_apr}%
              <br />
            </Values>
            <Btns>
              <CustomBtn
                text="APPROVE"
                clickFunc={() => console.log("clicked!")}
              />

              <CustomBtn
                text="APPROVE"
                clickFunc={() => console.log("clicked!")}
              />
            </Btns>
            <LeveBtn>
              <OutBtn
                text="LEVERAGE"
                clickFunc={() => console.log("clicked!")}
              />
            </LeveBtn>
          </ZapModalBody>
          <ZapBack onClick={() => closeFunc(false)} />
        </ZapModal>
      )}
    </>
  );
}
