import ProductListItem from "@/components/ProductListItem";
export default function ProductsList({
  products,
  shoppingListProducts,
  onDeleteProduct,
  onToggleShoppingList,
}) {
  if (products.length === 0) {
    return (
      <>
        <h2>All Products</h2>
        <p>Currently, your product list is empty. </p>
        <p>You can add products to your list via the the green + button</p>
      </>
    );
  }
  return (
    <>
      <h2>All Products</h2>
      <ul>
        {products.map((product) => (
          <ProductListItem
            key={product._id}
            product={product}
            shoppingListProducts={shoppingListProducts}
            onDeleteProduct={onDeleteProduct}
            onToggleShoppingList={onToggleShoppingList}
          />
        ))}
      </ul>
    </>
  );
}
