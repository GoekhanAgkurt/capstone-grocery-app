import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledImageButton = styled.button`
  all: unset;
  position: relative;
  width: calc(100% + 30px);
  height: auto;
  object-fit: cover;
  margin: 0 -15px;
  &:hover:enabled {
    cursor: pointer;
  }
`;

const StyledImage = styled(Image)`
  width: calc(100% + 30px);
  object-fit: cover;
  margin: 0 -15px;
  height: ${({ $fullView }) => ($fullView ? "auto" : "30vh")};
  z-index: 0;
`;

const StyledMessage = styled.span`
  position: absolute;
  bottom: 5px;
  left: 0;
  padding: 5px 10px;
  background-color: darkgrey;
  color: var(--primaryBackgroundColor);
  font-size: 14px;
`;

export default function ProductImage({
  imageSrc = "/images/default-image.png",
  disabled,
}) {
  const [imageFullView, setImageFullView] = useState(false);
  useEffect(() => {
    if (disabled) setImageFullView(false);
  }, [disabled]);
  return (
    <StyledImageButton
      onClick={() => setImageFullView(!imageFullView)}
      disabled={disabled}
    >
      <StyledImage
        $fullView={imageFullView}
        src={imageSrc}
        alt="Product Photo"
        width={1024}
        height={1024}
      ></StyledImage>
      {imageFullView && (
        <StyledMessage>To close full image view tap again</StyledMessage>
      )}
    </StyledImageButton>
  );
}
