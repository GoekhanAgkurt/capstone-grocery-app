import Head from "next/head";
import styled from "styled-components";

const StyledAnchor = styled.a`
  text-decoration: none;
  font-family: var(--fontItalic);
  color: var(--primaryDarkColor);
  &:hover {
    text-decoration: underline;
  }
`;

export default function WhatsNext() {
  return (
    <main>
      <Head>
        <title key="title">My Grocery | What{"'"}s Next?</title>
        <meta
          property="og:title"
          content="My Grocery | What's next?"
          key="og-title"
        />
      </Head>
      <h2>What{"'"}s Next? </h2>
      <p>
        Yes, My Grocery was a final project of the{" "}
        <StyledAnchor
          href="https://www.neuefische.de/bootcamp/web-development#kursinhalte"
          target="_blank"
          rel="noopener noreferrer"
        >
          neueFische
        </StyledAnchor>{" "}
        web-development bootcamp. But does this mean we{"'"}re done with it?
        Maybe. But all three of us are just at the start of our career as a web
        developer and there is a lot to try and get into. So why not writing
        some more user stories, building some Figma wireframes and creating and
        reviewing more PR{"'"}s? In any case, we certainly have enough ideas.
      </p>
      <h2>Ideas</h2>
      <h3>Store Filter</h3>
      The next and most important step is to implement a way to filter the
      shopping list for the stores where shopping is required. At the moment,
      there can be only one store connected to each product but in the future we
      want the users to be able to link a product to multiple supermarkets so
      planning of a shopping trip will be even more efficient - with a good
      algorithm of course.
      <h3>Map Overview on Shopping List Page</h3>
      We think that it would be a huge value for a user to only see the markets
      they need to go to for those items that are currently in the shopping
      list.
      <h3>User Authentication</h3>
      <p>
        Since we now connected the app with a MongoDB, one of the next obvious
        steps would be a user login. Luckily this is a Next.js app and with the
        help of{" "}
        <StyledAnchor
          href="https://next-auth.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          NextAuth.js
        </StyledAnchor>{" "}
        this shouldn{"'"}t take more than a day to do.
      </p>
      <h3>Product Counter</h3>
      <p>
        Why not show how many products are currently on the shopping list? Most
        times it{"'"}s better to know how much time you spend in supermarkets
        and not get too frustrated, right?
      </p>
      <h3>Dark Mode</h3>
      <p>Every app needs a dark mode.</p>
      <h3>Shared Shopping List</h3>
      When user authentication is possible
    </main>
  );
}
