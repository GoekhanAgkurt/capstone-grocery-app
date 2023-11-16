import { createGlobalStyle } from "styled-components";
import { Open_Sans } from "next/font/google";
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});
const openSansBold = Open_Sans({
  subsets: ["latin"],
  weight: "600",
  style: "normal",
});
export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  :root{
    --primaryBackgroundColor: #ECE8E8;
    --secondaryBackgroundColor: #D6D2D2;

    --primaryDarkColor: #474747;
    --accentColor: #73A76A;
    --fontRegular: ${openSans.style.fontFamily};
    --fontBold: ${openSansBold.style.fontFamily};
  }


  body {
    margin: 0;
    font-family: var(--fontRegular);
    background-color: #575757;
    display: flex;
    justify-content: center; 
  }
  
  #__next {
    height: 100vh;
    display: grid;
    grid-template-areas:
    "header"
    "main";
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    width: 100%;
    max-width: 600px;
    background-color: var(--primaryBackgroundColor);
  }
  header {
    grid-area: header;
    padding-inline: 15px;
    color: var(--accentColor);
    
    background-color: var(--secondaryBackgroundColor);
    width: 100%;
     }
  main {
    grid-area: main;
    overflow: auto;
    padding-inline: 15px;
    color: var(--primaryDarkColor);
  }
  h1, h2, h3 {
    font-family: var(--fontBold);
  }
  ul {
    list-style-type: none;
    padding: 0px;
  }
  `;
