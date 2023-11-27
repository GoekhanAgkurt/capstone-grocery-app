import styled from "styled-components";

export const StyledListItem = styled.li`
  margin-block: 7px;
  width: 100%;
  background-color: var(--secondaryBackgroundColor);
  border-radius: 5px;
  box-shadow: 0px 1px 2px var(--shadowColor);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  &:hover {
    box-shadow: 0px 2px 3px var(--shadowColor);
    background-color: var(--primaryBackgroundColor);
  }
`;
