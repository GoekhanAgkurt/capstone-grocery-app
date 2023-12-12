import styled from "styled-components";
import Link from "next/link";
import BurgerMenu from "../Burgermenu";
import Head from "next/head";
import Image from "next/image";

const StyledHeadline = styled.h1`
  margin: 0;
`;

const StyledLogo = styled(Image)`
  width: 130px;
  height: auto;
  padding-block: 2px;
`;

export default function Header({ isEdit }) {
  return (
    <>
      <Head>
        <title key="title">My Grocery</title>
        <meta
          name="description"
          content="My Grocery is a shopping list app for groceries with the option of linking created products and stores with each other while also saving and displaying additional information such as locations or product photos."
          key="description"
        />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta property="og:title" content="My Grocery" key="og-title" />
        <meta
          property="og:description"
          content="My Grocery is a shopping list app for groceries with the option of linking created products and stores with each other while also saving and displaying additional information such as locations or product photos."
          key="og-description"
        />
      </Head>
      <header>
        {!isEdit ? (
          <Link href="/">
            <StyledHeadline aria-label="My Grocery">
              <StyledLogo
                src="/images/myGrocery.svg"
                width={300}
                height={300}
                alt="Logo"
              ></StyledLogo>
            </StyledHeadline>
          </Link>
        ) : (
          <StyledHeadline aria-label="My Grocery">
            <StyledLogo
              src="/images/myGrocery.svg"
              width={300}
              height={300}
              alt="Logo"
            ></StyledLogo>
          </StyledHeadline>
        )}
        <BurgerMenu />
      </header>
    </>
  );
}
