import { useRouter } from "next/router";
import Link from "next/link";

import { uid } from "uid";
import styled from "styled-components";
import { StyledCancelButton, StyledSubmitButton } from "@/components/Buttons";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  font-family: var(--fontBold);
  font-size: 18px;
`;

const StyledInput = styled.input`
  width: 100%;
  background-color: white;
  padding: 10px;
  margin-block: 7px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-family: var(--fontRegular);
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100px;
  background-color: white;
  padding: 10px;
  margin-block: 7px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-family: var(--fontRegular);
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function CreateProduct({ onAddProduct, stores }) {
  const router = useRouter();
  function createProduct(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newProduct = {
      name: data.productName,
      note: data.productNote,
      selectedStore: data.selectedStore,
      _id: uid(),
    };
    onAddProduct(newProduct);
    router.push("/");
  }
  return (
    <main>
      <h2>New Product</h2>
      <StyledForm onSubmit={createProduct}>
        <StyledLabel htmlFor="productName">Name</StyledLabel>
        <StyledInput
          id="productName"
          name="productName"
          type="text"
          placeholder="Enter product name"
          required
        />
        <StyledLabel htmlFor="selectedStore">Store</StyledLabel>
        <StyledInput as="select" id="selectedStore" name="selectedStore">
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
        />
        <StyledButtonContainer>
          <StyledCancelButton as={Link} href="/">
            Cancel
          </StyledCancelButton>
          <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
        </StyledButtonContainer>
      </StyledForm>
    </main>
  );
}
