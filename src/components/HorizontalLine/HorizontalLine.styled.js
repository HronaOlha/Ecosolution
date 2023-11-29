import styled from "styled-components";

export const Line = styled.div`
  margin-bottom: ${(props) => {
    return props.marginBottom ? props.marginBottom + "px" : 0 + "px";
  }};
  border-top: 1px solid ${({ theme }) => theme.colors.mainGreen};
  width: 100%;
`;
