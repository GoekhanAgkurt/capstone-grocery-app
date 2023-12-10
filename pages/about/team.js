import Icon from "@/components/Icons";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import Head from "next/head";

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

const StyledAnchor = styled.a`
  text-decoration: none;
  font-family: var(--fontItalic);
  color: var(--primaryDarkColor);
  &:hover {
    text-decoration: underline;
  }
`;

export default function Team() {
  return (
    <main>
      <Head>
        <title key="title">My Groceries | Team</title>
        <meta
          property="og:title"
          content="My Groceries | Team"
          key="og-title"
        />
      </Head>
      <section>
        <h2>Team</h2>
        <p>
          Hi! 👋 We are <StyledAnchor href="#Lüder">Lüder</StyledAnchor>,{" "}
          <StyledAnchor href="#Lennart">Lennart</StyledAnchor> and{" "}
          <StyledAnchor href="#Gökhan">Gökhan</StyledAnchor> and developed this
          app in the course of our Capstone-Project, that is the final project
          of the 3 months full time web-development bootcamp from {""}
          <StyledAnchor
            href="https://www.neuefische.de/bootcamp/web-development#kursinhalte"
            target="_blank"
            rel="noopener noreferrer"
          >
            neueFische
          </StyledAnchor>
          .
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
            skills. I{"'"}m currently living in Tunis, Tunesia, moving back to
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
            Since I{"'"}m incredibly enthusiastic about web development and
            learn much better through practice, I decided to end my time at
            university and do a web development bootcamp. It was the best
            decision and I am very excited to see what future projects I will be
            involved in. If I{"'"}m not programming or editing photos and
            videos, you{"'"}ll probably see me on my mountain bike.
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
          <p>
            After studying at the Hamburger Technische Kunstschule, I worked as
            a communication designer for 8 years. After further training in UX
            design, I discovered my passion for coding.
          </p>
        </StyledArticle>
      </StyledSection>
    </main>
  );
}
