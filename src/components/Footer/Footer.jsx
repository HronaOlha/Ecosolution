import { IoIosArrowRoundUp } from "react-icons/io";

import sprite from "../../images/sprite.svg";

import ContactInfo from "../ContactInfo/ContactInfo";
import Logo from "../Logo/Logo";

import HorizontalLine from "../HorizontalLine/HorizontalLine";

import {
  FooterSection,
  ButtonUp,
  SocialsContainer,
  Socials,
} from "./Footer.styled";

const Footer = () => {
  return (
    <FooterSection>
      <HorizontalLine />
      <Logo />

      <ButtonUp href="#main">
        <IoIosArrowRoundUp size="100%" />
      </ButtonUp>

      <SocialsContainer>
        <a href="/">
          <Socials className="facebook">
            <use href={sprite + "#facebook"} color="red" />
          </Socials>
        </a>
        <a href="/">
          <Socials>
            <use href={sprite + "#instagram"} />
          </Socials>
        </a>
      </SocialsContainer>

      <ContactInfo />
    </FooterSection>
  );
};

export default Footer;
