import styled from "styled-components";
import Link from "next/link";

const StyledLink = styled(Link)`
  display: inline-block;
  margin-block: 7px;
  width: 100%;
  padding: 10px;
  text-decoration: none;
  border-radius: 5px;
  color: var(--primaryDarkColor);
  background-color: var(--secondaryBackgroundColor);
  box-shadow: 0px 1px 3px var(--primaryDarkColor);
  &:hover {
    cursor: pointer;
  }
`;

export default function ProductListItem({ product }) {
  return (
    <li>
      <StyledLink href={`/products/${product._id}`}>{product.name}</StyledLink>
    </li>
  );
}
