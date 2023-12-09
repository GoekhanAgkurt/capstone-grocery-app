import ProductListItem from "@/components/ProductListItem";
export default function ProductsList({
  products,
  mutateProducts,
  onDeleteProduct,
  onToggleShoppingList,
}) {
  return (
    <ul>
      {products.map((product) => (
        <ProductListItem
          key={product._id}
          product={product}
          mutateProducts={mutateProducts}
          onDeleteProduct={onDeleteProduct}
          onToggleShoppingList={onToggleShoppingList}
        />
      ))}
    </ul>
  );
}
