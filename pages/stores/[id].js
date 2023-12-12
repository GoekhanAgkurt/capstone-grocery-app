import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import useSWR from "swr";
import styled from "styled-components";

import Icon from "@/components/Icons";
import LottieFile from "@/components/LottieFile";
import DeleteConfirmation from "@/components/DeleteConfirmation";
import StoreForm from "@/components/Forms/StoreForm";
import {
  StyledSubmitButton,
  StyledCancelButton,
  StyledButtonContainer,
} from "@/components/Buttons";
import Head from "next/head";
import dynamic from "next/dynamic";
import { updateStore } from "@/utils/storesUtils";
const Map = dynamic(() => import("@/components/Map"), { ssr: false });

const StyledTitleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-block: 20px;
`;

const StyledTitle = styled.h2`
  width: 75%;
  margin: 0px;
`;

const StyledDetailField = styled.p`
  width: 100%;
  background-color: transparent;
  padding: 10px 0;
  margin-block: 7px 20px;
  border-radius: 5px;
`;

const StyledDetailTitle = styled.h3`
  margin-block: 0px 0px;
`;

export default function StoreDetailsPage({ isEdit, onSetIsEdit }) {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;

  const {
    data: store,
    isLoading: isLoadingStore,
    error: errorStore,
    mutate: mutateStore,
  } = useSWR(id ? `/api/stores/${id}` : null);

  const [newAddress, setNewAddress] = useState("");

  async function editStore(editedStore) {
    await updateStore(editedStore);
    onSetIsEdit();
    mutateStore();
  }
  function handleNewAddress(address) {
    setNewAddress(address);
  }
  useEffect(() => {
    if (!store) return;
    setNewAddress(store.address);
  }, [store]);

  const newAddressURL = `https://nominatim.openstreetmap.org/search?format=json&limit=3&q=${newAddress}`;
  const { data: currentCoordinates, isLoading } = useSWR(
    store ? newAddressURL : null
  );

  if (isLoadingStore || !isReady)
    return (
      <main>
        <LottieFile variant="loadingProductsAndStores">
          Loading Store...
        </LottieFile>
      </main>
    );
  if (errorStore)
    return (
      <main>
        <LottieFile variant="error">Store not found.</LottieFile>
      </main>
    );
  return (
    <main>
      <Head>
        <title key="title">My Grocery | {store.name}</title>
        <meta
          property="og:title"
          content={`My Grocery | ${store.name}`}
          key="og-title"
        />
      </Head>
      <Map
        currentStore={store}
        currentCoordinates={currentCoordinates}
        isLoading={isLoading}
      />
      {!isEdit ? (
        <>
          <StyledTitleContainer>
            <StyledTitle>{store.name}</StyledTitle>
            <DeleteConfirmation store={store} onDetailsPage />
          </StyledTitleContainer>
          <StyledDetailTitle>Address</StyledDetailTitle>
          <StyledDetailField>
            {store.address ? store.address : "No address"}
          </StyledDetailField>
          <StyledDetailTitle>Note</StyledDetailTitle>
          <StyledDetailField>
            {store.note ? store.note : "No note"}
          </StyledDetailField>
          <StyledButtonContainer>
            <StyledCancelButton as={Link} href="/stores">
              <Icon variant="arrowBack" color="var(--primaryButtonColor" />
              All stores
            </StyledCancelButton>
            <StyledSubmitButton onClick={() => onSetIsEdit()}>
              <Icon variant="edit" color="var(--primaryButtonColor" />
              Edit
            </StyledSubmitButton>
          </StyledButtonContainer>
        </>
      ) : (
        <>
          <StoreForm
            store={store}
            newAddress={newAddress}
            currentCoordinates={currentCoordinates}
            location={location}
            onSetIsEdit={onSetIsEdit}
            onSubmit={editStore}
            onNewAddress={handleNewAddress}
          />
        </>
      )}
    </main>
  );
}
