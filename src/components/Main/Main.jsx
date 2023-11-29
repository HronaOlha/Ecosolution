import Button from "../Button/Button";
import HorizontalLine from "../HorizontalLine/HorizontalLine";
import { Text, MainContacts, Address } from "./Main.styled";

const Main = () => {
  return (
    <section>
      <h1>Renewable energy for any task</h1>
      <Text>
        Development and implementation of renewable non-polluting energy
        sources, generating power generation using energy wind, sun, water,
        biomass
      </Text>
      <Button marginBottom={24} text="Learn more" />
      <HorizontalLine marginBottom={24} />
      <MainContacts>
        <Address>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</Address>
        <a href="mailto:office@ecosolution.com">office@ecosolution.com</a>
      </MainContacts>
    </section>
  );
};

export default Main;
