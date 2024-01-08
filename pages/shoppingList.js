import ShoppingListItem from "@/components/ShoppingListItem";
import { StyledTitleContainer, StyledTitle } from "@/components/ListItems";
import DeleteConfirmation from "@/components/DeleteConfirmation";
import Head from "next/head";
import LottieFile from "@/components/LottieFile";
import useSWR from "swr";
import { useSession } from "next-auth/react";

export default function ShoppingList() {
  const {
    data: products,
    isLoading: isLoadingProducts,
    error: errorProducts,
    mutate: mutateProducts,
  } = useSWR("/api/products");
  const { data: session } = useSession();

  if (!session)
    return (
      <main>
        <LottieFile variant="error" />;
      </main>
    );
  if (isLoadingProducts)
    return (
      <LottieFile variant="loadingProductsAndStores">
        Loading Products...
      </LottieFile>
    );
  if (errorProducts)
    return <LottieFile variant="error">Can{"'"}t load Products</LottieFile>;
  return (
    <main>
      <Head>
        <title key="title">My Grocery | Shopping List</title>
        <meta
          property="og:title"
          content="My Grocery | Shopping List"
          key="og-title"
        />
      </Head>
      <StyledTitleContainer>
        <StyledTitle>Shopping List</StyledTitle>
        <DeleteConfirmation
          products={products}
          onShoppingListPage
          mutate={mutateProducts}
        />
      </StyledTitleContainer>
      {!products.find((product) => product.onShoppingList === true) && (
        <>
          <p>Your shopping list is emtpy. </p>
          <p>
            You can add products to your shoppping list on the products page.
          </p>
        </>
      )}
      <ul>
        {products
          .filter((product) => product.onShoppingList === true)
          .map((shoppingListProduct) => (
            <ShoppingListItem
              key={shoppingListProduct._id}
              shoppingListProduct={shoppingListProduct}
              mutateProducts={mutateProducts}
            />
          ))}
      </ul>
    </main>
  );
}
