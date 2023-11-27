import Link from "next/link";
import styled from "styled-components";
import Icon from "@/components/Icons";
import { useRouter } from "next/router";

const StyledNavBar = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0;
`;

const StyledNavLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  padding: 10px;
  width: 100%;
  border-top: ${({ $currentPage }) =>
    $currentPage
      ? "solid 3px var(--accentColor)"
      : "solid 3px var(--secondaryBackgroundColor)"};
  &:hover {
    border-color: ${({ $currentPage }) => !$currentPage && "gray"};
  }
`;
const StyledListItem = styled.li`
  width: 50%;
  text-align: center;
`;
export default function Navigation({ isEdit }) {
  const router = useRouter();
  if (router.pathname === "/create" || isEdit) return;
  return (
    <nav>
      <StyledNavBar>
        <StyledListItem>
          <StyledNavLink
            href="/"
            $currentPage={
              router.pathname === "/" || router.pathname === "/products/[id]"
            }
          >
            <Icon
              variant="products"
              size="40"
              color={
                router.pathname === "/" || router.pathname === "/products/[id]"
                  ? "var(--accentColor)"
                  : "var(--primaryDarkColor)"
              }
            />
          </StyledNavLink>
        </StyledListItem>
        <StyledListItem>
          <StyledNavLink
            href="/stores"
            $currentPage={
              router.pathname === "/stores" ||
              router.pathname === "/stores/[id]"
            }
          >
            <Icon
              variant="store"
              size="40"
              color={
                router.pathname === "/stores" ||
                router.pathname === "/stores/[id]"
                  ? "var(--accentColor)"
                  : "var(--primaryDarkColor)"
              }
            />
          </StyledNavLink>
        </StyledListItem>
      </StyledNavBar>
    </nav>
  );
}
