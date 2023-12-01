import { IoIosArrowRoundUp } from "react-icons/io";
import sprite from "../../images/sprite.svg";
import Facebook from "../../images/facebook.svg";
import ContactInfo from "../ContactInfo/ContactInfo";
import Logo from "../Logo/Logo";
import {
  FooterSection,
  FooterLine,
  ButtonUp,
  SocialsContainer,
  Socials,
} from "./Footer.styled";

const Footer = () => {
  return (
    <FooterSection>
      <FooterLine />
      <Logo />
      <ButtonUp type="button">
        <IoIosArrowRoundUp size="100%" />
      </ButtonUp>
      <SocialsContainer>
        <a href="/">
          <Socials>
            <use href={Facebook + "#facebook"} />
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
