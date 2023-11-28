import StoreList from "@/components/StoreList";

export default function Stores({ stores, onDeleteStore }) {
  return (
    <main>
      <StoreList stores={stores} onDeleteStore={onDeleteStore} />
    </main>
  );
}
