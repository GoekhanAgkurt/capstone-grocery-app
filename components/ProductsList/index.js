import ProductListItem from "@/components/ProductListItem";
export default function ProductsList({
  products,
  onDeleteProduct,
  onToggleShoppingList,
}) {
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
