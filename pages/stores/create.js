import { useRouter } from "next/router";
import StoreForm from "@/components/Forms/StoreForm";
import Map from "@/components/Map";
import useSWR from "swr";
import { useState } from "react";

export default function CreateStore({ onAddStore, stores }) {
  const [newAddress, setNewAddress] = useState("");

  const newAddressURL = `https://nominatim.openstreetmap.org/search?format=json&limit=3&q=${newAddress}`;
  const { data: currentCoordinates } = useSWR(newAddressURL);
  console.log("coordinates from SWR: ", currentCoordinates);

  const router = useRouter();

  function createStore(newStore) {
    onAddStore(newStore);
    router.push("/stores");
  }
  function handleNewAddress(address) {
    setNewAddress(address);
  }

  return (
    <main>
      <Map stores={stores} currentCoordinates={currentCoordinates} />
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
