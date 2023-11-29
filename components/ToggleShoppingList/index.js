import Icon from "@/components/Icons";
import { StyledIconButton as StyledToggleShoppingListButton } from "@/components/Buttons";

export default function ToggleShoppingList({
  product,
  onToggleShoppingList,
  shoppingListProducts,
}) {
  return (
    <>
      <StyledToggleShoppingListButton
        type="button"
        onClick={() => onToggleShoppingList(product)}
      >
        <Icon
          variant={
            shoppingListProducts
              .map((shoppingListProduct) => shoppingListProduct._id)
              .includes(product._id)
              ? "removeFromShoppingList"
              : "addToShoppingList"
          }
          color={
            shoppingListProducts
              .map((shoppingListProduct) => shoppingListProduct._id)
              .includes(product._id)
              ? "var(--accentColor)"
              : "var(--primaryDarkColor)"
          }
        />
      </StyledToggleShoppingListButton>
    </>
  );
}
