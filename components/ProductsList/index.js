import ProductListItem from "@/components/ProductListItem";
export default function ProductsList({
  products,
  onDeleteProduct,
  onToggleShoppingList,
}) {
  // if (products.length === 0) {
  //   return (
  //     <>
  //       <p>Currently, your product list is empty. </p>
  //       <p>You can add products to your list via the the green + button</p>
  //     </>
  //   );
  // }
  return (
    <ul>
      {products.map((product) => (
        <ProductListItem
          key={product._id}
          product={product}
          onDeleteProduct={onDeleteProduct}
          onToggleShoppingList={onToggleShoppingList}
        />
      ))}
    </ul>
  );
}
