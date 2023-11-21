import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import { StyledCancelButton, StyledSubmitButton } from "@/components/Buttons";
import DeleteConfirmation from "@/components/DeleteConfirmation";

const StyledTitleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin-block: 20px;
`;

const StyledTitle = styled.h2`
  width: 85%;
  margin: 0px;
`;

const StyledDetailField = styled.p`
  width: 100%;
  background-color: var(--secondaryBackgroundColor);
  padding: 10px;
  margin-block: 7px 20px;
  border-radius: 5px;
`;

const StyledDetailTitle = styled.h3`
  margin-block: 0px 0px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  font-family: var(--fontBold);
  font-size: 19px;
  margin: 0;
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

const StyledTitleInput = styled(StyledInput)`
  font-size: 1.5rem;
  font-family: var(--fontBold);
  color: var(--primaryDarkColor);
  background-color: transparent;
  padding: 10px 0px;
  margin-block: 10px;
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

export default function ProductDetailsPage({
  products,
  stores,
  onEditProduct,
  onDeleteProduct,
}) {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;

  const [isEdit, setIsEdit] = useState(false);

  const product = products.find((product) => product._id === id);
  if (!product) return <h2>product not found</h2>;
  if (!isReady) return <h2>is Loading</h2>;

  const linkedStore = stores.find(
    (store) => store._id === product.selectedStore
  );

  function editProduct(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const editedProduct = {
      name: data.productName,
      note: data.productNote,
      selectedStore: data.selectedStore,
      _id: product._id,
    };

    onEditProduct(editedProduct);
    setIsEdit(false);
  }

  return (
    <main>
      {!isEdit ? (
        <>
          <StyledTitleContainer>
            <StyledTitle>{product.name}</StyledTitle>
            <DeleteConfirmation
              product={product}
              onDeleteProduct={onDeleteProduct}
              backToList
            />
          </StyledTitleContainer>
          <StyledDetailTitle>Store</StyledDetailTitle>
          <StyledDetailField>
            {linkedStore ? linkedStore.name : "No Store selected"}
          </StyledDetailField>
          <StyledDetailTitle>Note</StyledDetailTitle>
          <StyledDetailField>
            {product.note ? product.note : "No note"}
          </StyledDetailField>
          <StyledButtonContainer>
            <StyledCancelButton as={Link} href="/">
              Back to List
            </StyledCancelButton>
            <StyledSubmitButton onClick={() => setIsEdit(true)}>
              Edit
            </StyledSubmitButton>
          </StyledButtonContainer>
        </>
      ) : (
        <StyledForm onSubmit={editProduct}>
          <StyledTitleInput
            id="productName"
            name="productName"
            type="text"
            defaultValue={product.name}
            required
            autoFocus
            aria-label="Input for product title"
          />
          <StyledLabel htmlFor="selectedStore">Store</StyledLabel>
          <StyledInput
            as={"select"}
            id="selectedStore"
            name="selectedStore"
            defaultValue={linkedStore ? linkedStore._id : ""}
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
            defaultValue={product.note}
          ></StyledTextArea>
          <StyledButtonContainer>
            <StyledCancelButton type="button" onClick={() => setIsEdit(false)}>
              Cancel
            </StyledCancelButton>
            <StyledSubmitButton type="submit">Save</StyledSubmitButton>
          </StyledButtonContainer>
        </StyledForm>
      )}
    </main>
  );
}
