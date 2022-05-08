import styled from "styled-components";

export const HomeOut = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
export const BorrowSubTitle = styled.div`
  font-weight: 400;
  font-size: 36px;
  line-height: 47px;
  text-align: center;
  letter-spacing: 0.003em;

  color: #ffffff;
  @media screen and (max-width: 500px) {
    font-size: 24px;
    line-height: 0px;
  }
`;
export const GateText = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  width: 600px;
  margin-top: 30px;
  text-align: center;
  letter-spacing: 0.003em;
  color: #ffffff;
  @media screen and (max-width: 630px) {
    width: 90%;
  }
  @media screen and (max-width: 500px) {
    font-size: 18px;
    line-height: 27px;
  }
`;
export const BorrowTitle = styled.div`
  font-weight: 400;
  font-size: 50px;
  line-height: 65px;
  text-align: center;
  letter-spacing: 0.003em;
  margin-top: 30px;
  color: #ffffff;
  @media screen and (max-width: 500px) {
    margin-top: 0px;
    font-size: 24px;
  }
`;
export const Cardlogo = styled.img`
  margin-top: 45px;
`;
export const TVLTitle = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  margin-top: ${(props) => props.mt};
  text-align: center;
  letter-spacing: 0.003em;

  color: #ffffff;
  @media screen and (max-width: 500px) {
    font-size: 18px;
    margin-top: 20px;
  }
`;
export const APRText = styled.div`
  font-weight: 400;
  font-size: 24px;
  margin-top: ${(props) => props.mt};
  line-height: 31px;
  text-align: center;
  letter-spacing: 0.003em;

  color: #ffffff;
  span {
    color: #8fc856;
  }
  @media screen and (max-width: 500px) {
    font-size: 18px;
    margin-top: 20px;
  }
`;
export const AmplePart = styled.div`
  display: flex;
  justify-content: space-around;
  width: 280px;
  margin-top: 43px;
  align-items: flex-end;
  font-weight: 600;
  font-size: 20px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.003em;

  color: #ffffff;
  span {
    margin-bottom: 16px;
  }
`;
export const AmpleLeft = styled.div``;
export const AmpleRight = styled.div``;
export const AmpText = styled.div`
  margin-top: 28px;
  font-size: 18px;
  span {
    font-weight: 400;
    line-height: 30px;
  }
`;
export const AmpLogoImg = styled.img``;
export const CardContainer = styled.div`
  background: linear-gradient(
    180deg,
    rgba(39, 111, 252, 0.546) 0%,
    rgba(31, 36, 79, 0.28) 100%
  );
  box-shadow: 10px 24px 54px rgba(8, 18, 52, 0.05);
  border-radius: 15px;
  width: 380px;
  height: 580px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 830px) {
    width: 330px;
  }
  @media screen and (max-width: 730px) {
    width: 380px;
  }
  @media screen and (max-width: 500px) {
    height: 480px;
  }
  @media screen and (max-width: 420px) {
    width: 330px;
  }
`;
export const CardGrp = styled.div`
  display: flex;
  column-gap: 65px;
  margin-top: 55px;
  @media screen and (max-width: 950px) {
    column-gap: 30px;
  }
  @media screen and (max-width: 730px) {
    flex-direction: column;
    align-items: center;
    row-gap: 40px;
  }
`;
export const RewardText = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  margin-top: 14px;
  letter-spacing: 0.003em;
  color: #ffffff;
`;
export const HideTitle = styled.div`
  display: none;
  font-weight: 400;
  font-size: 40px;
  line-height: 52px;
  cursor: pointer;
  letter-spacing: -0.09em;
  color: #ffffff;
  @media screen and (max-width: 500px) {
    margin-top: 55px;
    display: flex;
  }
`;
export const StakeBtns = styled.div`
  display: flex;
  column-gap: 20px;
  margin-top: 30px;
`;
