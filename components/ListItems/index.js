import styled from "styled-components";

export const StyledTitleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-block: 20px;
`;

export const StyledTitle = styled.h2`
  width: 75%;
  margin: 0px;
`;

export const StyledListItem = styled.li`
  margin-block: 7px;
  width: 100%;
  background-color: var(--secondaryBackgroundColor);
  border-left: ${({ $onShoppingList }) =>
    $onShoppingList && "5px solid var(--accentColor)"};
  border-radius: 5px;
  box-shadow: 0px 1px 2px var(--shadowColor);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  &:hover {
    box-shadow: 0px 2px 3px var(--shadowColor);
    background-color: ${({ $onShoppingList }) =>
      $onShoppingList
        ? "var(--tertiaryBackgroundColor)"
        : "var(--primaryBackgroundColor)"};
  }
`;
