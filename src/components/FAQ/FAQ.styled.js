import styled from "styled-components";

export const FaqSection = styled.section`
  @media screen and (${({ theme }) => theme.media.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "faqAccordion faqTitle"
      "faqAccordion faqContacts";
    grid-column-gap: 24px;
  }
  @media screen and (${({ theme }) => theme.media.desktop}) {
    grid-template-columns: repeat(8, 1fr);
    grid-template-areas:
      "faqAccordion faqAccordion  faqAccordion faqAccordion . faqTitle faqTitle faqTitle"
      "faqAccordion faqAccordion  faqAccordion faqAccordion . faqContacts faqContacts faqContacts";
    grid-column-gap: 48px;
  }

  /* grid-area: faqTitle;
  padding-right: 12px; */
`;

export const FaqTitle = styled.h2`
  grid-area: faqTitle;
  padding-right: 12px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  padding-right: 12px;
  cursor: pointer;

  @media screen and (${({ theme }) => theme.media.desktop}) {
    gap: 24px;
    margin-bottom: 24px;
  }

  & > span {
    font-size: ${({ theme }) => theme.fontSizes.l};
    color: ${({ theme }) => theme.colors.mainGreen};

    @media screen and (${({ theme }) => theme.media.desktop}) {
      font-size: 36px;
    }
  }
`;

export const FaqQuestion = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-family: ${({ theme }) => theme.fonts.body};
  text-transform: none;
  letter-spacing: -0.72px;
  text-align: justify;

  @media screen and (${({ theme }) => theme.media.desktop}) {
    font-size: 24px;
    letter-spacing: -0.96px;
  }
`;

export const FaqAccordion = styled.ul`
  grid-area: faqAccordion;
  margin-bottom: 20px;
  @media screen and (${({ theme }) => theme.media.tablet}) {
    padding-top: 5px;
    margin-bottom: 0;
  }
  & > li {
    border-top: 1px solid ${({ theme }) => theme.colors.mainGreen};
    padding-top: 16px;

    @media screen and (${({ theme }) => theme.media.desktop}) {
      padding-top: 24px;
    }

    & > .question {
      overflow: hidden;
      max-height: 0;
      padding-left: 16px;
      transition: all 400ms ease;
      @media screen and (${({ theme }) => theme.media.desktop}) {
        padding-left: 32px;
      }

      &.show {
        height: auto;
        max-height: 999px;
        margin-bottom: 16px;
        transition: all 400ms ease;

        @media screen and (${({ theme }) => theme.media.desktop}) {
          margin-bottom: 24px;
        }
      }
    }
  }
`;

export const FaqContacts = styled.div`
  text-align: center;

  @media screen and (${({ theme }) => theme.media.tablet}) {
    grid-area: faqContacts;
    justify-self: start;
    align-self: end;

    margin-bottom: 16px;
  }
`;

export const FaqText = styled.p`
  margin-bottom: 12px;
  font-size: ${({ theme }) => theme.fontSizes.m};
  letter-spacing: -0.72px;

  @media screen and (${({ theme }) => theme.media.desktop}) {
    /* font-size: 24px; */
    letter-spacing: -0.64px;
  }
`;
