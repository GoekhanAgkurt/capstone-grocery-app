import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import {
  StyledSubmitButton,
  StyledCancelButton,
  StyledButtonContainer,
} from "@/components/Buttons";
import Icon from "@/components/Icons";
import DeleteConfirmation from "@/components/DeleteConfirmation";
import StoreForm from "@/components/Forms/StoreForm";
import Head from "next/head";

const StyledTitleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-block: 20px;
`;

const StyledTitle = styled.h2`
  width: 75%;
  margin: 0px;
`;

const StyledDetailField = styled.p`
  width: 100%;
  background-color: transparent;
  padding: 10px 0;
  margin-block: 7px 20px;
  border-radius: 5px;
`;

const StyledDetailTitle = styled.h3`
  margin-block: 0px 0px;
`;

export default function StoreDetailsPage({
  stores,
  isEdit,
  onEditStore,
  onDeleteStore,
  onSetIsEdit,
}) {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;

  const store = stores.find((store) => store._id === id);
  if (!store) return <h2>store not found</h2>;
  if (!isReady) return <h2>is Loading</h2>;

  function editStore(editedStore) {
    onEditStore(editedStore);
    onSetIsEdit();
  }

  return (
    <main>
      <Head>
        <title key="title">My Groceries | {store.name}</title>
        <meta
          property="og:title"
          content={`My Groceries | ${store.name}`}
          key="og-title"
        />
      </Head>
      {!isEdit ? (
        <>
          <StyledTitleContainer>
            <StyledTitle>{store.name}</StyledTitle>
            <DeleteConfirmation
              store={store}
              onDeleteStore={onDeleteStore}
              onDetailsPage
            />
          </StyledTitleContainer>
          <StyledDetailTitle>Note</StyledDetailTitle>
          <StyledDetailField>
            {store.note ? store.note : "No note"}
          </StyledDetailField>
          <StyledButtonContainer>
            <StyledCancelButton as={Link} href="/stores">
              <Icon variant="arrowBack" color="var(--primaryButtonColor" />
              All stores
            </StyledCancelButton>
            <StyledSubmitButton onClick={() => onSetIsEdit()}>
              <Icon variant="edit" color="var(--primaryButtonColor" />
              Edit
            </StyledSubmitButton>
          </StyledButtonContainer>
        </>
      ) : (
        <StoreForm
          store={store}
          onSubmit={editStore}
          onSetIsEdit={onSetIsEdit}
        />
      )}
    </main>
  );
}
