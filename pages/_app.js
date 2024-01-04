import { useState } from "react";
import { SWRConfig } from "swr";
import { SessionProvider } from "next-auth/react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import GlobalStyle from "@/styles";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }
  return response.json();
};

export default function App({ Component, pageProps }) {
  const [isEdit, setIsEdit] = useState(false);
  function handleSetIsEdit() {
    setIsEdit(!isEdit);
  }

  return (
    <SessionProvider session={pageProps.session}>
      <GlobalStyle />
      <Header isEdit={isEdit} />
      <SWRConfig value={{ fetcher }}>
        <Component
          {...pageProps}
          isEdit={isEdit}
          onSetIsEdit={handleSetIsEdit}
        />
      </SWRConfig>
      <Navigation isEdit={isEdit} />
    </SessionProvider>
  );
}
