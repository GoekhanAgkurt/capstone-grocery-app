import StoreList from "@/components/StoreList";
import { StyledCreateLink } from "@/components/Buttons";
import Icon from "@/components/Icons";
import Head from "next/head";

export default function Stores({ stores, onDeleteStore }) {
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
      <StoreList stores={stores} onDeleteStore={onDeleteStore} />
      <StyledCreateLink href="/stores/create">
        <Icon variant="plus" color="var(--primaryButtonColor)" size="30" />
      </StyledCreateLink>
    </main>
  );
}
