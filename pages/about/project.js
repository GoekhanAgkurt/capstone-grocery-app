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

const StyledTools = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const StyledTool = styled.a`
  border: 2px solid var(--accentColor);
  background-color: var(--accentColor);
  border-radius: 5px;
  display: inline-block;
  width: 100%;
  padding: 7px 10px;
  text-decoration: none;
  color: var(--primaryBackgroundColor);
  &:hover {
    background-color: transparent;
    color: var(--accentColor);
  }
`;

const tools = [
  { name: "React", url: "https://react.dev/" },
  { name: "Next.js", url: "https://nextjs.org/" },
  { name: "styled-components", url: "https://styled-components.com/" },
  { name: "Node.js", url: "https://nodejs.org/en" },
  { name: "SWR", url: "https://swr.vercel.app/" },
  {
    name: "useLocalStorageState",
    url: "https://github.com/astoilkov/use-local-storage-state",
  },
  { name: "Vercel", url: "https://vercel.com/" },
  { name: "MongoDB", url: "https://www.mongodb.com/" },
  { name: "Mongoose", url: "https://mongoosejs.com/" },
  { name: "Cloudinary", url: "https://cloudinary.com/" },
  { name: "Leaflet", url: "https://leafletjs.com/" },
  {
    name: "OpenStreetMap API",
    url: "https://wiki.openstreetmap.org/wiki/API",
  },
  { name: "Lottie for React", url: "https://lottiereact.com/" },
];

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
      <h2>The Capstone Project</h2>
      <h3>The Grocery App</h3>
      <p>
        My Groceries was developed in the course of the capstone project that is
        the final project of the 3 months full time web-development bootcamp
        from {""}
        <StyledAnchor
          href="https://www.neuefische.de/bootcamp/web-development#kursinhalte"
          target="_blank"
          rel="noopener noreferrer"
        >
          neueFische
        </StyledAnchor>
        .
      </p>
      <p>
        The App enables the user to better organize their next shopping trip.
        Particularly if it involves going to several shops or supermarkets to
        get all the needed grocery-items.
      </p>
      <p>
        The user can decide, in which of the created stores he / she wants {"("}
        or can{")"} buy the products, that he / she created in the app. When the
        products are then put on the shopping list, the user can click on a
        product to see, where he / she needs to go, to get this product.
      </p>

      <h3>Technologies and Tools</h3>
      <StyledTools>
        {tools.map((tool) => (
          <li key={tool.name}>
            <StyledTool
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {tool.name}
            </StyledTool>
          </li>
        ))}
      </StyledTools>

      <h3>The Project phase</h3>
      <p>
        This App got developed by rigorously following the {` "SCRUM"`} agile
        workflow.
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
