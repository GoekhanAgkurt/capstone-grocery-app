import { useRouter } from "next/router";
import StoreForm from "@/components/Forms/StoreForm";
import Head from "next/head";

export default function CreateStore({ onAddStore }) {
  const router = useRouter();
  function createStore(newStore) {
    onAddStore(newStore);
    router.push("/stores");
  }
  return (
    <main>
      <Head>
        <title key="title">My Groceries | Create Store</title>
        <meta
          property="og:title"
          content="My Groceries | Create Store"
          key="og-title"
        />
      </Head>
      <h2>New Store</h2>
      <StoreForm onSubmit={createStore} />
    </main>
  );
}
