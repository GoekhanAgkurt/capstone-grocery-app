import { useRouter } from "next/router";
import Link from "next/link";

import { uid } from "uid";
import styled from "styled-components";

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

const StyledSubmitButton = styled.button`
  border: none;
  border-radius: 5px;
  width: 49%;
  padding: 10px 40px;
  margin-top: 20px;
  background-color: var(--accentColor);
  color: white;
  font-size: 16px;
  box-shadow: 0px 1px 3px var(--primaryFontColor);
  &:hover {
    background-color: #5d8a55;
    cursor: pointer;
  }
`;

const StyledCancelLink = styled(Link)`
  border: none;
  display: inline-block;
  border-radius: 5px;
  width: 49%;
  padding: 10px 40px;
  margin-top: 20px;
  background-color: darkgrey;
  color: var(--primaryBackgroundColor);
  text-align: center;
  text-decoration: none;
  box-shadow: 0px 1px 3px var(--primaryFontColor);
  &:hover {
    background-color: grey;
    cursor: pointer;
  }
`;

export default function CreateProduct({ handleAddProduct }) {
  const router = useRouter();
  function createProduct(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newProduct = {
      name: data.productName,
      note: data.productNote,
      id: uid(),
    };
    handleAddProduct(newProduct);
    router.push("/");
  }
  return (
    <main>
      <h2>New Product</h2>
      <StyledForm onSubmit={createProduct}>
        <StyledLabel htmlFor="productName">Name</StyledLabel>
        <StlyedInput
          id="productName"
          name="productName"
          type="text"
          placeholder="Enter product name"
          required
        ></StlyedInput>
        <StyledLabel htmlFor="productNote">Note</StyledLabel>
        <StyledTextArea
          id="productNote"
          name="productNote"
          placeholder="Enter Notes"
        ></StyledTextArea>
        <StyledButtonContainer>
          <StyledCancelLink href="/">Cancel</StyledCancelLink>
          <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
        </StyledButtonContainer>
      </StyledForm>
    </main>
  );
}
