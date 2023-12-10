import { useRouter } from "next/router";
import { useState } from "react";
import defaultImageURL from "@/public/images/defaultImageURL";
import styled from "styled-components";
import ProductForm from "@/components/Forms/ProductForm";
import ProductImage from "@/components/ProductImage";
import Head from "next/head";

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
    <>
      <Head>
        <title key="title">My Groceries | Create Product</title>
        <meta
          property="og:title"
          content="My Groceries | Create Product"
          key="og-title"
        />
      </Head>
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
    </>
  );
}
