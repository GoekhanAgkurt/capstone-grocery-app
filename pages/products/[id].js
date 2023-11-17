import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const StyledDetailField = styled.p`
  width: 100%;
  background-color: var(--secondaryBackgroundColor);
  padding: 10px;
  margin-block: 7px;
  border-radius: 5px;
`;

const StyledDetailTitle = styled.h3`
  margin-block: 20px 0px;
`;

const StyledLinkButton = styled(Link)`
  display: inline-block;
  padding: 10px 40px;
  background-color: var(--primaryDarkColor);
  color: white;
  text-decoration: none;
  margin-top: 40px;
  border-radius: 5px;
  box-shadow: 0px 1px 3px var(--primaryDarkColor);
  &:hover {
    color: var(--accentColor);
    background-color: black;
    cursor: pointer;
  }
`;

export default function ProductDetailsPage({ products }) {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const product = products.find((product) => product._id === id);
  if (!isReady) return <h2>is Loading</h2>;
  return (
    <main>
      <h2>Product Details</h2>
      <StyledDetailTitle>Name</StyledDetailTitle>
      <StyledDetailField>{product.name}</StyledDetailField>
      <StyledDetailTitle>Note</StyledDetailTitle>
      <StyledDetailField>{product.note}</StyledDetailField>
      <StyledLinkButton href="/"> Back to List</StyledLinkButton>
    </main>
  );
}
