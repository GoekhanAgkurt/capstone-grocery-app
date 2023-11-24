import styled from "styled-components";

const StyledListItem = styled.li`
  margin-block: 7px;
  width: 100%;
  background-color: var(--secondaryBackgroundColor);
  border-radius: 5px;
  box-shadow: 0px 1px 3px var(--primaryDarkColor);
`;

const StyledCard = styled.section`
  display: inline-block;

  width: 85%;
  padding: 10px;
  text-decoration: none;
  color: var(--primaryDarkColor);
`;

export default function StoreListItem({ store }) {
  return (
    <StyledListItem>
      <StyledCard>{store.name}</StyledCard>
    </StyledListItem>
  );
}
