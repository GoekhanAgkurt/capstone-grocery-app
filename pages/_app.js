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

  function handleEditStore(editedStore) {
    setStores(
      stores.map((store) =>
        store._id === editedStore._id ? editedStore : store
      )
    );
  }

  function handleSetIsEdit() {
    setIsEdit(!isEdit);
  }

  function handleDeleteProduct(_id) {
    setProducts(products.filter((product) => product._id !== _id));
  }

  function handleDeleteStore(_id) {
    setStores(stores.filter((store) => store._id !== _id));
    setProducts(
      products.map((product) =>
        product.selectedStore === _id
          ? { ...product, selectedStore: "" }
          : product
      )
    );
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
        onEditStore={handleEditStore}
        onDeleteProduct={handleDeleteProduct}
        onDeleteStore={handleDeleteStore}
        onSetIsEdit={handleSetIsEdit}
      />
      <Navigation isEdit={isEdit} />
    </>
  );
}
