import React, { useState, useEffect } from "react";
import CustomBtn from "../BtnComponent";
import OutBtn from "../OutlineComponent";
import { MdClose } from "react-icons/md";
import Slider from "@mui/material/Slider";
import {
  ZapModal,
  ZapModalBody,
  CloseBtn,
  ZapBack,
  CirclePart,
  ArrowImg,
  Btns,
  Xpart,
  Values,
  LiqPart,
  LeveBtn,
  SliderPart,
  InputPart,
  MaxBtn,
  CusInput,
} from "./confirm.style";
import CardArrow from "../../assets/Img/cardarrow.png";
import ModalImg from "../../assets/Img/modaImg.png";

export default function ConfirmContainer({
  visible,
  closeFunc,
  value,
  btnFlag,
  sliderValue,
}) {
  const [flag, setFlag] = useState(false);
  const [slidervalue, setValue] = useState();
  useEffect(() => {
    setFlag(btnFlag);
    setValue(sliderValue.startValue);
  }, [btnFlag]);

  const handleChange = (e) => {
    if (
      !isNaN(e.target.value) &&
      e.target.value <= sliderValue.endValue &&
      e.target.value >= sliderValue.startValue
    ) {
      setValue(e.target.value);
    }
  };
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
                <ArrowImg src={CardArrow} alt="" />
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
            <ArrowImg src={ModalImg} alt="" mt="38px" width="300px" />
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
            <SliderPart>
              <InputPart>
                <MaxBtn onClick={() => setValue(sliderValue.endValue)}>
                  MAX
                </MaxBtn>
                <CusInput
                  type="number"
                  value={slidervalue}
                  onChange={(e) => handleChange(e)}
                />
              </InputPart>
              <Slider
                aria-label="Volume"
                value={slidervalue}
                onChange={handleChange}
                min={sliderValue.startValue}
                max={sliderValue.endValue}
                step={0.01}
              />
            </SliderPart>
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
                text={flag ? "LEVERAGE" : "DELEVERAGE"}
                clickFunc={() => console.log(`Valuse is `, slidervalue)}
              />
            </LeveBtn>
          </ZapModalBody>
          <ZapBack onClick={() => closeFunc(false)} />
        </ZapModal>
      )}
    </>
  );
}
