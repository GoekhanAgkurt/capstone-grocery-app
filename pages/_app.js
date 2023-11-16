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

  console.log("products:", products);
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component
        {...pageProps}
        products={products}
        handleAddProduct={handleAddProduct}
      />
    </>
  );
}
