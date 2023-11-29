import { StyledListItem } from "@/components/ListItems";
import styled from "styled-components";
import Link from "next/link";
import CheckProductFromShoppingList from "@/components/CheckProductFromShoppingList";

export default function ShoppingListItem({ shoppingListProduct }) {
  const StyledLink = styled(Link)`
    display: inline-block;
    flex-grow: 1;
    width: auto;
    padding: 10px;
    text-decoration: none;
    color: var(--primaryDarkColor);
    &:hover {
      cursor: pointer;
    }
  `;
  return (
    <StyledListItem>
      <StyledLink href={`/products/${shoppingListProduct._id}`}>
        {shoppingListProduct.name}
      </StyledLink>
      <CheckProductFromShoppingList shoppingListProduct={shoppingListProduct} />
    </StyledListItem>
  );
}
