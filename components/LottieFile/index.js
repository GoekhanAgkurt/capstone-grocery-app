import Lottie from "lottie-react";
import BananaAngry from "@/public/lottiefiles/BananaAngry.json";
import BananaWalking from "@/public/lottiefiles/BananaWalking.json";
import styled from "styled-components";

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
  color: ${({ $error }) =>
    $error ? "var(--dangerColor)" : "var(--accentColor)"};
  z-index: 2;
`;

const StyledLottie = styled(Lottie)`
  width: 250px;
`;

const lotties = {
  error: BananaAngry,
  loading: BananaWalking,
};

export default function LottieFile({ children, variant }) {
  console.log("variant", variant === "error");
  return (
    <StyledLoadingContainer $error={variant === "error"}>
      <StyledLottie loop={true} animationData={lotties[variant]} />
      <h2>{children}</h2>
    </StyledLoadingContainer>
  );
}
