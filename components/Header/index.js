import styled from "styled-components";
import Link from "next/link";
import BurgerMenu from "../Burgermenu";
import Head from "next/head";

const StyledHeadline = styled.h1`
  margin-block: 10px;
  display: inline-block;
  text-decoration: none;
  font-family: var(--fontTitle);
  color: var(--primaryBackgroundColor);
  text-shadow: 1px 1px 4px var(--primaryDarkColor);
`;

export default function Header({ isEdit }) {
  return (
    <>
      <Head>
        <title key="title">My Groceries</title>
        <meta
          name="description"
          content="My Groceries is a shopping list app for groceries with the option of linking created products and stores with each other while also saving and displaying additional information such as locations or product photos."
          key="description"
        />
        <meta property="og:title" content="My Groceries" key="og-title" />
        <meta
          property="og:description"
          content="My Groceries is a shopping list app for groceries with the option of linking created products and stores with each other while also saving and displaying additional information such as locations or product photos."
          key="og-description"
        />
      </Head>
      <header>
        {!isEdit ? (
          <Link href="/">
            <StyledHeadline>My Groceries </StyledHeadline>
          </Link>
        ) : (
          <StyledHeadline>My Groceries </StyledHeadline>
        )}
        <BurgerMenu />
      </header>
    </>
  );
}
