import styled from "styled-components";

export const ButtonComponent = styled.button`
  margin-bottom: ${(props) => {
    return props.marginBottom ? props.marginBottom + "px" : 0 + "px";
  }};
  border: 1px solid #97d28b;
  border-radius: 50px;
  padding: 10px 16px;
  background-color: transparent;
  font-size: 16px;
`;
