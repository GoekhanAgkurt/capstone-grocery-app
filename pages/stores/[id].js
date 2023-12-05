import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
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
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;

  const store = stores.find((store) => store._id === id);

  const [addressSearch, setAddressSearch] = useState({
    address: "",
    lat: "",
    long: "",
  });
  const [newAddress, setNewAddress] = useState(store.address);
  function editStore(editedStore) {
    onEditStore(editedStore);
    onSetIsEdit();
  }

  useEffect(() => {
    async function fetchCoordinates(newAddress) {
      const newAddressURL = `https://nominatim.openstreetmap.org/search?format=json&limit=3&q=${newAddress}`;
      try {
        const response = await fetch(newAddressURL);
        const coordinates = await response.json();
        if (coordinates.length === 0) {
          throw new Error("Address could not be found");
        } else {
          console.log("coordinates: ", coordinates);
          setAddressSearch({
            address: newAddress,
            lat: coordinates[0].lat,
            long: coordinates[0].lon,
          });
          console.log("AddressSearch", addressSearch);
        }
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchCoordinates(newAddress);
  }, [newAddress]);

  if (!store) return <h2>store not found</h2>;
  if (!isReady) return <h2>is Loading...</h2>;
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
          <StyledStoreAddressForm>
            <StyledLabel htmlFor="storeAddress">Address</StyledLabel>
            <StyledInput
              id="storeAddress"
              name="storeAddress"
              type="text"
              placeholder="Enter store address"
              value={newAddress}
              onChange={(event) => setNewAddress(event.target.value)}
            />
          </StyledStoreAddressForm>
        </>
      )}
    </main>
  );
}
