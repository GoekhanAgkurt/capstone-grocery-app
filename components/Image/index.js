import Image from "next/image";
import styled from "styled-components";
import theScrumMethod from "@/public/images/theScrumMethod.png";
export default function ScrumImage({ src, width, height }) {
  const StyledDiv = styled.div`
    padding-bottom: min(350px, ${100 / (width / height)}%);
  `;
  return (
    <StyledDiv className={`next-image-wrapper`}>
      <Image
        className="next-image"
        alt="the scrum method"
        src={theScrumMethod}
        layout="fill"
        objectFit="contain"
      />
    </StyledDiv>
  );
}
