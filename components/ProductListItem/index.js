import styled from "styled-components";
import Link from "next/link";
import DeleteConfirmation from "@/components/DeleteConfirmation";
import { StyledListItem } from "@/components/ListItems";
import ToggleShoppingList from "@/components/ToggleShoppingList";

const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  padding: 10px;
  color: var(--primaryDarkColor);
  &:hover {
    cursor: pointer;
  }
  width: auto;
  flex-grow: 1;
`;

export default function ProductListItem({
  product,
  onDeleteProduct,
  onToggleShoppingList,
}) {
  return (
    <StyledListItem>
      <StyledLink href={`/products/${product._id}`}>{product.name} </StyledLink>
      <ToggleShoppingList
        product={product}
        onToggleShoppingList={onToggleShoppingList}
        type="button"
      />
      <DeleteConfirmation product={product} onDeleteProduct={onDeleteProduct} />
    </StyledListItem>
  );
}
