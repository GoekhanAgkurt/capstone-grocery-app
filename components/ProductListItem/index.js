import styled from "styled-components";
import Link from "next/link";
import DeleteConfirmation from "@/components/DeleteConfirmation";
import { StyledListItem } from "@/components/ListItems";
import ToggleShoppingList from "@/components/ToggleShoppingList";

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

export default function ProductListItem({
  product,
  shoppingListProducts,
  onDeleteProduct,
  onToggleShoppingList,
}) {
  return (
    <StyledListItem>
      <ToggleShoppingList
        product={product}
        shoppingListProducts={shoppingListProducts}
        onToggleShoppingList={onToggleShoppingList}
        type="button"
      />
      <StyledLink href={`/products/${product._id}`}>{product.name} </StyledLink>
      <DeleteConfirmation product={product} onDeleteProduct={onDeleteProduct} />
    </StyledListItem>
  );
}
