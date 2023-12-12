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
  padding-block-start: 25%;
  padding-inline-start: 15px;
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
  &:hover {
    text-decoration: underline;
  }
`;
const menuItems = [
  {
    label: "Team",
    path: "/about/team",
  },
  {
    label: "Project",
    path: "/about/project",
  },
  {
    label: "What's Next?",
    path: "/about/whats-next",
  },
];
export default function BurgerMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const router = useRouter();

  function handleMenuClick(path) {
    setShowMenu(!showMenu);
    router.push(path);
  }

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
          {menuItems.map((item) => (
            <li key={item.label}>
              <StyledMenuButton onClick={() => handleMenuClick(item.path)}>
                {item.label}
              </StyledMenuButton>
            </li>
          ))}
        </StyledMenu>
      )}
    </>
  );
}
