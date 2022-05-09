import styled from "styled-components";

export const CusBtn = styled.div`
  .MuiButton-containedPrimary {
    background-color: #ff8718 !important;
    border-radius: 12px !important;
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    border: solid transparent;
    border-width: 0 0 4px;
    color: #ffffff;
    cursor: pointer;
    font-family: ${(props) => props.family} !important;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${(props) => props.fontsize};
    transition: all 0.3s ease-in-out;
    transform: translateZ(0);
    padding: 0 !important;
    border-bottom: 4px solid #b35600 !important;
    :hover {
      background-color: #e66f00 !important;
    }
  }
`;

export const ZapModal = styled.div`
  padding: 20px 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
`;

export const ZapBack = styled.div`
  position: fixed;
  /* width: 100vw; */
  /* height: 100vh; */
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 101;
  left: 0;
  background-color: rgba(208, 220, 232, 0.6);
`;

export const ZapModalBody = styled.div`
  z-index: 105;
  position: absolute;
  background-color: #000;
  height: fit-content;
  padding: 20px 25px 40px;
  text-align: center;
  width: 350px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 370px) {
    width: 90%;
  }
`;

export const CloseBtn = styled.div`
  width: 100%;
  display: flex;
  font-family: ChakraBold;
  font-size: 25px;
  justify-content: flex-end;
  .closeclass {
    cursor: pointer;
  }
`;
export const ModalLine = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #ffffff;
  align-items: center;
  display: flex;
  margin-top: ${(props) => props.mt};
`;
export const CusInput = styled.input`
  width: 150px;
  height: 40px;
  font-size: 20px;
  border: 1px solid red;
  margin-right: 30px;
  background: rgba(39, 111, 252, 0.7);
  border-radius: 10px;
  border-style: none;
  outline: none;
  padding: 0 20px;
  font-weight: bold;
  color: #fff;
`;
export const BalanceLabel = styled.div`
  width: 150px;
  font-weight: 700;
  font-size: 18px;
  margin-right: 30px;
  line-height: 23px;
  text-align: right;
  color: #a9cf83;
`;
export const RightLabel = styled.div`
  width: 53px;
  cursor: pointer;
`;
export const AppBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
