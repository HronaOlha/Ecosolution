import styled from "styled-components";
import { Line } from "../HorizontalLine/HorizontalLine.styled";

export const MainSection = styled.section`
  padding-top: 146px;

  @media screen and (${({ theme }) => theme.media.tablet}) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 40px;
    grid-template-areas:
      "heading heading text text"
      "heading heading button button"
      "line line line line"
      "mainContacts mainContacts mainContacts mainContacts";

    padding-top: 168px;
    text-align: left;
  }

  @media screen and (${({ theme }) => theme.media.desktop}) {
    grid-column-gap: 180px;
    padding-top: 200px;
  }

  & > button {
    grid-area: button;

    margin-left: auto;
    margin-right: auto;
    margin-bottom: 24px;

    @media screen and (${({ theme }) => theme.media.tablet}) {
      margin-left: 0;
      margin-bottom: 26px;
    }
    @media screen and (${({ theme }) => theme.media.desktop}) {
      margin-bottom: 28px;
    }
  }

  & > h1 {
    grid-area: heading;

    @media screen and (${({ theme }) => theme.media.tablet}) {
      padding-right: 30px;
    }
  }
`;

export const Text = styled.p`
  grid-area: text;

  margin-bottom: 24px;

  @media screen and (${({ theme }) => theme.media.tablet}) {
    margin-bottom: 43px;
  }
  @media screen and (${({ theme }) => theme.media.desktop}) {
    margin-bottom: 20px;
    width: 363px;
  }
`;

export const MainContacts = styled.div`
  text-align: center;

  @media screen and (${({ theme }) => theme.media.tablet}) {
    grid-area: mainContacts;
    display: flex;
    justify-content: space-between;
  }
`;

export const Address = styled.p`
  margin-bottom: 8px;
`;

// Additional styling of styled-components Component
export const MainLine = styled(Line)`
  margin-bottom: 24px;

  @media screen and (${({ theme }) => theme.media.tablet}) {
    margin-bottom: 16px;
  }
`;
