import { useRouter } from "next/router";
import { useState } from "react";

import useSWR from "swr";

import StoreForm from "@/components/Forms/StoreForm";
import Head from "next/head";

import dynamic from "next/dynamic";
import { addStore } from "@/utils/storesUtils";
const Map = dynamic(() => import("@/components/Map"), { ssr: false });

export default function CreateStore() {
  const [newAddress, setNewAddress] = useState("");

  const newAddressURL = `https://nominatim.openstreetmap.org/search?format=json&limit=3&q=${newAddress}`;
  const { data: currentCoordinates, isLoading } = useSWR(newAddressURL);

  const router = useRouter();

  async function createStore(newStore) {
    await addStore(newStore);
    router.push("/stores");
  }
  function handleNewAddress(address) {
    setNewAddress(address);
  }

  return (
    <main>
      <Head>
        <title key="title">My Grocery | Create Store</title>
        <meta
          property="og:title"
          content="My Grocery | Create Store"
          key="og-title"
        />
      </Head>
      <Map currentCoordinates={currentCoordinates} isLoading={isLoading} />
      <h2>New Store</h2>
      <StoreForm
        newAddress={newAddress}
        currentCoordinates={currentCoordinates}
        onSubmit={createStore}
        onNewAddress={handleNewAddress}
      />
    </main>
  );
}
