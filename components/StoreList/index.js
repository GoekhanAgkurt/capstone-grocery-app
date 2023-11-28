import StoreListItem from "@/components/StoreListItem";

export default function StoresList({ stores }) {
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
          <StoreListItem key={store._id} store={store} />
        ))}
      </ul>
    </>
  );
}