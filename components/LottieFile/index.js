import Lottie from "lottie-react";
import BananaAngry from "@/public/lottiefiles/BananaAngry.json";
import BananaWalking from "@/public/lottiefiles/BananaWalking.json";
import LoadingCircle from "@/public/lottiefiles/LoadingCircle.json";
import styled from "styled-components";
import Icon from "../Icons";
import { useSession, signIn } from "next-auth/react";
import { StyledSubmitButton } from "../Buttons";

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
  /* z-index: 2; */
`;

const StyledLottie = styled(Lottie)`
  width: 250px;
`;

const lotties = {
  error: BananaAngry,
  loading: BananaWalking,
  loadingProductsAndStores: LoadingCircle,
};

export default function LottieFile({ children, variant }) {
  const { data: session, status } = useSession();

  if (!session && status !== "loading") {
    return (
      <StyledLoadingContainer $error={variant === "error"}>
        <StyledLottie loop={true} animationData={lotties[variant]} />
        <h2>You{`'`}re not logged in</h2>
        <StyledSubmitButton onClick={() => signIn()}>
          <Icon variant="logIn" color="var(--primaryButtonColor)" />
          Log in
        </StyledSubmitButton>
      </StyledLoadingContainer>
    );
  }
  return (
    <StyledLoadingContainer $error={variant === "error"}>
      <StyledLottie loop={true} animationData={lotties[variant]} />
      <h2>{children}</h2>
    </StyledLoadingContainer>
  );
}
