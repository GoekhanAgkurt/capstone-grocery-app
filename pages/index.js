import ProductsList from "@/components/ProductsList";
import Link from "next/link";
import styled from "styled-components";
import Icon from "@/components/Icons";

const StyledCreateLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 100px;
  left: 50%;
  transform: translate(-50%);
  height: 60px;
  width: 60px;
  font-size: 1.4rem;
  color: white;
  text-decoration: none;
  background-color: var(--accentColor);
  border-radius: 50px;
  box-shadow: 0px 1px 3px var(--primaryDarkColor);
  &:hover {
    bottom: 97.5px;
    right: 47.5px;
    height: 65px;
    width: 65px;
  }
`;

export default function HomePage({ products, onDeleteProduct }) {
  return (
    <main>
      <ProductsList
        onDeleteProduct={onDeleteProduct}
        products={products}
      ></ProductsList>
      <StyledCreateLink href="/create">
        <Icon variant="plus" color="var(--primaryButtonColor)" size="30" />
      </StyledCreateLink>
    </main>
  );
}
