import Image from "next/image";
import styled from "styled-components";
import theScrumMethod from "@/public/images/theScrumMethod.png";

const StyledImageDiv = styled.div`
  position: relative;
  background-color: red;
  width: 100%;
  height: calc(100vw / 2.435);
  max-height: 260px;
`;
export default function Project() {
  return (
    <main>
      <h1>The Capstone Project</h1>

      <h2>The Grocery App</h2>
      <p>
        The Grocery App was developed in the course of the capstone project,
        that is the final project of the 3 months full time web-development
        bootcamp from {""}
        <a
          href="https://www.neuefische.de/bootcamp/web-development#kursinhalte"
          target="_blank"
          rel="noopener noreferrer"
        >
          neueFische
        </a>
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
        <Image
          src={theScrumMethod}
          alt="image of the scrum-method"
          layout="fill"
          objectFit="fill"
        />
      </StyledImageDiv>
    </main>
  );
}
