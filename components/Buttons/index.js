import styled from "styled-components";
import Link from "next/link";

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
  color: var(--primaryButtonColor);
  &:hover {
    background-color: var(--cancelHoverColor);
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  padding-inline: 15px;
  width: 100%;
  max-width: 600px;
  bottom: 100px;
  left: 50%;
  transform: translate(-50%);
`;

export const StyledCreateLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 100px;
  left: 50%;
  transform: translate(-50%);
  height: 60px;
  width: 60px;
  font-size: 1.4rem;
  color: white;
  text-decoration: none;
  background-color: var(--accentColor);
  border-radius: 50px;
  box-shadow: 0px 1px 3px var(--primaryDarkColor);
  &:hover {
    bottom: 97.5px;
    right: 47.5px;
    height: 65px;
    width: 65px;
  }
`;

export const StyledIconButton = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 5px;
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    cursor: default;
  }
`;
