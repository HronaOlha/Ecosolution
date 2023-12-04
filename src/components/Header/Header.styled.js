import styled from "styled-components";

export const HeaderSection = styled.section`
  position: fixed;
  right: 0;
  left: 0;
  padding-top: 36px;
  padding-bottom: 36px;
  display: flex;
  justify-content: space-between;
  transition: backdrop-filter 300ms ease;

  &.scrolled {
    background-size: 100% 15px;
    backdrop-filter: blur(10px);
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 12px;
`;

export const BurgerBtn = styled.button`
  border-radius: 50%;
  border: none;
  background-color: ${({ theme }) => theme.colors.lightGreen};
  height: 40px;
  width: 40px;
  padding: 12px;
  color: ${({ theme }) => theme.colors.darkGreen};
  transition: background-color 400ms ease;

  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.colors.mainGreen};
  }
`;
