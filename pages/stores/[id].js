import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import {
  StyledCancelButton,
  StyledButtonContainer,
} from "@/components/Buttons";
import Icon from "@/components/Icons";
import DeleteConfirmation from "@/components/DeleteConfirmation";

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
  background-color: var(--secondaryBackgroundColor);
  padding: 10px;
  margin-block: 7px 20px;
  border-radius: 5px;
`;

const StyledDetailTitle = styled.h3`
  margin-block: 0px 0px;
`;

export default function StoreDetailsPage({ stores, onDeleteStore }) {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;

  const store = stores.find((store) => store._id === id);
  if (!store) return <h2>store not found</h2>;
  if (!isReady) return <h2>is Loading</h2>;

  return (
    <main>
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
      </StyledButtonContainer>
    </main>
  );
}
