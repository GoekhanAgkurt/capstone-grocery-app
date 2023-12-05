import styled from "styled-components";
import Lottie from "lottie-react";
import BananaWalking from "@/public/lottiefiles/BananaWalking.json";

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

const StyledLottie = styled(Lottie)`
  width: 250px;
`;

export default function Loading({ children }) {
  return (
    <StyledLoadingContainer>
      <StyledLottie loop={true} animationData={BananaWalking} />
      <h2>{children}</h2>
    </StyledLoadingContainer>
  );
}
