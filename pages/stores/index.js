import StoresList from "@/components/StoreList";

export default function Stores({ stores }) {
  return (
    <main>
      <StoresList stores={stores} />
    </main>
  );
}
