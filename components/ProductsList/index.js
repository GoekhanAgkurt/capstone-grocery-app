import ProductListItem from "@/components/ProductListItem";
export default function ProductsList({ products, mutateProducts }) {
  return (
    <ul>
      {products.map((product) => (
        <ProductListItem
          key={product._id}
          product={product}
          mutateProducts={mutateProducts}
        />
      ))}
    </ul>
  );
}
