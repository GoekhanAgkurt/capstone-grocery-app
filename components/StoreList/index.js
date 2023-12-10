import StoreListItem from "@/components/StoreListItem";
import useSWR from "swr";
import LottieFile from "../LottieFile";

export default function StoreList() {
  const {
    data: stores,
    isLoading: isLoadingStores,
    error: errorStores,
    mutate: mutateStores,
  } = useSWR("/api/stores");

  if (isLoadingStores) return <h2>Loading...</h2>;

  if (errorStores)
    return <LottieFile variant="error">Can{"'"}t load Stores</LottieFile>;

  if (stores.length === 0) {
    return (
      <>
        <h2>All Stores</h2>
        <p>Currently, your store list is empty. </p>
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
