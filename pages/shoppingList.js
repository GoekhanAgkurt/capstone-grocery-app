import ShoppingListItem from "@/components/ShoppingListItem";
export default function shoppingList({ shoppingListProducts }) {
  return (
    <main>
      <h2>Shopping List</h2>
      <ul>
        {shoppingListProducts.map((shoppingListProduct) => (
          <ShoppingListItem
            key={shoppingListProduct._id}
            shoppingListProduct={shoppingListProduct}
          />
        ))}
      </ul>
    </main>
  );
}
