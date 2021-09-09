import React, { useEffect } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';
import projects from '../../content/projects';

const StyledSectionWrapper = styled.section`
  width: 80vw;
  text-align: center;
  margin: 50vh 0;
`;

const StyledCard = styled.section`
  display: flex;
  align-items: center;
  margin-top: 30px;

  &:nth-child(odd) {
    flex-direction: row-reverse;
    div {
      right: -50px;
    }
    @media (max-width: 925px) {
      flex-direction: column;
    }
  }

  img {
    width: 400px;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 15px 15px 25px -2px rgba(0, 0, 0, 0.5);
    transition: transform 0.5s;
    &:hover {
      transform: scale(1.1);
      z-index: 2;
    }
  }

  div {
    position: relative;
    width: 700px;
    right: 50px;
    text-align: left;
    padding: 5px 20px;
    border-radius: 5px;
    background-color: #212935;
    opacity: 0.98;
    box-shadow: 15px 15px 25px -2px rgba(0, 0, 0, 0.5);
    z-index: 1;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.01);
    }
  }

  code {
    display: inline-block;
    margin: 20px 10px;
    color: #707881;
    background-color: #29313d;
    padding: 0 10px;
    border-radius: 10px;
  }

  p {
    min-width: 400px;
  }

  @media (max-width: 925px) {
    flex-direction: column;
    align-items: center;

    div {
      position: unset;
      width: 60%;
    }
  }
`;

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <StyledSectionWrapper>
      <h2 id="projects">Some Things I&apos;ve Built</h2>
      {projects.map((pr, i) => (
        <StyledCard
          key={pr.name}
          data-aos="fade-up"
          data-aos-delay={i === 0 ? 0 : i * 100}
        >
          <img src={pr.image} alt={` The ${pr.name} project`} />
          <div>
            {pr.name}
            <p>
              {pr.description}
              {pr.tags.map((tg) => (
                <code key={tg}>{tg}</code>
              ))}
            </p>
          </div>
        </StyledCard>
      ))}
    </StyledSectionWrapper>
  );
}

export default Projects;
