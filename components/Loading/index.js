import styled from "styled-components";
import Icon from "../Icons";

const StyledLoadingContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--primaryBackgroundColor);
  color: var(--accentColor);
  z-index: 2;
`;

export default function Loading({ children }) {
  return (
    <StyledLoadingContainer>
      <Icon variant="products" color="var(--accentColor)" size="200"></Icon>
      <h2>{children}</h2>
    </StyledLoadingContainer>
  );
}
