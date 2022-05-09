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
  width: 100vw;
  top: 0;
  left: 0;
  max-height: 100vh;
  overflow: auto;
  position: fixed;
  padding: 0;
`;

export const ZapBack = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  /* right: 0; */
  /* bottom: 0; */
  z-index: 101;
  left: 0;
  background-color: rgba(208, 220, 232, 0.6);
`;

export const ZapModalBody = styled.div`
  z-index: 105;
  position: relative;
  margin: 30px auto;
  width: 600px;
  border-radius: 30px;
  padding: 20px 25px 40px;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 620px) {
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
export const CirclePart = styled.div`
  font-weight: 400;
  font-size: 22px;
  line-height: 10px;
  text-align: center;
  border: 1px solid #276ffc;
  border-radius: 63px;
  color: #276ffc;
  width: 350px;
  padding-bottom: 20px;
  margin-top: 10px;
  @media screen and (max-width: 450px) {
    width: 300px;
  }
`;
export const Xpart = styled.div`
  span {
    font-weight: 400;
    font-size: 40px;
    line-height: 65px;
    text-align: center;
    color: #a9cf83;
  }
`;
export const ArrowImg = styled.img`
  margin: 0 30px;
  margin-top: ${(props) => props.mt};
  width: ${(props) => props.width};
`;
export const LiqPart = styled.div`
  font-weight: 400;
  font-size: 22px;
  line-height: 27px;
  margin-top: 20px;
  color: #65e2cf;
  span {
    font-size: 50px;
    line-height: 65px;
    color: #ffffff;
  }
`;
export const Values = styled.div`
  font-weight: 400;
  font-size: 22px;
  line-height: 29px;
  text-align: center;
  margin-top: 10px;
  color: #65e2cf;
`;
export const Btns = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 40px;
  justify-content: space-around;
  @media screen and (max-width: 530px) {
    flex-direction: column;
    gap: 10px;
  }
`;
export const LeveBtn = styled.div`
  margin-top: 10px;
`;
