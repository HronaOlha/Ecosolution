import styled from "styled-components";

export const ButtonComponent = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid ${({ theme }) => theme.colors.mainGreen};
  border-radius: 50px;
  padding: 3px 4px 3px 16px;
  background-color: transparent;
  font-size: 16px;
  transition: background-color 400ms ease, color 400ms ease,
    border-color 400ms ease;

  & > p {
    display: inline-block;
  }

  & > span {
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.mainGreen};
    height: 32px;
    width: 32px;
    padding: 5px;
    color: ${({ theme }) => theme.colors.darkGreen};
  }
  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGreen};
    border-color: ${({ theme }) => theme.colors.darkGreen};
    color: ${({ theme }) => theme.colors.mainGreen};
  }
`;
