import styled from "styled-components";

export const HomeOut = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
  row-gap: 70px;
  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const MarketTopPart = styled.div`
  display: flex;
  border: 1px solid #276ffc;
  border-radius: 63px;
  padding: 30px 80px;
  column-gap: 50px;
  margin: 30px 0 60px 0;
  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
    margin: 30px 30px 60px;
    justify-content: center;
    row-gap: 30px;
  }
  @media screen and (max-width: 500px) {
    border: none;
    padding: 30px 0px;
  }
`;
export const TopItem = styled.div`
  span {
    font-size: 24px;
    line-height: 31px;
    color: #a9cf83;
    @media screen and (max-width: 500px) {
      font-size: 22px;
    }
  }
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  color: #276ffc;
`;
export const HideTitle = styled.div`
  font-weight: 400;
  font-size: 40px;
  line-height: 52px;
  cursor: pointer;
  letter-spacing: -0.09em;
  display: none;
  color: #ffffff;
  @media screen and (max-width: 500px) {
    margin-top: 55px;
    display: flex;
  }
`;
export const HideSub = styled.div`
  font-weight: 600;
  font-size: 22px;
  line-height: 29px;
  text-align: center;
  letter-spacing: 0.03em;
  display: none;
  color: #ffffff;
  @media screen and (max-width: 500px) {
    display: flex;
  }
`;
