import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  font-family: var(--fontBold);
  font-size: 18px;
`;

export const StyledInput = styled.input`
  width: 100%;
  background-color: white;
  padding: 10px;
  margin-block: 7px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-family: var(--fontRegular);
`;
export const StyledTitleInput = styled(StyledInput)`
  font-size: 1.5rem;
  font-family: var(--fontBold);
  color: var(--primaryDarkColor);
  background-color: transparent;
  padding: 10px 0px;
  margin-block: 10px;
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100px;
  background-color: white;
  padding: 10px;
  margin-block: 7px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-family: var(--fontRegular);
`;
