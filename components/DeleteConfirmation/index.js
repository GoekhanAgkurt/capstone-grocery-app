import styled from "styled-components";
import {
  StyledSubmitButton,
  StyledCancelButton,
  StyledIconButton as StyledDeleteButton,
} from "@/components/Buttons";
import { useState } from "react";
import { useRouter } from "next/router";
import Icon from "@/components/Icons";
import { deleteStore } from "@/utils/storesUtils";
import { deleteProduct } from "@/utils/productUtils";

const StyledDeleteConfirmation = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 5px;
  padding: 5px;
  width: 100%;
`;
const StyledDeleteWarningMessage = styled(StyledDeleteConfirmation)`
  color: var(--dangerColor);
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
  products,
  product,
  store,
  mutate,
  onDetailsPage,
  onShoppingListPage,
  onClearAllCheckedProducts,
}) {
  const [showConfirmButtons, setShowConfirmButtons] = useState(false);
  const router = useRouter();

  const productIsChecked = products
    ? !products.find((product) => product.checkedProduct === true)
    : false;

  async function deleteOnConfirm() {
    store && (await deleteStore(store._id));
    product && (await deleteProduct(product._id));
    if (onShoppingListPage) {
      onClearAllCheckedProducts();
      setShowConfirmButtons(false);
    }
    if (onDetailsPage) {
      store ? router.push("/stores") : router.push("/");
    } else {
      mutate();
    }
  }
  return (
    <>
      <StyledDeleteButton
        $onDetailsPage={onDetailsPage}
        type="button"
        onClick={() => setShowConfirmButtons(true)}
        disabled={
          showConfirmButtons || (onShoppingListPage && productIsChecked)
        }
      >
        {onDetailsPage && (
          <StyledDeleteMessage $disabled={showConfirmButtons}>
            Delete{" "}
          </StyledDeleteMessage>
        )}
        {onShoppingListPage && (
          <StyledDeleteMessage
            $disabled={showConfirmButtons || productIsChecked}
          >
            Clear all checked{" "}
          </StyledDeleteMessage>
        )}
        <Icon
          variant="delete"
          color={
            showConfirmButtons || (onShoppingListPage && productIsChecked)
              ? "var(--disabledColor)"
              : "var(--primaryDarkColor"
          }
        />
      </StyledDeleteButton>

      {showConfirmButtons && (
        <>
          {store && (
            <StyledDeleteWarningMessage>
              <Icon variant="warning" color="var(--dangerColor)" size="25" />
              <span>Connected products will also lose this store</span>
            </StyledDeleteWarningMessage>
          )}
          <StyledDeleteConfirmation>
            {onShoppingListPage ? (
              <span>Confirm clear all checked</span>
            ) : (
              <span>Confirm Delete</span>
            )}
            <StyledSmallCancelButton
              type="button"
              onClick={() => setShowConfirmButtons(false)}
            >
              <Icon variant="cancel" color="var(--primaryButtonColor)" />
            </StyledSmallCancelButton>{" "}
            <StyledConfirmButton
              type="button"
              onClick={() => deleteOnConfirm()}
            >
              <Icon variant="delete" color="var(--primaryButtonColor)" />
            </StyledConfirmButton>
          </StyledDeleteConfirmation>
        </>
      )}
    </>
  );
}
