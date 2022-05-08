import styled from "styled-components";

export const CardOut = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    180deg,
    rgba(39, 111, 252, 0.546) 0%,
    rgba(31, 36, 79, 0.28) 100%
  );
  box-shadow: 10px 24px 54px rgba(8, 18, 52, 0.05);
  border-radius: 15px;
`;
export const Cardlogo = styled.img`
  margin-top: 30px;
`;
export const CardTitle = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  letter-spacing: 0.003em;
  margin: 12px 0 3px 0;
  color: #ffffff;
`;
export const CardValue = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.003em;

  color: #a9cf83;

  transform: matrix(1, 0, 0, -1, 0, 0);
`;
export const CardItem = styled.div`
  background: rgba(39, 111, 252, 0.48);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  margin: 0 30px;
`;
export const Dollar = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.003em;

  color: #ffffff;
`;
export const SupplyText = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.003em;

  color: #ffffff;
`;
export const CardItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;
export const TwoCardImg = styled.img`
  margin-top: 13px;
`;
export const StatText = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  letter-spacing: 0.003em;
  margin: 25px 0 13px 0;
  color: #ffffff;
`;
export const ArrowPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
`;
export const ArrowValue = styled.div`
  span {
    font-weight: 600;
    line-height: 25px;
    color: #8fc856;
  }
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.003em;
  color: #ffffff;
  margin: ${(props) =>
    props.direct === "left" ? "0 0 0 60px" : "0 60px 0 0 "};
`;
export const ArrowImg = styled.img``;
