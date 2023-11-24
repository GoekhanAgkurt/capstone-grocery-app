import styled from "styled-components";
import { StyledSubmitButton, StyledCancelButton } from "@/components/Buttons";
import { useState } from "react";
import { useRouter } from "next/router";

const StyledDeleteIcon = styled.button`
  width: ${({ $onDetailsPage }) => ($onDetailsPage ? "25%" : "15%")};
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
const StyledDeleteMessage = styled.span`
  font-size: 18px;
  color: var(--primaryDarkColor);
`;

export default function DeleteConfirmation({
  product,
  onDeleteProduct,
  onDetailsPage,
}) {
  const [showConfirmButtons, setShowConfirmButtons] = useState(false);
  const router = useRouter();
  return (
    <>
      <StyledDeleteIcon
        $onDetailsPage={onDetailsPage}
        type="button"
        onClick={() => setShowConfirmButtons(true)}
        disabled={showConfirmButtons}
      >
        {onDetailsPage && <StyledDeleteMessage>Delete </StyledDeleteMessage>}🗑️
      </StyledDeleteIcon>
      {showConfirmButtons && (
        <StyledDeleteConfirmation>
          <span>Are you sure to delete?</span>
          <StyledSmallCancelButton
            type="button"
            onClick={() => setShowConfirmButtons(false)}
          >
            Cancel
          </StyledSmallCancelButton>{" "}
          <StyledConfirmButton
            type="button"
            onClick={() => {
              onDetailsPage && router.push("/");
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
