import styled from "styled-components";
import { StyledSubmitButton, StyledCancelButton } from "../Buttons";
import { useReducer, useState } from "react";
import Router, { useRouter } from "next/router";

const StyledDeleteIcon = styled.button`
  width: 15%;
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
const StyledSmallCancelButton = styled(StyledCancelButton)`
  width: auto;
  display: flex;
  justify-content: center;
  margin: 0px;
  font-size: 14px;
  padding: 5px 10px;
`;

export default function DeleteConfirmation({
  product,
  onDeleteProduct,
  backToList,
}) {
  const [showConfirmButtons, setShowConfirmButtons] = useState(false);
  const router = useRouter();
  return (
    <>
      <StyledDeleteIcon
        type="button"
        onClick={() => setShowConfirmButtons(true)}
        disabled={showConfirmButtons}
      >
        ✖️
      </StyledDeleteIcon>
      {showConfirmButtons && (
        <StyledDeleteConfirmation>
          <StyledSmallCancelButton
            type="button"
            onClick={() => setShowConfirmButtons(false)}
          >
            Cancel
          </StyledSmallCancelButton>{" "}
          <StyledConfirmButton
            type="button"
            onClick={() => {
              backToList && router.push("/");
              onDeleteProduct(product._id);
            }}
          >
            Confirm
          </StyledConfirmButton>
        </StyledDeleteConfirmation>
      )}
    </>
  );
}
