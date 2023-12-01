import styled from "styled-components";

export const HeaderSection = styled.section`
  position: fixed;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding-top: 36px;
  padding-bottom: 36px;
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

export const ContactBtn = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;

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

// export const ContactSpan = styled.span`
//   display: inline-block;
//   height: 14px;
//   width: 14px;
//   border-radius: 50%;
//   background-color: ${({ theme }) => theme.colors.darkGreen};
//   transition: background-color 400ms ease;

//   ${ContactBtn}:hover & {
//     background-color: ${({ theme }) => theme.colors.mainGreen};
//   }

//   & > svg {
//     color: white;
//   }
// `;
