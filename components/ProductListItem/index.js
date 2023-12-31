import styled from "styled-components";
import Link from "next/link";
import DeleteConfirmation from "@/components/DeleteConfirmation";
import { StyledListItem } from "@/components/ListItems";
import Icon from "@/components/Icons";
import { StyledIconButton as StyledToggleShoppingListButton } from "@/components/Buttons";
import { toggleOnShoppingList } from "@/utils/productUtils";

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

export default function ProductListItem({ product, mutateProducts }) {
  async function toggleOnClick() {
    await toggleOnShoppingList(product);
    mutateProducts();
  }

  return (
    <StyledListItem $onShoppingList={product.onShoppingList}>
      <StyledLink href={`/products/${product._id}`}>{product.name} </StyledLink>
      <StyledToggleShoppingListButton
        type="button"
        onClick={() => toggleOnClick()}
      >
        <Icon
          variant={
            product.onShoppingList ? "removeFromShoppingList" : "shoppingList"
          }
          color={
            product.onShoppingList
              ? "var(--accentColor)"
              : "var(--primaryDarkColor)"
          }
        />
      </StyledToggleShoppingListButton>
      <DeleteConfirmation product={product} mutate={mutateProducts} />
    </StyledListItem>
  );
}
