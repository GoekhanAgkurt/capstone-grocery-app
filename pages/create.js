import { useRouter } from "next/router";
import ProductForm from "@/components/Forms/ProductForm";

export default function CreateProduct({ onAddProduct, stores }) {
  const router = useRouter();

  function createProduct(newProduct) {
    onAddProduct(newProduct);
    router.push("/");
  }
  return (
    <main>
      <h2>New Product</h2>
      <ProductForm stores={stores} onSubmit={createProduct} />
    </main>
  );
}
