import styled from "styled-components";

export const HomeOut = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 94px);
  justify-content: center;
  padding: 0 20px;
  @media screen and (max-height: 870px) {
    justify-content: flex-start;
    margin: 50px 0;
  }
  @media screen and (max-width: 500px) {
    height: auto;
  }
`;
export const HomeImg = styled.img`
  @media screen and (max-width: 900px) {
    width: 400px;
  }
  @media screen and (max-width: 500px) {
    width: 320px;
    margin-top: 60px;
  }
`;
export const Btns = styled.div`
  display: flex;
  gap: 21px;
  margin-top: 50px;
  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: center;
  }
  @media screen and (max-width: 500px) {
    order: 1;
  }
`;
export const SubText = styled.div`
  font-weight: 400;
  font-size: 22px;
  line-height: 29px;
  text-align: center;
  letter-spacing: 0.03em;
  color: #ffffff;
  margin-top: 40px;
`;
export const LearnMoreText = styled.div`
  font-style: italic;
  font-weight: 300;
  font-size: 22px;
  line-height: 29px;
  cursor: pointer;
  text-align: center;
  margin-top: 20px;
  letter-spacing: 0.03em;
  color: #ffffff;
  @media screen and (max-width: 500px) {
    order: 2;
    margin-top: 80px;
  }
`;
