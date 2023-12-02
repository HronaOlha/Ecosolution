import styled from "styled-components";

export const Btn = styled.a`
  /* display: grid; */
  /* align-items: center; */
  /* gap: 12px; */
  display: inline-block;

  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.mainGreen};
  padding: 10px 16px;
  color: ${({ theme }) => theme.colors.darkGreen};
  transition: background-color 400ms ease, color 400ms ease;

  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGreen};
    color: ${({ theme }) => theme.colors.mainGreen};
  }

  & > svg {
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.darkGreen};
  }
`;
