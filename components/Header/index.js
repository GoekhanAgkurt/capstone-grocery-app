import styled from "styled-components";

const StyledHeadline = styled.h1`
  margin-block: 10px;
`;

export default function Header() {
  return (
    <header>
      <StyledHeadline>Grocery App</StyledHeadline>
    </header>
  );
}
