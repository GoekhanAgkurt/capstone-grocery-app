import styled from "styled-components";
import Link from "next/link";

const StyledHeadline = styled.h1`
  margin-block: 10px;
  display: inline-block;
  text-decoration: none;
  font-family: var(--fontTitle);
  color: var(--primaryBackgroundColor);
  text-shadow: 1px 1px 4px var(--primaryDarkColor);
`;

export default function Header({ isEdit }) {
  return (
    <header>
      {!isEdit ? (
        <Link href="/">
          <StyledHeadline>Grocery App </StyledHeadline>
        </Link>
      ) : (
        <StyledHeadline>Grocery App </StyledHeadline>
      )}
    </header>
  );
}
