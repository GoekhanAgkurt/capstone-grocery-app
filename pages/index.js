import ProductsList from "@/components/ProductsList";
export default function HomePage({ products }) {
  return (
    <main>
      <ProductsList products={products}></ProductsList>
    </main>
  );
}
