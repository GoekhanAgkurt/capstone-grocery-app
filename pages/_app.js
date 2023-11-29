import GlobalStyle from "@/styles";
import { initialProducts, initialStores } from "@/lib/data";
import useLocalStorageState from "use-local-storage-state";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import { use, useState } from "react";
import shoppingList from "./shoppingList";

export default function App({ Component, pageProps }) {
  const [products, setProducts] = useLocalStorageState("products", {
    defaultValue: initialProducts,
  });

  const [stores, setStores] = useLocalStorageState("stores", {
    defaultValue: initialStores,
  });
  const [shoppingListProducts, setShoppingListProducts] = useLocalStorageState(
    "shoppingListProducts",
    {
      defaultValue: [],
    }
  );
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
  function handleToggleShoppingList(newProduct) {
    {
      shoppingListProducts
        .map((shoppingListProduct) => shoppingListProduct._id)
        .includes(newProduct._id)
        ? setShoppingListProducts(
            shoppingListProducts.filter(
              (shoppingListProduct) =>
                shoppingListProduct._id !== newProduct._id
            )
          )
        : setShoppingListProducts([...shoppingListProducts, newProduct]);
    }
    console.log("On the shopping list are:", shoppingListProducts);
  }

  return (
    <>
      <GlobalStyle />
      <Header isEdit={isEdit} />
      <Component
        {...pageProps}
        products={products}
        stores={stores}
        shoppingListProducts={shoppingListProducts}
        isEdit={isEdit}
        onAddProduct={handleAddProduct}
        onAddStore={handleAddStore}
        onEditProduct={handleEditProduct}
        onDeleteProduct={handleDeleteProduct}
        onDeleteStore={handleDeleteStore}
        onSetIsEdit={handleSetIsEdit}
        onToggleShoppingList={handleToggleShoppingList}
      />
      <Navigation isEdit={isEdit} />
    </>
  );
}
