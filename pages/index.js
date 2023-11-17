import ProductsList from "@/components/ProductsList";
import Link from "next/link";
import styled from "styled-components";

const StyledCreateLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%);
  height: 60px;
  width: 60px;
  font-size: 1.4rem;
  color: white;
  text-decoration: none;
  background-color: var(--accentColor);
  border-radius: 50px;
  box-shadow: 0px 1px 3px var(--primaryFontColor);
  &:hover {
    bottom: 47.5px;
    right: 47.5px;
    height: 65px;
    width: 65px;
  }
`;

export default function HomePage({ products }) {
  return (
    <main>
      <ProductsList products={products}></ProductsList>
      <StyledCreateLink href="/create">+</StyledCreateLink>
    </main>
  );
}
