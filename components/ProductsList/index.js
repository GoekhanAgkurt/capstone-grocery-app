import ProductListItem from "../ProductListItem";
export default function ProductsList({ products, onDeleteProduct }) {
  if (products.length === 0) {
    return (
      <>
        <h2>Product List</h2>
        <p>Currently, your product list is empty. </p>
        <p>You can add products to your list via the the green + button</p>
      </>
    );
  }
  return (
    <>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <ProductListItem
            key={product._id}
            product={product}
            onDeleteProduct={onDeleteProduct}
          />
        ))}
      </ul>
    </>
  );
}
