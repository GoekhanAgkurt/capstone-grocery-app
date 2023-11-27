import styled from "styled-components";
import Link from "next/link";
import DeleteConfirmation from "@/components/DeleteConfirmation";

const StyledListItem = styled.li`
  margin-block: 7px;
  width: 100%;
  background-color: var(--secondaryBackgroundColor);
  border-radius: 5px;
  box-shadow: 0px 1px 3px var(--primaryDarkColor);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  flex-grow: 1;
  width: auto;
  padding: 10px;
  text-decoration: none;
  color: var(--primaryDarkColor);
  &:hover {
    cursor: pointer;
  }
`;

export default function ProductListItem({ product, onDeleteProduct }) {
  return (
    <StyledListItem>
      <StyledLink href={`/products/${product._id}`}>{product.name} </StyledLink>
      <DeleteConfirmation product={product} onDeleteProduct={onDeleteProduct} />
    </StyledListItem>
  );
}
