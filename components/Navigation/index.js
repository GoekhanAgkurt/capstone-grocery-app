import Link from "next/link";
import styled from "styled-components";
import ProductSvg from "@/public/images/products_icon.svg";
import StoreSvg from "@/public/images/stores_icon.svg";

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

const StyledProductSvg = styled(ProductSvg)`
  path {
    fill: ${({ $currentPage }) =>
      $currentPage ? "var(--accentColor)" : "var(--primaryDarkColor)"};
  }
`;

const StyledStoreSvg = styled(StoreSvg)`
  path {
    fill: ${({ $currentPage }) =>
      $currentPage ? "var(--accentColor)" : "var(--primaryDarkColor)"};
  }
`;

export default function Navigation() {
  const router = useRouter();

  return (
    <nav>
      <StyledNavBar>
        <StyledListItem>
          <StyledNavLink href="/" $currentPage={router.pathname === "/"}>
            <StyledProductSvg $currentPage={router.pathname === "/"} />
          </StyledNavLink>
        </StyledListItem>
        <StyledListItem>
          <StyledNavLink
            href="/stores"
            $currentPage={router.pathname === "/stores"}
          >
            <StyledStoreSvg $currentPage={router.pathname === "/stores"} />
          </StyledNavLink>
        </StyledListItem>
      </StyledNavBar>
    </nav>
  );
}
