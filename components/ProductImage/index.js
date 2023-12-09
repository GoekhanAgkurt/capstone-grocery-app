import Image from "next/image";
import { useState } from "react";
import defaultImageURL from "@/public/images/defaultImageURL";
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
  object-fit: ${({ $fullView }) => ($fullView ? "contain" : "cover")};
  margin: 0 -15px;
  height: 30vh;
  z-index: 0;
`;

const StyledMessage = styled.span`
  position: absolute;
  bottom: 5px;
  left: 0;
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: var(--primaryBackgroundColor);
  font-size: 12px;
`;

const StyledAcceptedFormatsMessage = styled.p`
  position: absolute;
  transform: translate(-50%);
  width: 100%;
  color: var(--disabledColor);
  text-align: center;
  font-size: 14px;
  bottom: 0;
  left: 50%;
`;

export default function ProductImage({ imageSrc = defaultImageURL }) {
  const [imageFullView, setImageFullView] = useState(false);
  return (
    <StyledImageButton
      type="button"
      onClick={() => setImageFullView(!imageFullView)}
      disabled={imageSrc === defaultImageURL}
    >
      <StyledImage
        $fullView={imageFullView}
        src={imageSrc}
        alt="Product Photo"
        width={1024}
        height={1024}
        priority
      ></StyledImage>
      {imageSrc !== defaultImageURL && (
        <StyledMessage>
          {imageFullView
            ? "Click again to close full view"
            : "Click image to view full view"}
        </StyledMessage>
      )}
      {imageSrc === defaultImageURL && (
        <StyledAcceptedFormatsMessage>
          Accepted image formats: .png, .jpg, .jpeg, .webp
        </StyledAcceptedFormatsMessage>
      )}
    </StyledImageButton>
  );
}
