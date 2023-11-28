import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import {
  StyledCancelButton,
  StyledSubmitButton,
  StyledButtonContainer,
} from "@/components/Buttons";
import DeleteConfirmation from "@/components/DeleteConfirmation";
import Icon from "@/components/Icons";

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
  font-family: var(--fontHandwriting);
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

export default function ProductDetailsPage({
  products,
  stores,
  isEdit,
  onEditProduct,
  onDeleteProduct,
  onSetIsEdit,
}) {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;

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
    onSetIsEdit();
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
              onDetailsPage
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
              <Icon variant="arrowBack" color="var(--primaryButtonColor" />
              All products
            </StyledCancelButton>
            <StyledSubmitButton onClick={() => onSetIsEdit()}>
              <Icon variant="edit" color="var(--primaryButtonColor" />
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
            <StyledCancelButton type="button" onClick={() => onSetIsEdit()}>
              <Icon variant="cancel" color="var(--primaryButtonColor)" />
              Cancel
            </StyledCancelButton>
            <StyledSubmitButton type="submit">
              <Icon variant="check" color="var(--primaryButtonColor)" />
              Save
            </StyledSubmitButton>
          </StyledButtonContainer>
        </StyledForm>
      )}
    </main>
  );
}
