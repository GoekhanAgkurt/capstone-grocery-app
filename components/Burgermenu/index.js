import { useState } from "react";
import Icon from "../Icons";
import { StyledIconButton } from "../Buttons";
import styled from "styled-components";
import { useRouter } from "next/router";

const StyledMenu = styled.menu`
  width: 100%;
  height: 100%;
  background-color: var(--accentColor);
  position: absolute;
  left: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  padding-top: 25%;
  gap: 1%;
`;

const StyledBurgerMenuIcon = styled(StyledIconButton)`
  z-index: 2;
`;

const StyledMenuButton = styled.button`
  background: none;
  border: none;
  text-align: left;
  text-decoration: none;
  font-size: 50px;
  color: var(--primaryBackgroundColor);

  &:hover,
  :active {
    text-decoration: underline;
  }
`;

export default function BurgerMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const router = useRouter();

  return (
    <>
      <StyledBurgerMenuIcon onClick={() => setShowMenu(!showMenu)}>
        <Icon
          variant={showMenu ? "cancel" : "menu"}
          color="var(--primaryBackgroundColor)"
          size={40}
        />
      </StyledBurgerMenuIcon>
      {showMenu && (
        <StyledMenu>
          <li>
            <StyledMenuButton
              onClick={() => {
                setShowMenu(!showMenu);
                router.push("/about/team");
              }}
            >
              Team
            </StyledMenuButton>
          </li>
          <li>
            <StyledMenuButton
              onClick={() => {
                setShowMenu(!showMenu);
                router.push("/about/project");
              }}
            >
              Project
            </StyledMenuButton>
          </li>
          <li>
            <StyledMenuButton
              onClick={() => {
                setShowMenu(!showMenu);
                router.push("/about/whats-next");
              }}
            >
              What{"'"}s Next?
            </StyledMenuButton>
          </li>
        </StyledMenu>
      )}
    </>
  );
}
