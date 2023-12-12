import ProductsList from "@/components/ProductsList";
import Icon from "@/components/Icons";
import { StyledCreateLink } from "@/components/Buttons";
import styled from "styled-components";
import { useEffect, useState } from "react";
import useSWR from "swr";
import LottieFile from "@/components/LottieFile";

const StyledSearchForm = styled.form`
  display: flex;
  margin-block-start: 30px;
  border-radius: 5px;
  width: 100%;
  border: 1px solid;
  box-shadow: inset 0px 0px 2px var(--shadowColor);
  padding-inline: 10px;
  background-color: white;
  &:focus-within {
    border: 2px solid var(--accentColor);
  }
`;

const StyledSearchInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  padding: 10px;
  width: 100%;
  font-size: 16px;
`;

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [foundProducts, setFoundProducts] = useState();
  const {
    data: products,
    isLoading: isLoadingProducts,
    error: errorProducts,
    mutate: mutateProducts,
  } = useSWR("/api/products");
  useEffect(() => {
    if (products) {
      setFoundProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, products]);

  if (isLoadingProducts)
    return (
      <main>
        <LottieFile variant="loadingProductsAndStores">
          Loading Products...
        </LottieFile>
      </main>
    );
  if (errorProducts)
    return (
      <main>
        <LottieFile variant="error">Can{"'"}t load Products</LottieFile>
      </main>
    );
  return (
    <main>
      <StyledSearchForm>
        <Icon variant="search" />
        <StyledSearchInput
          onChange={(event) => setSearchTerm(event.target.value)}
          type="text"
          id="searchTerm"
          name="searchTerm"
          placeholder="Search a product"
        ></StyledSearchInput>
      </StyledSearchForm>
      <h2>All Products</h2>
      <ProductsList
        products={searchTerm.length === 0 ? products : foundProducts}
        mutateProducts={mutateProducts}
      ></ProductsList>
      {products.length === 0 && searchTerm.length === 0 && (
        <>
          <p>Currently, your product list is empty. </p>
          <p>
            You can add products to your list via the green {`"+" `}
            button.
          </p>
        </>
      )}
      {searchTerm.length > 0 && foundProducts.length === 0 && (
        <>
          <p>{`"${searchTerm}"`} not found. </p>
          <p>Please check your search input or create a new product. </p>
        </>
      )}

      <StyledCreateLink href="/create">
        <Icon variant="plus" color="var(--primaryButtonColor)" size="30" />
      </StyledCreateLink>
    </main>
  );
}
