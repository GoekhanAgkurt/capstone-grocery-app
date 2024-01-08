import Head from "next/head";
import StoreList from "@/components/StoreList";
import Icon from "@/components/Icons";
import { StyledCreateLink } from "@/components/Buttons";

export default function Stores() {
  return (
    <main>
      <Head>
        <title key="title">My Grocery | Stores</title>
        <meta
          property="og:title"
          content="My Grocery | Stores"
          key="og-title"
        />
      </Head>
      <StoreList />
      <StyledCreateLink href="/stores/create">
        <Icon variant="plus" color="var(--primaryButtonColor)" size="30" />
      </StyledCreateLink>
    </main>
  );
}
