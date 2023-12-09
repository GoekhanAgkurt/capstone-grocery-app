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
  min-width: 60%;
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
          Hi, 👋 we are <a href="#Lüder">Lüder</a>,{" "}
          <a href="#Lennart">Lennart</a> and <a href="#Gökhan">Gökhan</a> and
          developed this app in the course of our Capstone-Project, that is the
          final project of the 3 months full time web-development bootcamp from{" "}
          {""}
          <a
            href="https://www.neuefische.de/bootcamp/web-development#kursinhalte"
            target="_blank"
            rel="noopener noreferrer"
          >
            neueFische
          </a>
        </p>
      </section>

      <StyledSection>
        <StyledArticle id="Lüder">
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
              rel="noopener noreferrer"
            >
              <StyledIcon variant="linkedIn" />
            </Link>
            <Link
              href="https://github.com/luederb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledIcon variant="gitHub" />
            </Link>
          </StyledSocialsContainer>
          <p>
            Besides Kite Surfing, and beeing with my son, I enjoy going on
            adventures in the world and creating and fixing things. I love
            woodworking and engineering. Web-Development is my new found passion
            where I can combine my creative, engineering and project management
            skills. I'm currently living in Tunis, Tunesia, moving back to
            Germany in April `24.
          </p>
        </StyledArticle>

        <StyledArticle id="Lennart">
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
              rel="noopener noreferrer"
            >
              <StyledIcon variant="linkedIn" />
            </Link>
            <Link
              href="https://github.com/lennart-kaminsky"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledIcon variant="gitHub" />
            </Link>
          </StyledSocialsContainer>
          <p>
            I love the way of creating something new, useful or creative by
            writing some code. I'm looking forward to build up my skills and
            dive deeper into web development day by day.
          </p>
        </StyledArticle>

        <StyledArticle id="Gökhan">
          <StyledImage
            src="https://avatars.githubusercontent.com/u/134974986?s=400&u=3ceb33fd1cf234d959ac32a417aeacdcbc1bbcfd&v=4"
            alt="picture"
            width={250}
            height={250}
          />
          <h3>Gökhan Agkurt</h3>
          <StyledSocialsContainer>
            <a
              href="https://www.linkedin.com/in/g%C3%B6khan-agkurt-21b58b230/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledIcon variant="linkedIn" />
            </a>
            <a
              href="https://github.com/GoekhanAgkurt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledIcon variant="gitHub" />
            </a>
          </StyledSocialsContainer>
          <p>I am a UX Designer and Java developer </p>{" "}
          <p>- 🌱 I’m currently learning **Java, Typescript** </p>{" "}
          <p>- 🌱 I’m currently pimping up my portfolio</p>
        </StyledArticle>
      </StyledSection>
    </main>
  );
}
