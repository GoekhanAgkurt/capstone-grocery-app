import styled from "styled-components";

export const StyledButton = styled.button`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  width: 49%;
  padding-block: 10px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  &:hover {
    background-color: #5d8a55;
  }
`;
export const StyledCancelButton = styled(StyledButton)`
  background-color: darkgrey;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: var(--primaryBackgroundColor);
  &:hover {
    background-color: grey;
  }
`;
