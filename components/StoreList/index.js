import StoreListItem from "@/components/StoreListItem";
import LottieFile from "@/components/LottieFile";
import useSWR from "swr";

export default function StoreList() {
  const {
    data: stores,
    isLoading: isLoadingStores,
    error: errorStores,
    mutate: mutateStores,
  } = useSWR("/api/stores");

  if (isLoadingStores)
    return (
      <LottieFile variant="loadingProductsAndStores">
        Loading Stores...
      </LottieFile>
    );
  if (errorStores)
    return <LottieFile variant="error">Can{"'"}t load Stores</LottieFile>;
  if (stores.length === 0) {
    return (
      <>
        <h2>All Stores</h2>
        <p>Currently, your store list is empty. </p>
        <p>
          You can add stores to your list via the green {`"+" `}
          button.
        </p>
      </>
    );
  }

  return (
    <>
      <h2>All Stores</h2>
      <ul>
        {stores.map((store) => (
          <StoreListItem
            key={store._id}
            store={store}
            mutateStores={mutateStores}
          />
        ))}
      </ul>
    </>
  );
}
