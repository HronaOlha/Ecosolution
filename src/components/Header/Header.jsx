import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import { IoIosMenu } from "react-icons/io";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

import Logo from "../Logo/Logo";
import { HeaderSection, Nav, BurgerBtn, ContactBtn } from "./Header.styled";
// import { MenuBurger } from "../BurgerMenu/BurgerMenu";

const Header = ({ deviceType }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  // const [openMenu, setOpenMenu] = useState(false);

  // const handleOpenMenu = () => {
  //   setOpenMenu(!openMenu);
  // };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 100;

      setIsScrolled(scrollPosition > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderSection className={isScrolled ? "scrolled" : ""}>
      {/* {openMenu && <MenuBurger handleOpenMenu={handleOpenMenu} />} */}
      <Logo />
      <Nav>
        <BurgerBtn>
          <IoIosMenu size="100%" />
        </BurgerBtn>

        {deviceType === "tablet" && (
          <ContactBtn href="#contact">
            Get in touch
            <BsFillArrowDownCircleFill />
          </ContactBtn>
        )}
        {deviceType === "desktop" && (
          <ContactBtn href="#contact">
            Get in touch
            <BsFillArrowDownCircleFill />
          </ContactBtn>
        )}
      </Nav>
    </HeaderSection>
  );
};

export default Header;

Header.propTypes = {
  deviceType: PropTypes.string,
};
