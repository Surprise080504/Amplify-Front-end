import styled from "styled-components";

export const HomeOut = styled.div`
  width: 100%;
  background-color: #202328;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const HomeContainer = styled.div`
  max-width: 1440px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
// ---------------------header start-------------------------------
export const HeaderContainer = styled.div`
  height: 120px;
  width: 100%;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  .mobileTab {
    display: none;
    color: #fff;
    cursor: pointer;
    margin-right: 30px;
    font-size: 30px;
    @media screen and (max-width: 800px) {
      display: flex;
    }
  }
`;
export const HeaderLogoImg = styled.img`
  margin-left: 35px;
  @media screen and (max-width: 800px) {
    margin-left: 30px;
    width: 180px;
  }
`;
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  column-gap: 40px;
  margin-right: 35px;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
export const HeaderItem = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
// ----------------------------------header end-------------------------------
// ----------------------------------footer start-------------------------------
export const FooterContainer = styled.div`
  height: 130px;
  display: flex;
  background-color: #000;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  @media screen and (max-width: 680px) {
    flex-direction: column;
    justify-content: center;
    row-gap: 20px;
  }
`;
export const SocialItems = styled.div`
  display: flex;
  align-items: center;
  column-gap: 30px;
  margin-left: 70px;
  color: #fff;
  font-size: 28px;
  .socialItem {
    cursor: pointer;
  }
  @media screen and (max-width: 800px) {
    margin-left: 30px;
  }
  @media screen and (max-width: 680px) {
    margin-left: 0;
  }
`;
export const FooterRight = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  background-color: #000;
  color: #ffffff;
  margin-right: 70px;
  @media screen and (max-width: 800px) {
    margin-right: 30px;
  }
  @media screen and (max-width: 680px) {
    margin-right: 0;
  }
`;
// ---------------------------------footer end---------------------------------------
// -------------------------------------about us start----------------------------------------\
export const AboutContainer = styled.div`
  text-align: center;
  margin-top: 72px;
`;
export const AboutTitle = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 61px;
  margin-bottom: ${(props) => props.mb};
  color: #ffffff;
  @media screen and (max-width: 900px) {
    margin-bottom: 50px;
  }
`;
export const AboutText = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  text-align: left;
  line-height: 22px;
  width: 483px;
  margin: ${(props) => (props.left ? "0 0 0 130px" : "0 130px 0 0")};
  color: #ffffff;
  span {
    font-size: 24px;
    line-height: 60px;
    font-weight: 600;
    color: #8539d1;
    margin-left: ${(props) => props.ml && "40px"};
    @media screen and (max-width: 900px) {
      margin-left: 0;
    }
  }
  li {
    list-style-type: circle;
    color: #8539d1;
    @media screen and (max-width: 900px) {
      list-style-type: none;
    }
  }
  p {
    color: #fff;
  }
  @media screen and (max-width: 1300px) {
    margin: ${(props) => (props.left ? "0 0 0 50px" : "0 50px 0 0")};
  }
  @media screen and (max-width: 1110px) {
    width: 100%;
  }
  @media screen and (max-width: 900px) {
    order: 2;
    text-align: center;
    margin: 0;
    ul {
      padding-left: 0;
    }
  }
`;
export const AboutImg = styled.img`
  @media screen and (max-width: 900px) {
    order: 1;
  }
  @media screen and (max-width: 580px) {
    width: 350px;
  }
  @media screen and (max-width: 420px) {
    width: 300px;
  }
`;
export const AboutList = styled.div`
  display: flex;
  align-items: center;
  margin: ${(props) => (props.left ? "0 0 0 100px" : "50px 100px 0 0")};
  @media screen and (max-width: 1300px) {
    margin-left: 0;
    margin-right: 0;
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
// ---------------------------about us end------------------------------
// ---------------------------portfolio part start------------------------------

export const PortPart = styled.div`
  margin-top: 85px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const PortImg = styled.img`
  margin-bottom: 10px;
  @media screen and (max-width: 430px) {
    width: 300px;
  }
`;
export const PortCards = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 33px;
  width: 100%;
  @media screen and (max-width: 1330px) {
    flex-wrap: wrap;
    row-gap: 50px;
    column-gap: 50px;
    text-align: center;
  }
`;
export const PortItem = styled.div``;
export const PortText = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  width: 375px;
  color: #ffffff;
  span {
    font-size: 24px;
    line-height: 50px;
    font-weight: 600;
    color: #8539d1;
  }
  @media screen and (max-width: 430px) {
    width: 100%;
  }
`;

// ---------------------------portfolio part end------------------------------
// ---------------------------Contact part start------------------------------

export const ContactPart = styled.div`
  margin: 114px 0 117px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ContactText = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  max-width: 920px;
  margin-top: 51px;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  text-indent: 2px;
  color: #ffffff;
  @media screen and (max-width: 1060px) {
    width: 100%;
    max-width: 100%;
  }
  @media screen and (max-width: 900px) {
    margin-top: 0;
  }
`;
export const CusInput = styled.input`
  outline: none;
  width: 414px;
  height: 35px;
  font-family: "Montserrat";
  border-style: none;
  background-color: transparent;
  border-bottom: 1px solid #fff;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-indent: 2px;
  font-feature-settings: "liga" off;
  color: #fff;
  @media screen and (max-width: 1060px) {
    width: 100%;
  }
`;
export const SendImg = styled.img``;
export const SendItem = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1060px) {
    width: 100%;
  }
`;
export const SendPart = styled.div`
  margin-top: 88px;
  display: flex;
  column-gap: 80px;
  @media screen and (max-width: 1060px) {
    width: 100%;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    row-gap: 30px;
  }
`;
export const SendLeft = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  @media screen and (max-width: 1060px) {
    width: 100%;
  }
`;
export const SendRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 1060px) {
    width: 100%;
  }
  @media screen and (max-width: 600px) {
    align-items: center;
    row-gap: 30px;
    margin-left: 20px;
    input {
      width: calc(100% - 40px);
    }
  }
`;
export const SendImgContainer = styled.div`
  width: 40px;
  display: flex;
  justify-content: center;
`;
export const SendBtn = styled.div`
  width: 148px;
  height: 65px;
  background: #8539d1;
  border: 1px solid #8539d1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
  .arrow {
    margin-left: 11px;
  }
  @media screen and (max-width: 600px) {
    margin-left: -40px;
  }
`;
// ---------------------------Contact part end------------------------------
// ---------------------------brain part star------------------------------

export const BrainPart = styled.div`
  display: flex;
  align-items: center;
  height: 700px;
  position: relative;
  width: 100%;
  justify-content: center;
  @media screen and (max-width: 1170px) {
    height: 500px;
  }
  @media screen and (max-width: 890px) {
    height: 800px;
  }
  @media screen and (max-width: 450px) {
    height: 630px;
  }
`;
export const BrainImg = styled.img`
  margin-right: 80px;
  @media screen and (max-width: 1170px) {
    width: 400px;
    margin-right: 50px;
  }
  @media screen and (max-width: 890px) {
    margin-right: 0;
  }
  @media screen and (max-width: 450px) {
    width: 300px;
  }
`;
export const BrainText = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  margin-top: 30px;
  line-height: 29px;
  width: 510px;
  color: #ffffff;
  @media screen and (max-width: 990px) {
    width: 420px;
  }
  @media screen and (max-width: 900px) {
    text-align: center;
  }
  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;
export const BrainTitle = styled.div`
  font-family: "MontserratBold";
  font-weight: 900;
  font-size: 60px;
  line-height: 73px;
  color: #ffffff;
  @media screen and (max-width: 900px) {
    font-size: 45px;
  }
`;
export const BrainSubTitle = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-size: 60px;
  line-height: 73px;
  color: #ffffff;
  @media screen and (max-width: 900px) {
    font-size: 45px;
    line-height: 40px;
  }
`;
export const ReadBtn = styled.div`
  width: 185px;
  height: 65px;
  margin-top: 33px;
  background: #8539d1;
  border: 1px solid #8539d1;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
`;
export const NetImg = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  object-fit: cover;
  height: 220px;
`;
export const BrainRight = styled.div`
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const BrainContainer = styled.div`
  width: 1440px;
  display: flex;
  margin-left: 100px;
  align-items: center;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 1400px) {
    margin-left: 0;
    justify-content: center;
  }
  @media screen and (max-width: 890px) {
    flex-direction: column;
  }
`;
// ---------------------------brain part end------------------------------
export const ResMenu = styled.div`
  position: absolute;
  top: 121px;
  /* border: 1px solid red; */
  width: calc(100% - 0px);
  height: ${(props) => (props.resflag ? "200px" : 0)};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  z-index: 100;
  background-color: #202328;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;
