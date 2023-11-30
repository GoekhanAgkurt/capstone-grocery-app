import styled from "styled-components";
export default function CheckProductFromShoppingList({
  shoppingListProduct,
  checkProduct,
}) {
  const StyledInput = styled.div`
    padding: 0 15px;
    display: flex;
    justify-content: center;
  `;

  return (
    <>
      <StyledInput>
        <input
          type="checkbox"
          id={shoppingListProduct._id}
          checked={shoppingListProduct.checkedProduct ? true : false}
          onChange={() => checkProduct(shoppingListProduct)}
        />
      </StyledInput>
    </>
  );
}
