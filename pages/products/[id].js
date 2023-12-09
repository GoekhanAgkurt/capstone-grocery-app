import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import useSWR from "swr";
import defaultImageURL from "@/public/images/defaultImageURL";
import styled from "styled-components";
import Icon from "@/components/Icons";
import DeleteConfirmation from "@/components/DeleteConfirmation";
import ProductForm from "@/components/Forms/ProductForm";
import ProductImage from "@/components/ProductImage";
import {
  StyledCancelButton,
  StyledSubmitButton,
  StyledButtonContainer,
} from "@/components/Buttons";
import { StyledTitleContainer, StyledTitle } from "@/components/ListItems";

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

export default function ProductDetailsPage({
  isEdit,
  onEditProduct,
  onDeleteProduct,
  onSetIsEdit,
}) {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;

  const [currentImageURL, setCurrentImageURL] = useState(defaultImageURL);
  function handleSetCurrentImageURL(url) {
    setCurrentImageURL(url);
  }

  const {
    data: product,
    isLoading: isLoadingProduct,
    error: errorProduct,
  } = useSWR(isReady ? `/api/products/${id}` : null);

  const {
    data: stores,
    isLoading: isLoadingStores,
    error: errorStores,
  } = useSWR("/api/stores");

  useEffect(() => {
    if (product && product.imageURL) setCurrentImageURL(product.imageURL);
  }, [product]);

  if (
    isLoadingProduct ||
    isLoadingStores ||
    errorProduct ||
    errorStores ||
    !isReady
  )
    return <h2>Loading...</h2>;

  const linkedStore = stores.find(
    (store) => store._id === product.selectedStore
  );

  function editProduct(editedProduct) {
    onEditProduct(editedProduct);
    onSetIsEdit();
  }
  return (
    <main>
      <ProductImage imageSrc={currentImageURL}></ProductImage>
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
        <ProductForm
          product={product}
          stores={stores}
          currentImageURL={currentImageURL}
          onSubmit={editProduct}
          onSetIsEdit={onSetIsEdit}
          onSetCurrentImageURL={handleSetCurrentImageURL}
        />
      )}
    </main>
  );
}
