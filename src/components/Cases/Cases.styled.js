import styled from "styled-components";

export const CasesSection = styled.section`
  /* overflow: hidden; */
`;

export const CasesTitle = styled.h2`
  padding-right: 48px;
`;

export const CasesList = styled.ul`
  /* width: 100%; */
  overflow: hidden;

  display: flex;
  gap: 24px;

  transition: "transform 0.3s ease";

  /* @media screen and (${({ theme }) => theme.media.tablet}) {
    gap: 24px;
  } */
`;

export const CasesItem = styled.li`
  width: 100%;
  & > img {
    width: 100%;
  }
`;

export const CasesThumb = styled.div`
  padding: 24px 12px 12px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;

export const MainInfoBox = styled.div`
  display: flex;
  /* gap: 60px; */

  justify-content: space-between;
  gap: 61px;
  margin-bottom: 12px;
  padding-bottom: 21px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mainGreen};

  & > h4 {
    margin: 0;
    width: 175px;
    font-size: ${({ theme }) => theme.fontSizes.m};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    /* text-align: left; */
    letter-spacing: -0.72px;
  }

  & > a {
    display: inline-block;
    border-radius: 50px;
    border: none;
    background-color: ${({ theme }) => theme.colors.mainGreen};
    height: 60px;
    width: 60px;
    padding: 16px;
    color: ${({ theme }) => theme.colors.darkGreen};
    transition: background-color 400ms ease, color 400ms ease;

    /* &:focus, */
    &:hover {
      background-color: ${({ theme }) => theme.colors.darkGreen};
      color: ${({ theme }) => theme.colors.mainGreen};
    }
  }
`;

export const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;
