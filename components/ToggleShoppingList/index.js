import Icon from "@/components/Icons";
import { StyledIconButton as StyledToggleShoppingListButton } from "@/components/Buttons";

export default function ToggleShoppingList({ product, onToggleShoppingList }) {
  function toggleShoppingList(product) {
    const productToShoppingList = {
      name: product.name,
      note: product.note,
      selectedStore: product.selectedStore,
      _id: product._id,
      onShoppingList: `${product.onShoppingList}` === "true" ? false : true,
    };
    onToggleShoppingList(productToShoppingList);
  }
  return (
    <>
      <StyledToggleShoppingListButton
        type="button"
        onClick={() => toggleShoppingList(product)}
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
    </>
  );
}
