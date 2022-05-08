import styled from "styled-components";

export const CusBtn = styled.div`
  .MuiButton-containedPrimary {
    border-radius: 50px;
    width: 200px;
    height: 48px;
    border-width: 0 0 4px;
    color: #000;
    font-family: KOHO_bold;
    font-size: 23px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    background-color: #276ffc !important;
    align-items: center;
    transition: all 0.3s ease-in-out;
    transform: translateZ(0);
    padding: 0 !important;
    :hover {
      background-color: #0345c9 !important;
    }
    @media screen and (max-width: 450px) {
      width: 160px;
      font-size: 20px;
    }
  }
`;
