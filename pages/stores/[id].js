import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import {
  StyledSubmitButton,
  StyledCancelButton,
  StyledButtonContainer,
} from "@/components/Buttons";
import {
  StyledForm as StyledStoreAddressForm,
  StyledLabel,
  StyledInput,
} from "@/components/Forms";
import Icon from "@/components/Icons";
import DeleteConfirmation from "@/components/DeleteConfirmation";
import StoreForm from "@/components/Forms/StoreForm";
import dynamic from "next/dynamic";
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

export default function StoreDetailsPage({
  stores,
  isEdit,
  onEditStore,
  onDeleteStore,
  onSetIsEdit,
}) {
  const [addressSearch, setAddressSearch] = useState({
    address: "",
    lat: "",
    long: "",
  });
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;

  const store = stores.find((store) => store._id === id);
  if (!store) return <h2>store not found</h2>;
  if (!isReady) return <h2>is Loading</h2>;

  function editStore(editedStore) {
    onEditStore(editedStore);
    onSetIsEdit();
  }
  function handleAddressSearch(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const address = Object.fromEntries(formData);
    const addressURL = `https://nominatim.openstreetmap.org/search?format=json&limit=3&q=${address.storeAddress}`;
    console.log("Adresse: ", addressURL);

    updateStoreAddressAndCoordinates(addressURL, address);
  }
  async function updateStoreAddressAndCoordinates(addressURL, address) {
    const response = await fetch(addressURL);
    const coordinates = await response.json();
    setAddressSearch({
      address: address.storeAddress,
      lat: coordinates[0].lat,
      long: coordinates[0].lon,
    });
    console.log("newAddress: ", addressSearch);
  }
  return (
    <main>
      {!isEdit ? (
        <>
          <Map stores={stores} currentStore={store} />
          <StyledTitleContainer>
            <StyledTitle>{store.name}</StyledTitle>
            <DeleteConfirmation
              store={store}
              onDeleteStore={onDeleteStore}
              onDetailsPage
            />
          </StyledTitleContainer>
          <StyledDetailTitle>Note</StyledDetailTitle>
          <StyledDetailField>
            {store.note ? store.note : "No note"}
          </StyledDetailField>
          <StyledDetailTitle>Address</StyledDetailTitle>
          <StyledDetailField>
            {store.address ? store.address : "No address"}
          </StyledDetailField>
          <StyledButtonContainer>
            <StyledCancelButton as={Link} href="/stores">
              <Icon variant="arrowBack" color="var(--primaryButtonColor" />
              All stores
            </StyledCancelButton>
            <StyledSubmitButton
              onClick={() => (
                onSetIsEdit(),
                setAddressSearch({ address: "", lat: "", long: "" })
              )}
            >
              <Icon variant="edit" color="var(--primaryButtonColor" />
              Edit
            </StyledSubmitButton>
          </StyledButtonContainer>
        </>
      ) : (
        <>
          <Map
            stores={stores}
            currentStore={store}
            addressSearch={addressSearch}
          />
          <StoreForm
            store={store}
            onSubmit={editStore}
            onSetIsEdit={onSetIsEdit}
            addressSearch={addressSearch}
          />
          <StyledStoreAddressForm onSubmit={handleAddressSearch}>
            <StyledLabel htmlFor="storeAddress">Address</StyledLabel>
            <StyledInput
              id="storeAddress"
              name="storeAddress"
              placeholder="Enter store address"
              defaultValue={store.address}
            />
            <button type="submit">Search</button>
          </StyledStoreAddressForm>
        </>
      )}
    </main>
  );
}
