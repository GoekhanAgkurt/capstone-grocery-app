import styled from "styled-components";
import Link from "next/link";

const StyledProductListItem = styled.li`
  width: 100%;
  background-color: var(--secondaryBackgroundColor);
  padding: 10px;
  margin-block: 7px;
  border-radius: 5px;
  box-shadow: 0px 1px 3px var(--primaryFontColor);
`;

export default function ProductListItem({ product }) {
  return (
    <StyledProductListItem>
      <Link href={`/products/${product._id}`}>{product.name}</Link>
    </StyledProductListItem>
  );
}
