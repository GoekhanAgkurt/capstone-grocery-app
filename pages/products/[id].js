import { useRouter } from "next/router";

export default function ProductDetailsPage({ products }) {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const product = products.find((product) => product._id === id);
  if (!isReady) return <h2>is Loading</h2>;
  console.log(product);
  return (
    <main>
      <h2>{product.name}</h2>
      <p>{product.note}</p>
    </main>
  );
}
