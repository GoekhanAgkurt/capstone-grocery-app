import { StyledListItem } from "@/components/ListItems";
import { StyledListLink } from "@/components/Buttons";
import CheckProductFromShoppingList from "@/components/CheckProductFromShoppingList";

export default function ShoppingListItem({ shoppingListProduct }) {
  return (
    <StyledListItem>
      <StyledListLink
        href={`/products/${shoppingListProduct._id}`}
        $checkedProduct={shoppingListProduct.checkedProduct}
      >
        {shoppingListProduct.name}
      </StyledListLink>
      <CheckProductFromShoppingList shoppingListProduct={shoppingListProduct} />
    </StyledListItem>
  );
}
