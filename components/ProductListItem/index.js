import styled from "styled-components";
import Link from "next/link";

const StyledProductListItem = styled.li`
  width: 100%;
  background-color: var(--secondaryBackgroundColor);
  padding: 10px;
  margin-block: 7px;
  border-radius: 5px;
  box-shadow: 0px 1px 3px var(--primaryDarkColor);
  &:hover {
    cursor: pointer;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--primaryDarkColor);
`;

export default function ProductListItem({ product }) {
  return (
    <StyledProductListItem>
      <StyledLink href={`/products/${product._id}`}>{product.name}</StyledLink>
    </StyledProductListItem>
  );
}
