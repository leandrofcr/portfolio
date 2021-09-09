import React, { useEffect } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';

const StyledHeroSection = styled.section`
  margin-top: 100px;
  display: flex;
  align-items: flex-start;
  flex-flow: column wrap;
  justify-content: center;
  font-size: 60px;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  width: 60vw;

  span {
    color: #3bafca;
    background: linear-gradient(currentColor 0 0) 0 100% / var(--d, 0) 1px
      no-repeat;
    transition: 0.5s;
    &:hover {
      --d: 100%;
    }
  }

  div {
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 0.5em;
  }

  h2 {
    font-size: 1.5em;
    margin: 0;
  }

  p {
    margin-top: 30px;
    font-size: 18px;
    max-width: 600px;
    text-align: start;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: #efb357;
    background: linear-gradient(currentColor 0 0) 0 100% / var(--d, 0) 1px
      no-repeat;
    transition: 0.5s;
    &:hover {
      --d: 100%;
    }
  }
`;

function Welcome() {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  return (
    <StyledHeroSection>
      <div>
        <h1 data-aos="fade-up">Hi there!</h1>
      </div>

      <div data-aos="fade-up" data-aos-delay="1000">
        <h2>
          I&apos;m
          {' '}
          <span>Leandro Reis</span>
        </h2>
      </div>

      <p data-aos="fade-up" data-aos-delay="1600">
        Software development student, excited about programming since I got my
        first computer. Graduated in Mechanical Engineering, where my passion
        for technology made me pivot my career and seek new challenges in the
        area of software development. Currently studying web development at
        {' '}
        <a href="https://www.betrybe.com/">Trybe</a>
        {' '}
        :D
      </p>
    </StyledHeroSection>
  );
}

export default Welcome;
