import styled from "styled-components";
import { Line } from "../HorizontalLine/HorizontalLine.styled";

export const FooterSection = styled.section`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-row-gap: 24px;
  grid-template-areas:
    "line line line line line line line"
    "logo logo logo logo logo logo buttonUp"
    ". . . socials . . . "
    "contactsInfo contactsInfo contactsInfo contactsInfo contactsInfo contactsInfo contactsInfo";

  padding-top: 24px;
  padding-bottom: 24px;

  @media screen and (${({ theme }) => theme.media.tablet}) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "line line line line"
      "logo logo socials buttonUp"
      "contactsInfo contactsInfo contactsInfo contactsInfo";
  }
`;

export const ButtonUp = styled.button`
  grid-area: buttonUp;
  justify-self: end;
  border-radius: 50%;
  border: none;
  background-color: ${({ theme }) => theme.colors.mainGreen};
  height: 32px;
  width: 32px;
  padding: 5px;
  color: ${({ theme }) => theme.colors.darkGreen};

  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGreen};
    border-color: ${({ theme }) => theme.colors.darkGreen};
    color: ${({ theme }) => theme.colors.mainGreen};
  }
`;

export const SocialsContainer = styled.div`
  /* text-align: center; */
  grid-area: socials;
  display: flex;
  justify-content: center;
  gap: 8px;
  /* margin-bottom: 24px; */
  @media screen and (${({ theme }) => theme.media.tablet}) {
    justify-self: start;
  }
  @media screen and (${({ theme }) => theme.media.desktop}) {
    justify-self: center;
  }
`;

export const Socials = styled.svg`
  height: 24px;
  width: 24px;
  fill: transparent;
`;

// Additional styling of styled-components Component
export const FooterLine = styled(Line)`
  /* margin-bottom: 24px; */

  @media screen and (${({ theme }) => theme.media.tablet}) {
    /* margin-bottom: 16px; */
  }
`;
