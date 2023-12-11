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
        Yes, My Grocery was the final project of the{" "}
        <StyledAnchor
          href="https://www.neuefische.de/bootcamp/web-development#kursinhalte"
          target="_blank"
          rel="noopener noreferrer"
        >
          neueFische
        </StyledAnchor>{" "}
        web development bootcamp. But does this mean we{"'"}re done with it?
        Maybe. But all three of us are just at the start of our careers as web
        developers and there is a lot to learn, try out and get into. So why not
        writing some more user stories, building some Figma wireframes and
        creating and reviewing more PR{"'"}s? In any case, we certainly have
        enough ideas on how to further improve the app.
      </p>
      <h2>Ideas for Future Features</h2>
      <h3>Filter and Sort the Shopping List</h3>
      <p>
        The next and most important step is to implement a way to filter and
        sort the shopping list by the relevant stores. The user then can either
        only display products, he plans to buy in a certain store. Or he can
        sort the shopping list by the stores, so the products on the shopping
        list are displayed in groups of stores. <br /> This way, the user can
        more easily get an overview about to which stores he has to go, to get
        all his products {"(and also how many products he plans to buy there)"}.{" "}
        <br /> At the moment, a product can only be connected to one store. But
        in the future we want the users to be able to connect a product to
        multiple stores. Then a user can decide to skip a store, when he / she
        sees in his sorted shopping-list, that he / she can also buy the product
        in the store, he has to go to for other products, anyway. This way, a
        shopping trip will be even more efficient.
      </p>
      <h3>Map Overview on Shopping List Page</h3>A map on the shopping list,
      that displays the location of all the stores the user has to go to for his
      grocery trip, would enable the use to better plan his shopping trip{" "}
      {
        "(the best route, estimated time for the entire trip, most efficient order of store visits, etc.)"
      }
      .<h3>User Authentication</h3>
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
        this shouldn{"'"}t take more than a day or two.
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
      When user authentication is implemented, the user can share his shopping
      list with friends / family. This shared shopping list gets updated from
      every user that the list is shared with. This way, a household can for
      example use a common shopping list. They also can access the same created
      products and stores.
    </main>
  );
}
