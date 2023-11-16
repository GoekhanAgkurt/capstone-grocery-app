import { useRouter } from "next/router";
import Link from "next/link";

import { uid } from "uid";

export default function CreateProduct({ handleAddProduct }) {
  const router = useRouter();
  function createProduct(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newProduct = {
      name: data.productName,
      note: data.productNote,
      id: uid(),
    };
    handleAddProduct(newProduct);
    router.push("/");
  }
  return (
    <main>
      <h2>New Product</h2>
      <form onSubmit={createProduct}>
        <label htmlFor="productName">Name</label>
        <input
          id="productName"
          name="productName"
          type="text"
          placeholder="Enter product name"
          required
        ></input>
        <label htmlFor="productNote">Note</label>
        <textarea
          id="productNote"
          name="productNote"
          placeholder="Enter Notes"
        ></textarea>
        <button type="submit">Submit</button>
        <Link href="/">Cancel</Link>
      </form>
    </main>
  );
}
