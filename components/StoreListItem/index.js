import styled from "styled-components";
import Link from "next/link";
import { StyledListItem } from "@/components/ListItems";
import DeleteConfirmation from "@/components/DeleteConfirmation";

const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  padding: 10px;
  color: var(--primaryDarkColor);
  &:hover {
    cursor: pointer;
  }
  width: 85%;
`;

export default function StoreListItem({ store, onDeleteStore, mutateStores }) {
  return (
    <StyledListItem>
      <StyledLink href={`/stores/${store._id}`}>{store.name}</StyledLink>
      <DeleteConfirmation
        store={store}
        onDeleteStore={onDeleteStore}
        mutate={mutateStores}
      />
    </StyledListItem>
  );
}
