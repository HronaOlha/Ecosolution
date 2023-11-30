import PropTypes from "prop-types";
import Button from "../Button/Button";
import {
  MainSection,
  Text,
  MainContacts,
  Address,
  MainLine,
  MainImage,
} from "./Main.styled";

const Main = ({ deviceType }) => {
  return (
    <MainSection>
      <h1>Renewable energy for any task</h1>
      <Text>
        Development and implementation of renewable non-polluting energy
        sources, generating power generation using energy wind, sun, water,
        biomass
      </Text>
      <Button text="Learn more" />
      <MainLine />
      <MainContacts>
        <Address>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</Address>
        <a href="mailto:office@ecosolution.com">office@ecosolution.com</a>
        {deviceType === "tablet" && <p>ecosolution © 2023</p>}
        {deviceType === "desktop" && <p>ecosolution © 2023</p>}
      </MainContacts>
      <MainImage />
    </MainSection>
  );
};

export default Main;

Main.propTypes = {
  deviceType: PropTypes.string,
};
