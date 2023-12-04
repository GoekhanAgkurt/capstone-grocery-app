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

export default function ProductForm({
  product = {},
  stores,
  onSubmit,
  onSetIsEdit,
}) {
  const isCreateProduct = Object.keys(product).length === 0;

  function handleFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const productData = {
      name: data.productName,
      note: data.productNote,
      selectedStore: data.selectedStore,
      _id: isCreateProduct ? uid() : product._id,
    };

    onSubmit(productData);
  }
  return (
    <StyledForm onSubmit={handleFormSubmit}>
      {isCreateProduct ? (
        <>
          <StyledLabel htmlFor="productName">Name</StyledLabel>
          <StyledInput
            id="productName"
            name="productName"
            type="text"
            placeholder="Enter product name"
            defaultValue={product.name}
            required
          />
        </>
      ) : (
        <StyledTitleInput
          id="productName"
          name="productName"
          type="text"
          defaultValue={product.name}
          required
          autoFocus
          aria-label="Input for product title"
        />
      )}
      <StyledLabel htmlFor="selectedStore">Store</StyledLabel>
      <StyledInput
        as="select"
        id="selectedStore"
        name="selectedStore"
        defaultValue={product.selectedStore}
      >
        <option value="">--Select a store--</option>
        {stores.map((store) => (
          <option key={store._id} value={store._id}>
            {store.name}
          </option>
        ))}
      </StyledInput>
      <StyledLabel htmlFor="productNote">Note</StyledLabel>
      <StyledTextArea
        id="productNote"
        name="productNote"
        placeholder="Enter Note"
        defaultValue={product.note}
      />
      <StyledButtonContainer>
        {isCreateProduct ? (
          <StyledCancelButton as={Link} href="/">
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
          {isCreateProduct ? "Submit" : "Save"}
        </StyledSubmitButton>
      </StyledButtonContainer>
    </StyledForm>
  );
}
