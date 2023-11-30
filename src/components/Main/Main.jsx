import Button from "../Button/Button";
import {
  MainSection,
  Text,
  MainContacts,
  Address,
  MainLine,
} from "./Main.styled";

const Main = () => {
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
        <p className="hide-for-mobile">ecosolution © 2023</p>
      </MainContacts>
    </MainSection>
  );
};

export default Main;
