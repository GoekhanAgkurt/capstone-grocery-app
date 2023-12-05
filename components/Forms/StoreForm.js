import Link from "next/link";
import { uid } from "uid";
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
import Icon from "@/components/Icons";

export default function StoreForm({
  store = {},
  onSubmit,
  onSetIsEdit,
  addressSearch,
}) {
  const isCreateStore = Object.keys(store).length === 0;

  function handleFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const storeData = {
      ...store,
      name: data.storeName,
      note: data.storeNote,
      _id: isCreateStore ? uid() : store._id,
      address: addressSearch.address,
      lat: addressSearch.lat,
      long: addressSearch.long,
    };

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
      <StyledLabel htmlFor="storeNote">Note</StyledLabel>
      <StyledTextArea
        id="storeNote"
        name="storeNote"
        placeholder="Enter Note"
        defaultValue={store.note}
      />
      <StyledButtonContainer>
        {isCreateStore ? (
          <StyledCancelButton as={Link} href="/stores">
            <Icon variant="cancel" color="var(--primaryButtonColor)" />
            Cancel
          </StyledCancelButton>
        ) : (
          <StyledCancelButton type="button" onClick={() => onSetIsEdit()}>
            <Icon variant="cancel" color="var(--primaryButtonColor)" />
            Cancel
          </StyledCancelButton>
        )}
        <StyledSubmitButton type="submit">
          <Icon variant="check" color="var(--primaryButtonColor)" />
          {isCreateStore ? "Submit" : "Save"}
        </StyledSubmitButton>
      </StyledButtonContainer>
    </StyledForm>
  );
}
