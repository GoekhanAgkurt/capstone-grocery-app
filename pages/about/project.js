import Image from "next/image";
import styled from "styled-components";
import theScrumMethod from "@/public/images/theScrumMethod.png";
import Head from "next/head";

const StyledImageDiv = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vw / 2.435);
  max-height: 260px;
`;

const StyledAnchor = styled.a`
  text-decoration: none;
  font-family: var(--fontItalic);
  color: var(--primaryDarkColor);
  &:hover {
    text-decoration: underline;
  }
`;

const StyledImage = styled(Image)`
  object-fit: fill;
`;
export default function Project() {
  return (
    <main>
      <Head>
        <title key="title">My Groceries | Project</title>
        <meta
          property="og:title"
          content="My Groceries | Project"
          key="og-title"
        />
      </Head>
      <h1>The Capstone Project</h1>

      <h2>The Grocery App</h2>
      <p>
        The Grocery App was developed in the course of the capstone project,
        that is the final project of the 3 months full time web-development
        bootcamp from {""}
        <StyledAnchor
          href="https://www.neuefische.de/bootcamp/web-development#kursinhalte"
          target="_blank"
          rel="noopener noreferrer"
        >
          neueFische
        </StyledAnchor>
      </p>
      <p>
        The App enables the user, to better organize his / her next shopping
        trip. Particularly if it involves going to several shops or supermarkets
        to get all the needed grocery-items.
      </p>
      <p>
        The user can decide, in witch of the created stores he / she wants {"("}
        or can{")"} buy the products, that he / she created in the app. When the
        products are then put on the shopping list, the user can click on a
        product to see, where he / she needs to go, to get this product.
      </p>

      <h2>The Project phase</h2>

      <p>
        This App got developed by rigorously following the {` "SCRUM"`} agile
        workflow method.
      </p>
      <StyledImageDiv>
        <StyledImage
          src={theScrumMethod}
          alt="image of the scrum-method"
          fill
          priority
        />
      </StyledImageDiv>
    </main>
  );
}
