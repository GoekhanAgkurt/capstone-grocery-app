import styled from "styled-components";
export default function CheckProductFromShoppingList({ shoppingListProduct }) {
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
          checked={shoppingListProduct.checkedProduct}
          onChange={() => ({
            ...shoppingListProduct,
            checkedProduct: !shoppingListProduct.checkedProduct,
          })}
        />
      </StyledInput>
    </>
  );
}
