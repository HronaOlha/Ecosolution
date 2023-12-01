import styled from "styled-components";

export const ContactInfoContainer = styled.div`
  grid-area: contactsInfo;

  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  /* text-align: center; */
  /* margin-bottom: 36px; */

  @media screen and (${({ theme }) => theme.media.tablet}) {
    /* grid-area: mainContacts; */
    flex-direction: row;
    justify-content: space-between;
  }
`;
