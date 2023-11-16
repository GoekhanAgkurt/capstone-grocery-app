import { uid } from "uid";
import ProductListItem from "../ProductListItem";
export default function ProductsList({ products }) {
  return (
    <>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <ProductListItem key={uid()} product={product}></ProductListItem>
        ))}
      </ul>
    </>
  );
}
