import { useRouter } from "next/router";
import ProductForm from "@/components/Forms/ProductForm";
import ProductImage from "@/components/ProductImage";
import styled from "styled-components";
import { useState } from "react";
import { defaultImageURL } from "@/public/images/defaultImageURL";

const StyledMainWithPaddingBottom = styled.main`
  padding-bottom: 180px;
`;

export default function CreateProduct({ onAddProduct, stores }) {
  const router = useRouter();

  const [currentImageURL, setCurrentImageURL] = useState(defaultImageURL);
  function handleSetCurrentImageURL(url) {
    setCurrentImageURL(url);
  }

  function createProduct(newProduct) {
    onAddProduct(newProduct);
    router.push("/");
  }
  return (
    <StyledMainWithPaddingBottom>
      <ProductImage imageSrc={currentImageURL} />
      <h2>New Product</h2>
      <ProductForm
        stores={stores}
        currentImageURL={currentImageURL}
        onSubmit={createProduct}
        onSetCurrentImageURL={handleSetCurrentImageURL}
      />
    </StyledMainWithPaddingBottom>
  );
}
