import GlobalStyle from "../styles";
import { initialProducts, initialStores } from "@/lib/data";
import useLocalStorageState from "use-local-storage-state";
import Header from "@/components/Header";

export default function App({ Component, pageProps }) {
  const [products, setProducts] = useLocalStorageState("products", {
    defaultValue: initialProducts,
  });

  const [stores, setStores] = useLocalStorageState("stores", {
    defaultValue: initialStores,
  });

  function handleAddProduct(newProduct) {
    setProducts([...products, newProduct]);
  }

  function handleEditProduct(editedProduct) {
    setProducts(
      products.map((product) =>
        product._id === editedProduct._id ? editedProduct : product
      )
    );
  }

  function handleDeleteProduct(_id) {
    setProducts(products.filter((product) => product._id !== _id));
  }
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component
        {...pageProps}
        products={products}
        stores={stores}
        onAddProduct={handleAddProduct}
        onEditProduct={handleEditProduct}
        onDeleteProduct={handleDeleteProduct}
      />
    </>
  );
}
