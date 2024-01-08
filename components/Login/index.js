import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import styled from "styled-components";
import { StyledIconButton } from "../Buttons";
import Icon from "../Icons";

const StyledLogIn = styled.div`
  position: absolute;
  bottom: 15px;
  left: 0px;
  width: 100%;
  padding-inline: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledUserInfo = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const StyledAvatar = styled(Image)`
  border-radius: 100%;
  width: 50px;
  height: 50px;
`;

const StyledLogInButton = styled(StyledIconButton)`
  background-color: darkgrey;
  border-radius: 5px;
  color: var(--primaryBackgroundColor);
  padding: 5px 10px;
  box-shadow: 0px 1px 3px var(--primaryDarkColor);
  &:hover {
    background-color: var(--accentHoverColor);
  }
`;

const StyledLogOutButton = styled(StyledLogInButton)`
  background-color: var(--dangerColor);
  &:hover {
    background-color: var(--dangerHoverColor);
  }
`;

export default function Login() {
  const { data: session } = useSession();
  return (
    <StyledLogIn>
      {session && (
        <StyledUserInfo>
          <StyledAvatar
            src={session.user.image}
            alt="avatar"
            width="100"
            height="100"
          />
          <span>{session.user.name}</span>
        </StyledUserInfo>
      )}
      {session ? (
        <StyledLogOutButton onClick={() => signOut()}>
          <Icon variant="logOut" color="var(--primaryBackgroundColor)" />
          Sign out
        </StyledLogOutButton>
      ) : (
        <StyledLogInButton onClick={() => signIn()}>
          <Icon variant="logIn" color="var(--primaryBackgroundColor)" />
          Sign in
        </StyledLogInButton>
      )}
    </StyledLogIn>
  );
}
