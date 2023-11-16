import ProductsList from "@/components/ProductsList";
import Link from "next/link";
import styled from "styled-components";

const StyledCreateButton = styled.div`
  display: inline-block;
  background-color: var(--accentColor);
  position: fixed;
  right: 50px;
  bottom: 50px;
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  box-shadow: 0px 1px 3px var(--primaryFontColor);
  &:hover {
    bottom: 47.5px;
    right: 47.5px;
    height: 65px;
    width: 65px;
  }
`;

const StyledLink = styled(Link)`
  font-size: 1.4rem;
  color: white;
`;

export default function HomePage({ products }) {
  return (
    <main>
      <ProductsList products={products}></ProductsList>
      <StyledLink href="/create">
        <StyledCreateButton>+</StyledCreateButton>
      </StyledLink>
    </main>
  );
}
