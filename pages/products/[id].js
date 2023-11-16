import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const StyledParagraph = styled.p`
  width: 100%;
  background-color: var(--secondaryBackgroundColor);
  padding: 10px;
  margin-block: 7px;
  border-radius: 5px;
  // margin-top: -15px;
`;

const StyledH3 = styled.h3`
  margin-block: 20px 0px;
`;

const StyledLinkButton = styled.div`
  padding: 10px 40px;
  background-color: var(--primaryDarkColor);
  color: white;
  text-decoration: none;
  margin-top: 40px;
  border-radius: 5px;
  display: inline-block;
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
  console.log(product);
  return (
    <main>
      <h2>Product Details</h2>
      <StyledH3>Name</StyledH3>
      <StyledParagraph>{product.name}</StyledParagraph>
      <StyledH3>Note</StyledH3>
      <StyledParagraph>{product.note}</StyledParagraph>
      <Link href="/">
        <StyledLinkButton> Back to List</StyledLinkButton>
      </Link>
    </main>
  );
}
