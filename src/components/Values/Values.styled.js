import styled from "styled-components";

export const ValuesSection = styled.section``;

export const ValuesTexts = styled.div`
  @media screen and (${({ theme }) => theme.media.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 100px;
  }
  @media screen and (${({ theme }) => theme.media.desktop}) {
    margin-bottom: 124px;
  }

  & > h2 {
    margin: 0 0 24px 0;
    padding-right: 10px;

    @media screen and (${({ theme }) => theme.media.tablet}) {
      margin: 0;
      padding-right: 80px;
    }
    @media screen and (${({ theme }) => theme.media.desktop}) {
      padding-right: 232px;
    }
  }

  & > p {
    margin-bottom: 36px;

    @media screen and (${({ theme }) => theme.media.tablet}) {
      margin-bottom: 0;
      border-left: 1px solid ${({ theme }) => theme.colors.mainGreen};
      padding-left: 11px;
    }

    @media screen and (${({ theme }) => theme.media.desktop}) {
      align-items: end;

      border-left: 1px solid ${({ theme }) => theme.colors.mainGreen};
      padding-left: 161px;
    }
  }
`;

export const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;

  & > div {
    height: 197px;
    padding: 13px 12px 12px;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    @media screen and (${({ theme }) => theme.media.desktop}) {
      height: 100%;
      padding: 48px 24px 12px;
    }

    & > h3 {
      padding-bottom: 33px;
      border-bottom: 1px solid ${({ theme }) => theme.colors.mainGreen};
      margin-bottom: 12px;

      @media screen and (${({ theme }) => theme.media.tablet}) {
        padding-bottom: 51px;
      }
      @media screen and (${({ theme }) => theme.media.desktop}) {
        padding-bottom: 94px;
      }

      & > svg {
        height: 16px;
        width: 16px;
        margin-right: 8px;
        fill: transparent;

        @media screen and (${({ theme }) => theme.media.desktop}) {
          height: 24px;
          width: 24px;
        }
      }
    }

    & > p {
      font-size: 14px;

      @media screen and (${({ theme }) => theme.media.desktop}) {
        font-size: 16px;
      }
    }
  }

  @media screen and (${({ theme }) => theme.media.tablet}) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "one two windFarmImg windFarmImg"
      "workerTab workerTab three four";
  }
  @media screen and (${({ theme }) => theme.media.desktop}) {
    grid-gap: 48px;
  }
`;

export const WindFarmImg = styled.img`
  grid-area: windFarmImg;
`;

export const WorkerTab = styled.img`
  grid-area: workerTab;
`;
