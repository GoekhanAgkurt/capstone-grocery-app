import GlobalStyle from "../styles";
import { initialProducts } from "@/lib/data";
import useLocalStorageState from "use-local-storage-state";
import Header from "@/components/Header";

export default function App({ Component, pageProps }) {
  const [products, setProducts] = useLocalStorageState("products", {
    defaultValue: initialProducts,
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
        onAddProduct={handleAddProduct}
        onEditProduct={handleEditProduct}
        handleDeleteProduct={handleDeleteProduct}
      />
    </>
  );
}
