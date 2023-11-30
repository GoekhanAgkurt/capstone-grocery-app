import ShoppingListItem from "@/components/ShoppingListItem";
import { StyledTitleContainer, StyledTitle } from "@/components/ListItems";
import DeleteConfirmation from "@/components/DeleteConfirmation";

export default function shoppingList({ products }) {
  return (
    <main>
      <StyledTitleContainer>
        <StyledTitle>Shopping List</StyledTitle>
        <DeleteConfirmation
          products={products}
          onDeleteProduct={onDeleteProduct}
          onDetailsPage
        />
      </StyledTitleContainer>
      <ul>
        {products
          .filter((product) => product.onShoppingList === true)
          .map((shoppingListProduct) => (
            <ShoppingListItem
              key={shoppingListProduct._id}
              shoppingListProduct={shoppingListProduct}
            />
          ))}
      </ul>
    </main>
  );
}
