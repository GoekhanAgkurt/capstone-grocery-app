import styled from "styled-components";
import Link from "next/link";
const StyledListItem = styled.li`
  margin-block: 7px;
  width: 100%;
  background-color: var(--secondaryBackgroundColor);
  border-radius: 5px;
  box-shadow: 0px 1px 3px var(--primaryDarkColor);
`;

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

export default function StoreListItem({ store }) {
  return (
    <StyledListItem>
      <StyledLink href={`/stores/${store._id}`}>{store.name}</StyledLink>
    </StyledListItem>
  );
}
