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
  font-family: Chakra;
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
  background-color: rgba(0, 0, 0, 0.5);
`;

export const LionCard = styled.div`
  background-color: #191919;
  width: 380px;
  font-family: Chakra;
  z-index: 105;
  border-radius: 20px;
  position: relative;
  display: flex;
  padding: 30px 20px;
  flex-direction: column;
  color: #fff;
  align-items: center;
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  height: fit-content;
  @media screen and (max-width: 420px) {
    width: 90%;
  }
`;

export const CardImg = styled.img`
  z-index: 2;
`;
export const SubText = styled.div`
  font-size: 18px;
  margin: 20px 0 0 0;
`;
export const CardTitle = styled.div`
  font-family: ChakraBold;
  font-size: 25px;
  margin-top: 35px;
`;

export const CardMoney = styled.div`
  font-size: 18px;
`;
export const ZAPBtn = styled.div`
  margin-top: 30px;
  display: flex;
  column-gap: 40px;
  @media screen and (max-width: 420px) {
    column-gap: 20px;
  }
`;
