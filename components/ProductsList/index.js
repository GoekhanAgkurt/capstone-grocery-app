import ProductListItem from "../ProductListItem";
export default function ProductsList({ products, handleDeleteProduct }) {
  return (
    <>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <ProductListItem
            key={product._id}
            product={product}
            onDeleteProduct={handleDeleteProduct}
          />
        ))}
      </ul>
    </>
  );
}
