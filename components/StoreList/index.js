import StoreListItem from "@/components/StoreListItem";
import useSWR from "swr";

export default function StoreList({ onDeleteStore }) {
  const {
    data: stores,
    isLoading: isLoadingStores,
    error: errorStores,
    mutate: mutateStores,
  } = useSWR("/api/stores");

  if (isLoadingStores || errorStores) return <h2>Loading...</h2>;
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
            onDeleteStore={onDeleteStore}
            mutateStores={mutateStores}
          />
        ))}
      </ul>
    </>
  );
}
