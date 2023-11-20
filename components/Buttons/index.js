import styled from "styled-components";

export const StyledButton = styled.button`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  width: 49%;
  padding: 10px 40px;
  margin-top: 20px;
  color: white;
  font-size: 16px;
  box-shadow: 0px 1px 3px var(--primaryDarkColor);
  &:hover {
    cursor: pointer;
  }
`;
export const StyledSubmitButton = styled(StyledButton)`
  background-color: var(--accentColor);
  &:hover {
    background-color: #5d8a55;
  }
`;
export const StyledCancelButton = styled(StyledButton)`
  background-color: darkgrey;
  color: var(--primaryBackgroundColor);
  &:hover {
    background-color: grey;
  }
`;
