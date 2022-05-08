import styled from "styled-components";

export const HeaderOut = styled.div`
  width: 100%;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const Header = styled.div`
  border-bottom: 2px solid #65e2cf;
  padding: 10px 0;
  display: flex;
  height: 94px;
  align-items: center;
  justify-content: space-between;
  margin: 0 85px;
  @media screen and (max-width: 1100px) {
    margin: 0 30px;
  }
`;
export const Left = styled.div`
  font-weight: 400;
  font-size: 55px;
  line-height: 72px;
  letter-spacing: -0.09em;
  color: #ffffff;
  @media screen and (max-width: 560px) {
    font-size: 40px;
  }
`;
export const Right = styled.div`
  font-weight: 400;
  font-size: 25px;
  cursor: pointer;
  /* line-height: 39px; */
  color: #538dff;
  text-shadow: 0px 0px 4px #276ffc;
  display: flex;
  align-items: center;
  @media screen and (max-width: 560px) {
    font-size: 20px;
  }
`;
export const WalletImg = styled.img`
  margin-right: 15px;
  @media screen and (max-width: 560px) {
    margin-right: 10px;
  }
`;
export const Tabs = styled.div`
  display: flex;
  margin-top: 15px;
  gap: 30px;
  margin-left: 85px;
  /* display: none; */
  @media screen and (max-width: 1100px) {
    margin-left: 30px;
  }
  @media screen and (max-width: 780px) {
    justify-content: center;
    margin-left: 0;
  }
`;
export const HeaderTab = styled.div`
  font-weight: 400;
  font-size: 24px;
  cursor: pointer;
  line-height: 31px;
  letter-spacing: 0.003em;
  color: ${(props) => (props.active ? "#8fc856" : "#fff")};
`;
