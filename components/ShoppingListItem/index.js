import { StyledListItem } from "@/components/ListItems";
import { StyledListLink } from "@/components/Buttons";
import styled from "styled-components";

const StyledCheckboxContainer = styled.div`
  padding: 0 15px;
  display: flex;
  justify-content: center;
`;
const StyledCheckbox = styled.input`
  accent-color: var(--accentColor);
`;
export default function ShoppingListItem({
  shoppingListProduct,
  onCheckProduct,
}) {
  return (
    <StyledListItem $onShoppingList={shoppingListProduct.checkedProduct}>
      <StyledListLink
        href={`/products/${shoppingListProduct._id}`}
        $checkedProduct={shoppingListProduct.checkedProduct}
      >
        {shoppingListProduct.name}
      </StyledListLink>
      <StyledCheckboxContainer>
        <StyledCheckbox
          type="checkbox"
          id={shoppingListProduct._id}
          checked={shoppingListProduct.checkedProduct}
          onChange={() => onCheckProduct(shoppingListProduct)}
        />
      </StyledCheckboxContainer>
    </StyledListItem>
  );
}
