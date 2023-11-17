import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import { StyledSubmitButton, StyledCancelLink } from "../Buttons";

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
const StyledDeleteIcon = styled.button`
  width: 15%;
  padding-block: 10px;
  border: none;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;
const StyledDeleteConfirmation = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 5px;
  padding: 5px;
`;
const StyledConfirmButton = styled(StyledSubmitButton)`
  width: auto;
  display: flex;
  justify-content: center;
  margin: 0px;
  font-size: 14px;
  padding: 5px 10px;
  background-color: var(--deleteColor);
  &:hover {
    background-color: darkred;
  }
`;
const StyledCancelButton = styled(StyledCancelLink)`
  width: auto;
  display: flex;
  justify-content: center;
  margin: 0px;
  font-size: 14px;
  padding: 5px 10px;
`;

export default function ProductListItem({ product, onDeleteProduct }) {
  const [showConfirmButtons, setShowConfirmButtons] = useState(false);
  console.log("product id in product list:", product._id);
  return (
    <StyledListItem>
      <StyledLink href={`/products/${product._id}`}>{product.name} </StyledLink>
      <StyledDeleteIcon
        type="button"
        onClick={() => setShowConfirmButtons(true)}
        disabled={showConfirmButtons}
      >
        ✖️
      </StyledDeleteIcon>
      {showConfirmButtons && (
        <StyledDeleteConfirmation>
          <StyledCancelButton
            type="button"
            onClick={() => setShowConfirmButtons(false)}
          >
            Cancel
          </StyledCancelButton>{" "}
          <StyledConfirmButton
            type="button"
            onClick={() => onDeleteProduct(product._id)}
          >
            Confirm
          </StyledConfirmButton>
        </StyledDeleteConfirmation>
      )}
    </StyledListItem>
  );
}
