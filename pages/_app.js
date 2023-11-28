import GlobalStyle from "@/styles";
import { initialProducts, initialStores } from "@/lib/data";
import useLocalStorageState from "use-local-storage-state";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [products, setProducts] = useLocalStorageState("products", {
    defaultValue: initialProducts,
  });

  const [stores, setStores] = useLocalStorageState("stores", {
    defaultValue: initialStores,
  });

  const [isEdit, setIsEdit] = useState(false);

  function handleAddProduct(newProduct) {
    setProducts([...products, newProduct]);
  }

  function handleAddStore(newStore) {
    setStores([...stores, newStore]);
  }

  function handleEditProduct(editedProduct) {
    setProducts(
      products.map((product) =>
        product._id === editedProduct._id ? editedProduct : product
      )
    );
  }
  function handleSetIsEdit() {
    setIsEdit(!isEdit);
  }
  function handleDeleteProduct(_id) {
    setProducts(products.filter((product) => product._id !== _id));
  }

  return (
    <>
      <GlobalStyle />
      <Header isEdit={isEdit} />
      <Component
        {...pageProps}
        products={products}
        stores={stores}
        isEdit={isEdit}
        onAddProduct={handleAddProduct}
        onAddStore={handleAddStore}
        onEditProduct={handleEditProduct}
        onDeleteProduct={handleDeleteProduct}
        onSetIsEdit={handleSetIsEdit}
      />
      <Navigation isEdit={isEdit} />
    </>
  );
}
