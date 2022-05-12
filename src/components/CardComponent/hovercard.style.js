import styled from "styled-components";

export const CusBtn = styled.div`
  .MuiButton-label {
    display: flex;
    flex-direction: column;
  }
  .MuiButton-text {
    width: ${(props) => props.width};
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
    :hover {
      opacity: 0.9 !important;
    }
  }
`;
export const Btns = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 30px;
  column-gap: 20px;
`;
