import styled from "styled-components";
import Link from "next/link";
import DeleteConfirmation from "@/components/DeleteConfirmation";
import { StyledListItem } from "@/components/ListItems";

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
