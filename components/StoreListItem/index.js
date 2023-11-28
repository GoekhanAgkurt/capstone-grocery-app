import styled from "styled-components";
import Link from "next/link";
import { StyledListItem } from "@/components/ListItems";
import DeleteConfirmation from "@/components/DeleteConfirmation";

const StyledLink = styled(Link)`
  display: inline-block;
  width: 85%;
  padding: 10px;
  text-decoration: none;
  color: var(--primaryDarkColor);
  &:hover {
    cursor: pointer;
  }
`;

export default function StoreListItem({ store, onDeleteStore }) {
  return (
    <StyledListItem>
      <StyledLink href={`/stores/${store._id}`}>{store.name}</StyledLink>
      <DeleteConfirmation store={store} onDeleteStore={onDeleteStore} />
    </StyledListItem>
  );
}
