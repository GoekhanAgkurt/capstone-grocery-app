import Link from "next/link";
import { uid } from "uid";

import styled from "styled-components";
import Icon from "@/components/Icons";
import {
  StyledForm,
  StyledTitleInput,
  StyledLabel,
  StyledInput,
  StyledTextArea,
} from "@/components/Forms";
import {
  StyledSubmitButton,
  StyledCancelButton,
  StyledButtonContainer,
} from "@/components/Buttons";

const StyledConditionalButtonContainer = styled(StyledButtonContainer)`
  bottom: ${({ $isCreateStore }) => $isCreateStore && "40px"};
`;

export default function StoreForm({
  store = {},
  onSubmit,
  onSetIsEdit,
  newAddress,
  onNewAddress,
  currentCoordinates,
}) {
  const isCreateStore = Object.keys(store).length === 0;

  function handleFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const storeData = {
      name: data.storeName,
      note: data.storeNote,
      _id: isCreateStore ? null : store._id,
      address: newAddress ? newAddress : "",
      lat:
        currentCoordinates && currentCoordinates.length !== 0
          ? currentCoordinates[0].lat
          : "",
      lon:
        currentCoordinates && currentCoordinates.length !== 0
          ? currentCoordinates[0].lon
          : "",
    };
    // if (!isCreateStore) storeData._id = store._id;

    onSubmit(storeData);
  }
  return (
    <StyledForm onSubmit={handleFormSubmit}>
      {isCreateStore ? (
        <>
          <StyledLabel htmlFor="storeName">Name</StyledLabel>
          <StyledInput
            id="storeName"
            name="storeName"
            type="text"
            placeholder="Enter store name"
            defaultValue={store.name}
            required
          />
        </>
      ) : (
        <StyledTitleInput
          id="storeName"
          name="storeName"
          type="text"
          defaultValue={store.name}
          required
          autoFocus
          aria-label="Input for store title"
        />
      )}

      <StyledLabel htmlFor="storeAddress">Address</StyledLabel>
      <StyledInput
        id="storeAddress"
        name="storeAddress"
        type="text"
        placeholder="Enter store address"
        value={newAddress}
        onChange={(event) => onNewAddress(event.target.value)}
      />
      <StyledLabel htmlFor="storeNote">Note</StyledLabel>
      <StyledTextArea
        id="storeNote"
        name="storeNote"
        placeholder="Enter Note"
        defaultValue={store.note}
      />
      <StyledConditionalButtonContainer $isCreateStore={isCreateStore}>
        {isCreateStore ? (
          <StyledCancelButton as={Link} href="/stores">
            <Icon variant="cancel" color="var(--primaryButtonColor)" />
            Cancel
          </StyledCancelButton>
        ) : (
          <StyledCancelButton
            type="button"
            onClick={() => {
              onSetIsEdit();
              onNewAddress(store.address);
            }}
          >
            <Icon variant="cancel" color="var(--primaryButtonColor)" />
            Cancel
          </StyledCancelButton>
        )}
        <StyledSubmitButton type="submit">
          <Icon variant="check" color="var(--primaryButtonColor)" />
          {isCreateStore ? "Submit" : "Save"}
        </StyledSubmitButton>
      </StyledConditionalButtonContainer>
    </StyledForm>
  );
}
