import ProductsList from "@/components/ProductsList";
import Icon from "@/components/Icons";
import { StyledCreateLink } from "@/components/Buttons";
import styled from "styled-components";
import { useEffect, useState } from "react";

const StyledSearchForm = styled.form``;

export default function HomePage({
  products,
  onDeleteProduct,
  onToggleShoppingList,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [foundProducts, setFoundProducts] = useState();
  useEffect(() => {
    setFoundProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, products]);

  return (
    <main>
      <StyledSearchForm>
        <input
          onChange={(event) => setSearchTerm(event.target.value)}
          type="text"
          id="searchTerm"
          name="searchTerm"
          placeholder="search a product"
        ></input>
      </StyledSearchForm>
      <h2>All Products</h2>
      <ProductsList
        products={searchTerm.length === 0 ? products : foundProducts}
        onDeleteProduct={onDeleteProduct}
        onToggleShoppingList={onToggleShoppingList}
      ></ProductsList>
      {!products && (
        <>
          <p>Currently, your product list is empty. </p>
          <p>You can add products to your list via the the green + button</p>
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
