import { useRouter } from "next/router";
import StoreForm from "@/components/Forms/StoreForm";

export default function CreateStore({ onAddStore }) {
  const router = useRouter();
  function createStore(newStore) {
    onAddStore(newStore);
    router.push("/stores");
  }
  return (
    <main>
      <h2>New Store</h2>
      <StoreForm onSubmit={createStore} />
    </main>
  );
}
