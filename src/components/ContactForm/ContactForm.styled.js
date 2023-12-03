import styled from "styled-components";

export const Form = styled.form`
  grid-area: contactForm;

  padding: 36px 12px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  letter-spacing: -0.64px;

  @media screen and (${({ theme }) => theme.media.tablet}) {
    padding: 36px 24px;
  }
  @media screen and (${({ theme }) => theme.media.desktop}) {
    padding: 48px;
  }

  & > button {
    margin-left: auto;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (${({ theme }) => theme.media.desktop}) {
    gap: 12px;
  }

  & > input,
  & > textarea {
    outline-color: #000;
    margin-bottom: 28px;
    padding-bottom: 8px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.mainGreen};
    font-size: ${({ theme }) => theme.fontSizes.m};

    @media screen and (${({ theme }) => theme.media.desktop}) {
      font-size: ${({ theme }) => theme.fontSizes.l};
    }
  }

  & > input.error {
    border-color: ${({ theme }) => theme.colors.error};
  }

  & > textarea {
    margin-bottom: 16px;
    height: 147px;
    resize: none;

    @media screen and (${({ theme }) => theme.media.desktop}) {
      margin-bottom: 32px;
    }
  }
`;

export const ErrorText = styled.p`
  display: none;
  &.error {
    display: block;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    text-align: right;
    letter-spacing: -0.48px;
    color: ${({ theme }) => theme.colors.error};
  }
`;
