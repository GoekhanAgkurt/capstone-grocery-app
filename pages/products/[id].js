import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import { StyledCancelButton, StyledSubmitButton } from "@/components/Buttons";

const StyledDetailField = styled.p`
  width: 100%;
  background-color: var(--secondaryBackgroundColor);
  padding: 10px;
  margin-block: 7px;
  border-radius: 5px;
`;

const StyledDetailTitle = styled.h3`
  margin-block: 20px 0px;
`;

const StyledLinkButton = styled(Link)`
  display: inline-block;
  padding: 10px 40px;
  background-color: var(--primaryDarkColor);
  color: white;
  text-decoration: none;
  margin-top: 40px;
  border-radius: 5px;
  box-shadow: 0px 1px 3px var(--primaryDarkColor);
  &:hover {
    color: var(--accentColor);
    background-color: black;
    cursor: pointer;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  font-family: var(--fontBold);
  font-size: 18px;
`;

const StlyedInput = styled.input`
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

export default function ProductDetailsPage({ products, handleEditProduct }) {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;

  const [isEdit, setIsEdit] = useState(false);

  const product = products.find((product) => product._id === id);
  if (!isReady) return <h2>is Loading</h2>;

  function editProduct(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const editedProduct = {
      name: data.productName,
      note: data.productNote,
      _id: product._id,
    };

    handleEditProduct(editedProduct);
    setIsEdit(false);
  }

  return (
    <main>
      <h2>Product Details</h2>
      {!isEdit ? (
        <>
          <StyledDetailTitle>Name</StyledDetailTitle>
          <StyledDetailField>{product.name}</StyledDetailField>
          <StyledDetailTitle>Note</StyledDetailTitle>
          <StyledDetailField>{product.note}</StyledDetailField>
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
          <StyledLabel htmlFor="productName">Name</StyledLabel>
          <StlyedInput
            id="productName"
            name="productName"
            type="text"
            defaultValue={product.name}
            required
            autoFocus
          ></StlyedInput>
          <StyledLabel htmlFor="productNote">Note</StyledLabel>
          <StyledTextArea
            id="productNote"
            name="productNote"
            defaultValue={product.note}
          ></StyledTextArea>
          <StyledButtonContainer>
            <StyledCancelButton onClick={() => setIsEdit(false)}>
              Cancel
            </StyledCancelButton>
            <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
          </StyledButtonContainer>
        </StyledForm>
      )}
    </main>
  );
}
