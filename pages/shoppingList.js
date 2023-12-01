import ShoppingListItem from "@/components/ShoppingListItem";
import { StyledTitleContainer, StyledTitle } from "@/components/ListItems";
import DeleteConfirmation from "@/components/DeleteConfirmation";

export default function shoppingList({
  products,
  onCheckProduct,
  onClearAllCheckedProducts,
}) {
  return (
    <main>
      <StyledTitleContainer>
        <StyledTitle>Shopping List</StyledTitle>
        <DeleteConfirmation
          products={products}
          onShoppingListPage
          onClearAllCheckedProducts={onClearAllCheckedProducts}
        />
      </StyledTitleContainer>
      {!products.find((product) => product.onShoppingList === true) && (
        <>
          <p>Your shopping list is emtpy. </p>
          <p>
            You can add products to your shoppping list on the products page.
          </p>
        </>
      )}
      <ul>
        {products
          .filter((product) => product.onShoppingList === true)
          .map((shoppingListProduct) => (
            <ShoppingListItem
              key={shoppingListProduct._id}
              shoppingListProduct={shoppingListProduct}
              onCheckProduct={onCheckProduct}
            />
          ))}
      </ul>
    </main>
  );
}