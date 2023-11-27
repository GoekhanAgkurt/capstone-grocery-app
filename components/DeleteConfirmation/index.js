import styled from "styled-components";
import { StyledSubmitButton, StyledCancelButton } from "@/components/Buttons";
import { useState } from "react";
import { useRouter } from "next/router";
import Icon from "@/components/Icons";

const StyledDeleteIcon = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 5px;
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    cursor: default;
  }
`;
const StyledDeleteConfirmation = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 5px;
  padding: 5px;
  width: 100%;
`;
const StyledConfirmButton = styled(StyledSubmitButton)`
  width: auto;
  display: flex;
  justify-content: center;
  margin: 0px;
  font-size: 14px;
  padding: 5px 20px;
  background-color: var(--dangerColor);
  &:hover {
    background-color: var(--dangerHoverColor);
  }
`;
const StyledSmallCancelButton = styled(StyledCancelButton)`
  width: auto;
  display: flex;
  justify-content: center;
  margin: 0px;
  font-size: 14px;
  padding: 5px 20px;
`;
const StyledDeleteMessage = styled.span`
  font-size: 18px;

  color: ${({ $disabled }) =>
    $disabled ? "var(--disabledColor)" : "var(--primaryDarkColor)"};
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
        {onDetailsPage && (
          <StyledDeleteMessage $disabled={showConfirmButtons}>
            Delete{" "}
          </StyledDeleteMessage>
        )}
        <Icon
          variant="delete"
          color={
            showConfirmButtons
              ? "var(--disabledColor)"
              : "var(--primaryDarkColor"
          }
        />
      </StyledDeleteIcon>

      {showConfirmButtons && (
        <StyledDeleteConfirmation>
          <span>Confirm Delete</span>
          <StyledSmallCancelButton
            type="button"
            onClick={() => setShowConfirmButtons(false)}
          >
            <Icon variant="cancel" color="var(--primaryButtonColor)" />
            {/* Cancel */}
          </StyledSmallCancelButton>{" "}
          <StyledConfirmButton
            type="button"
            onClick={() => {
              onDetailsPage && router.push("/");
              onDeleteProduct(product._id);
            }}
          >
            <Icon variant="delete" color="var(--primaryButtonColor)" />
            {/* Confirm */}
          </StyledConfirmButton>
        </StyledDeleteConfirmation>
      )}
    </>
  );
}
