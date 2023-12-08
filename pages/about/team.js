import Image from "next/image";
import styled from "styled-components";

const StyledMain = styled.main`
  padding-inline-end: 0;
`;

const StyledSection = styled.section`
  display: flex;
  overflow: auto;
  gap: 20px;
  height: auto;
`;

const StyledArticle = styled.article`
  width: 78%;
  text-align: center;
  padding: 20px;
  background-color: #d9d9d9;
  border-radius: 5px;
`;

const StyledImage = styled(Image)`
  border-radius: 80%;
  width: 150px;
  height: 150px;
`;

export default function Team() {
  return (
    <StyledMain>
      <section>
        <h2>Team</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut sed diam voluptua.
        </p>
      </section>

      <StyledSection>
        <StyledArticle>
          <StyledImage
            src="https://avatars.githubusercontent.com/u/134974986?s=400&u=3ceb33fd1cf234d959ac32a417aeacdcbc1bbcfd&v=4"
            alt="picture"
            width={250}
            height={250}
          />

          <h3>Max Mustermann</h3>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor em ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua.invidunt ed diam voluptua.
          </p>
        </StyledArticle>

        <StyledArticle>
          <StyledImage
            src="https://avatars.githubusercontent.com/u/134974986?s=400&u=3ceb33fd1cf234d959ac32a417aeacdcbc1bbcfd&v=4"
            alt="picture"
            width={250}
            height={250}
          />

          <h3>Max Mustermann</h3>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </StyledArticle>

        <StyledArticle>
          <StyledImage
            src="https://avatars.githubusercontent.com/u/134974986?s=400&u=3ceb33fd1cf234d959ac32a417aeacdcbc1bbcfd&v=4"
            alt="picture"
            width={250}
            height={250}
          />

          <h3>Max Mustermann</h3>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </StyledArticle>
      </StyledSection>
    </StyledMain>
  );
}
