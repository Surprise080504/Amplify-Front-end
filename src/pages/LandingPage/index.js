import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaBars,
  FaTelegramPlane,
  FaDiscord,
} from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import { SiGitbook } from "react-icons/si";
import {
  HomeOut,
  HeaderContainer,
  HeaderLogoImg,
  HeaderRight,
  SocialItems,
  HomeContainer,
  HeaderItem,
  FooterContainer,
  FooterRight,
  AboutContainer,
  AboutText,
  AboutImg,
  AboutTitle,
  AboutList,
  PortPart,
  PortImg,
  PortCards,
  PortText,
  PortItem,
  ContactPart,
  ContactText,
  CusInput,
  SendImg,
  SendPart,
  SendImgContainer,
  SendItem,
  SendLeft,
  SendBtn,
  SendRight,
  BrainPart,
  BrainImg,
  BrainText,
  NetImg,
  BrainContainer,
  BrainTitle,
  BrainRight,
  ResMenu,
  BrainSubTitle,
  ReadBtn,
} from "./land.style";

export default function LandContainer() {
  const [resflag, setResflag] = useState(false);
  return (
    <HomeOut>
      <HeaderContainer>
        <HeaderLogoImg
          src="img/land/landinglogo.png"
          draggable={false}
          alt=""
        />
        <HeaderRight>
          <HeaderItem>About us</HeaderItem>
          <HeaderItem>Portfolio</HeaderItem>
          <HeaderItem>Contact us</HeaderItem>
        </HeaderRight>

        {resflag ? (
          <MdOutlineClose
            className="mobileTab"
            onClick={() => setResflag(!resflag)}
          />
        ) : (
          <FaBars className="mobileTab" onClick={() => setResflag(!resflag)} />
        )}
        <ResMenu resflag={resflag}>
          <HeaderItem>About us</HeaderItem>
          <HeaderItem>Portfolio</HeaderItem>
          <HeaderItem>Contact us</HeaderItem>
        </ResMenu>
      </HeaderContainer>
      <BrainPart>
        <BrainContainer>
          <BrainImg src="img/land/brain.png" alt="" draggable={false} />
          <BrainRight>
            <BrainTitle>Brain Parts</BrainTitle>
            <BrainSubTitle>Lorem ipsum</BrainSubTitle>
            <BrainText>
              Arcu, at nibh nisi, ac nisl, congue volutpat. Orci et elit morbi
              quis turpis mauris elit sollicitudin
            </BrainText>
            <ReadBtn>Read more</ReadBtn>
          </BrainRight>
        </BrainContainer>
        <NetImg src="img/land/net.png" alt="" draggable={false} />
      </BrainPart>
      <HomeContainer>
        <AboutContainer>
          <AboutTitle mb="106px">About Us</AboutTitle>
          <AboutList left={true}>
            <AboutText>
              <span>Vestibulum duis</span>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
              velit aliquet rhoncus non volutpat amet turpis eget turpis. Morbi
              viverra vitae, nunc, viverra elit elementum lorem fames penatibus.
              Vestibulum duis est dictum facilisis lacinia donec nunc. Purus
              rhoncus urna scelerisque suspendisse hendrerit quis vulputate.
            </AboutText>
            <AboutImg src="img/land/us1.png" alt="" draggable={false} />
          </AboutList>
          <AboutList>
            <AboutImg src="img/land/us2.png" alt="" draggable={false} />
            <AboutText left={true} ml={true}>
              <span>Vestibulum duis</span>
              <br />
              <ul>
                <li>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </li>
                <li>
                  <p>
                    Lectus velit aliquet rhoncus non volutpat amet turpis eget
                    turpis.
                  </p>
                </li>
                <li>
                  <p>
                    Morbi viverra vitae, nunc, viverra elit elementum lorem
                    fames penatibus.
                  </p>
                </li>
              </ul>
            </AboutText>
          </AboutList>
        </AboutContainer>
        <PortPart>
          <AboutTitle mb="75px">Portfolio</AboutTitle>
          <PortCards>
            <PortItem>
              <PortImg src="img/land/port1.png" draggable={false} alt="" />
              <PortText>
                <span>Project 1</span>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </PortText>
            </PortItem>
            <PortItem>
              <PortImg src="img/land/port2.png" draggable={false} alt="" />
              <PortText>
                <span>Project 2</span>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </PortText>
            </PortItem>
            <PortItem>
              <PortImg src="img/land/port3.png" draggable={false} alt="" />
              <PortText>
                <span>Project 3</span>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </PortText>
            </PortItem>
          </PortCards>
        </PortPart>
        <ContactPart>
          <AboutTitle>Contact Us</AboutTitle>
          <ContactText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
            velit aliquet rhoncus non volutpat amet turpis eget turpis. Morbi
            viverra vitae, nunc, viverra elit elementum lorem fames penatibus.
            Vestibulum duis est dictum facilisis lacinia donec nunc. Purus
            rhoncus urna scelerisque suspendisse hendrerit quis vulputate.
          </ContactText>
          <SendPart>
            <SendLeft>
              <SendItem>
                <SendImgContainer>
                  <SendImg src="img/land/name.png" alt="" draggable={false} />
                </SendImgContainer>
                <CusInput typee="text" placeholder="Name" />
              </SendItem>
              <SendItem>
                <SendImgContainer>
                  <SendImg src="img/land/email.png" alt="" draggable={false} />
                </SendImgContainer>
                <CusInput typee="text" placeholder="Your email" />
              </SendItem>
              <SendItem>
                <SendImgContainer>
                  <SendImg src="img/land/mobile.png" alt="" draggable={false} />
                </SendImgContainer>
                <CusInput typee="text" placeholder="Your phone number" />
              </SendItem>
            </SendLeft>
            <SendRight>
              <CusInput typee="text" placeholder="Your Message" />
              <SendBtn>
                Send
                <BsArrowRight className="arrow" />
              </SendBtn>
            </SendRight>
          </SendPart>
        </ContactPart>
      </HomeContainer>
      <FooterContainer>
        <SocialItems>
          <FaFacebookF className="socialItem" />
          <FaTwitter className="socialItem" />
          <FaInstagram className="socialItem" />
          <FaTelegramPlane className="socialItem" />
          <FaDiscord className="socialItem" />
          <SiGitbook className="socialItem" />
        </SocialItems>
        <FooterRight>Copyright 2022 BrainParts</FooterRight>
      </FooterContainer>
    </HomeOut>
  );
}
