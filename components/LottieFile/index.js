import Lottie from "lottie-react";
import BananaAngry from "@/public/lottiefiles/BananaAngry.json";
import BananaWalking from "@/public/lottiefiles/BananaWalking.json";
import LoadingCircle from "@/public/lottiefiles/LoadingCircle.json";
import LoadingMap from "@/public/lottiefiles/LoadingMap";
import styled from "styled-components";

const StyledLoadingContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${({ $onMap }) => ($onMap ? "calc(100% + 30px)" : "100%")};
  margin: 0 -15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ $onMap }) =>
    $onMap ? "none" : "var(--primaryBackgroundColor)"};
  color: ${({ $error }) =>
    $error ? "var(--dangerColor)" : "var(--accentColor)"};
  backdrop-filter: ${({ $onMap }) => $onMap && "blur(2px)"};
  z-index: 2;
`;

const StyledLottie = styled(Lottie)`
  width: 250px;
`;

const lotties = {
  error: BananaAngry,
  loading: BananaWalking,
  loadingProductsAndStores: LoadingCircle,
  loadingMap: LoadingMap,
};

export default function LottieFile({ children, variant, onMap }) {
  return (
    <StyledLoadingContainer $error={variant === "error"} $onMap={onMap}>
      <StyledLottie loop={true} animationData={lotties[variant]} />
      <h2>{children}</h2>
    </StyledLoadingContainer>
  );
}
