import React, { useState } from "react";
import CustomBtn from "../BtnComponent";
import OutBtn from "../OutlineComponent";
import {
  ZapModal,
  ZapModalBody,
  CloseBtn,
  ZapBack,
  ModalLine,
  CusInput,
  AppBtn,
  CusinputOut,
  BalanceLabel,
  RightLabel,
} from "./stakemodal.style";
import { MdClose } from "react-icons/md";

export default function ConfirmContainer({ visible, closeFunc }) {
  const [val, setval] = useState(0);
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
            <ModalLine mt="20px">
              <CusInput
                type="number"
                pattern="[0-9.]"
                value={val}
                onChange={(e) => setval(e.target.value)}
              />
              <RightLabel>MAX</RightLabel>
            </ModalLine>
            <ModalLine mt="25px">
              <BalanceLabel>Balance:</BalanceLabel>
              <RightLabel>{`$0`}</RightLabel>
            </ModalLine>
            <AppBtn>
              <OutBtn
                text="APPROVE"
                width="140px"
                height="40px"
                clickFunc={() => console.log("clicked!")}
              />
            </AppBtn>
          </ZapModalBody>
          <ZapBack onClick={() => closeFunc(false)} />
        </ZapModal>
      )}
    </>
  );
}
