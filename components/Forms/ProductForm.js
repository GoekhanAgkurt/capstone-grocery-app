import { defaultImageURL } from "@/public/images/defaultImageURL";
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
  StyledIconButton,
} from "@/components/Buttons";
import Icon from "@/components/Icons";
import styled from "styled-components";
import { useState } from "react";
import Loading from "../Loading";

const StyledImageUpload = styled.input`
  display: none;
`;

const StyledUploadImageButton = styled(StyledIconButton)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 130px;
  justify-content: center;
  background-color: var(--accentColor);
  border-radius: 5px;
  font-size: 12px;
  color: var(--primaryBackgroundColor);
  padding: 5px 10px;
  box-shadow: 0px 1px 3px var(--primaryDarkColor);
  &:hover {
    background-color: var(--accentHoverColor);
  }
`;

const StyledRemoveImageButton = styled(StyledUploadImageButton)`
  left: 10px;
  background-color: var(--dangerColor);
  &:hover {
    background-color: var(--dangerHoverColor);
  }
`;

const StyledErrorMessage = styled.p`
  color: var(--dangerColor);
`;

export default function ProductForm({
  product = {},
  stores,
  currentImageURL,
  onSubmit,
  onSetCurrentImageURL,
  onSetIsEdit,
}) {
  const [isUploading, setIsUploading] = useState(false);
  const [isError, setIsError] = useState("");
  const isCreateProduct = Object.keys(product).length === 0;

  function changeImage(event) {
    onSetCurrentImageURL(URL.createObjectURL(event.target.files[0]));
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    setIsUploading(true);

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const productData = {
      name: data.productName,
      note: data.productNote,
      selectedStore: data.selectedStore,
      _id: isCreateProduct ? uid() : product._id,
    };

    if (data.productImage.name !== "" && currentImageURL !== defaultImageURL) {
      try {
        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });
        if (!response.ok) {
          throw new Error(
            `Error uploading picture (${
              response.statusText + " " + response.status
            }). Please try again.`
          );
        } else {
          const imageResponse = await response.json();
          productData.imageURL = imageResponse.secure_url;
        }
      } catch (error) {
        onSetCurrentImageURL(product.imageURL || defaultImageURL);
        setIsError(error.message);
        setIsUploading(false);
        return;
      }
    } else {
      if (product.imageURL) {
        productData.imageURL =
          currentImageURL === defaultImageURL
            ? defaultImageURL
            : product.imageURL;
      } else productData.ImageURL = defaultImageURL;
    }
    onSubmit(productData);
  }

  if (isUploading)
    return (
      <Loading>
        {isCreateProduct ? "Uplaoding product." : "Updating product."}
      </Loading>
    );
  return (
    <StyledForm onSubmit={handleFormSubmit}>
      {isError !== "" && <StyledErrorMessage>{isError}</StyledErrorMessage>}
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
      <StyledUploadImageButton as="label" htmlFor="productImage">
        <Icon
          variant={currentImageURL === defaultImageURL ? "upload" : "edit"}
          color="var(--primaryBackgroundColor)"
        />
        {currentImageURL === defaultImageURL ? "Uplaod Image" : "Change Image"}
      </StyledUploadImageButton>
      <StyledImageUpload
        id="productImage"
        name="productImage"
        type="file"
        accept=".png, .jpeg, .jpg, .webp"
        onChange={changeImage}
      />
      {currentImageURL !== defaultImageURL && (
        <StyledRemoveImageButton
          type="button"
          onClick={() => onSetCurrentImageURL(defaultImageURL)}
        >
          <Icon variant="delete" color="var(--primaryBackgroundColor)" />
          Remove Image
        </StyledRemoveImageButton>
      )}
      <StyledButtonContainer>
        {isCreateProduct ? (
          <StyledCancelButton as={Link} href="/">
            <Icon variant="cancel" color="var(--primaryButtonColor)" />
            Cancel
          </StyledCancelButton>
        ) : (
          <StyledCancelButton
            type="button"
            onClick={() => {
              onSetIsEdit();
              onSetCurrentImageURL(product.imageURL);
            }}
          >
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
