import styled from "styled-components";

export const CusBtn = styled.div`
  .MuiButton-outlined {
    color: #276ffc;
    transition: all 0.3s ease-in-out;
    border: 1px solid #276ffc;
    border-radius: 50px;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    font-family: KOHO;
    font-size: 23px;
    :hover {
      background-color: rgba(255, 255, 255, 0.2) !important;
    }
    @media screen and (max-width: 450px) {
      width: calc(
        ${(props) => (props.width == "200px" ? "200px" : "170px")} - 40px
      );
      font-size: 20px;
    }
  }
`;
