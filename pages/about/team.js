import Icon from "@/components/Icons";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const StyledSection = styled.section`
  display: flex;
  overflow: auto;
  margin-inline: -15px;
  margin-block: 30px;
`;

const StyledArticle = styled.article`
  min-width: 300px;
  text-align: center;
  padding: 20px;
  background-color: #d9d9d9;
  margin-inline: 15px;
  border-top: 5px solid var(--accentColor);
`;

const StyledImage = styled(Image)`
  border-radius: 80%;
  width: 150px;
  height: 150px;
`;

const StyledSocialsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const StyledIcon = styled(Icon)`
  &:hover {
    cursor: pointer;
    opacity: 70%;
  }
`;

export default function Team() {
  return (
    <main>
      <section>
        <h2>Team</h2>
        <p>
          Lorem ipsum dolor sit ame amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor, consetetur sadipscing elitr, sed diam nonumy
          eirmod tempor invidunt voluptua.
        </p>
      </section>

      <StyledSection>
        <StyledArticle>
          <StyledImage
            src="https://avatars.githubusercontent.com/u/136329211?v=4"
            alt="picture"
            width={250}
            height={250}
          />

          <h3>Lüder Budde </h3>
          <StyledSocialsContainer>
            <Link
              href="https://www.linkedin.com/in/luederbudde/"
              target="_blank"
            >
              <StyledIcon variant="linkedIn" />
            </Link>
            <Link href="https://github.com/luederb" target="_blank">
              <StyledIcon variant="gitHub" />
            </Link>
          </StyledSocialsContainer>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy em ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy eirmod tempor em ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam eirmod tempor invidunt ut labore , sed
            diam voluptua.invidunt ed diam voluptuaem ipsum dolor sit amet.
          </p>
        </StyledArticle>

        <StyledArticle>
          <StyledImage
            src="https://avatars.githubusercontent.com/u/120521307?v=4"
            alt="picture"
            width={250}
            height={250}
          />

          <h3>Lennart Kaminsky</h3>
          <StyledSocialsContainer>
            <Link
              href="https://www.linkedin.com/in/lennart-kaminsky/"
              target="_blank"
            >
              <StyledIcon variant="linkedIn" />
            </Link>
            <Link href="https://github.com/lennart-kaminsky" target="_blank">
              <StyledIcon variant="gitHub" />
            </Link>
          </StyledSocialsContainer>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy em ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy eirmod tempor em ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam eirmod tempor invidunt ut labore , sed
            diam voluptua.invidunt ed diam voluptuaem ipsum dolor sit amet.
          </p>
        </StyledArticle>

        <StyledArticle>
          <StyledImage
            src="https://avatars.githubusercontent.com/u/134974986?s=400&u=3ceb33fd1cf234d959ac32a417aeacdcbc1bbcfd&v=4"
            alt="picture"
            width={250}
            height={250}
          />

          <h3>Gökhan Agkurt</h3>
          <StyledSocialsContainer>
            <Link
              href="https://www.linkedin.com/in/g%C3%B6khan-agkurt-21b58b230/"
              target="_blank"
            >
              <StyledIcon variant="linkedIn" />
            </Link>
            <Link href="https://github.com/GoekhanAgkurt" target="_blank">
              <StyledIcon variant="gitHub" />
            </Link>
          </StyledSocialsContainer>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy em ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy eirmod tempor em ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam eirmod tempor invidunt ut labore , sed
            diam voluptua.invidunt ed diam voluptuaem ipsum dolor sit amet.
          </p>
        </StyledArticle>
      </StyledSection>
    </main>
  );
}
