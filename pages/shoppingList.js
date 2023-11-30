import ShoppingListItem from "@/components/ShoppingListItem";
export default function shoppingList({ products, onCheckProduct }) {
  function checkProduct(shoppingListProduct) {
    const checkedProduct = {
      name: shoppingListProduct.name,
      note: shoppingListProduct.note,
      selectedStore: shoppingListProduct.selectedStore,
      _id: shoppingListProduct._id,
      onShoppingList: shoppingListProduct.onShoppingList,
      checkedProduct:
        `${shoppingListProduct.checkedProduct}` === "true" ? false : true,
    };
    onCheckProduct(checkedProduct);
  }

  return (
    <main>
      <h2>Shopping List</h2>
      <ul>
        {products
          .filter((product) => product.onShoppingList === true)
          .map((shoppingListProduct) => (
            <ShoppingListItem
              key={shoppingListProduct._id}
              shoppingListProduct={shoppingListProduct}
              checkProduct={checkProduct}
            />
          ))}
      </ul>
    </main>
  );
}
