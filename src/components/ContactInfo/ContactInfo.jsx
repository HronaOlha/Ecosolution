import { ContactInfoContainer } from "./ContactInfo.styled";

const ContactInfo = () => {
  return (
    <>
      <ContactInfoContainer>
        <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
        <a href="mailto:office@ecosolution.com">office@ecosolution.com</a>
        <p className="ecosolution">ecosolution © 2023</p>
      </ContactInfoContainer>
    </>
  );
};

export default ContactInfo;
