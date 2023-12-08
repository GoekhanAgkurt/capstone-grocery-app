import { useState } from "react";
import Icon from "../Icons";
import { StyledIconButton } from "../Buttons";
import styled from "styled-components";

const StyledMenu = styled.menu`
  width: 100%;
  height: 100%;
  background-color: var(--accentColor);
  position: absolute;
  left: 0;
`;

const StyledBurgerMenuIcon = styled(StyledIconButton)`
  z-index: 2;
`;

export default function BurgerMenu() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <StyledBurgerMenuIcon onClick={() => setShowMenu(!showMenu)}>
        <Icon
          variant={showMenu ? "cancel" : "menu"}
          color="var(--primaryBackgroundColor)"
          size={40}
        />
      </StyledBurgerMenuIcon>
      {showMenu && <StyledMenu></StyledMenu>}
    </>
  );
}
