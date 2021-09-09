import React, { useEffect } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';
import jobs from '../../content/jobs';
import studies from '../../content/studies';

const StyleExpSection = styled.section`
  width: 70vw;
  min-height: 100vh;
  display: flex;
  justify-content: space-around;

  h2 {
    text-align: start;
    display: flex;
    align-items: center;
    &:after {
      content: "";
      display: block;
      width: 100px;
      height: 1px;
      background: #707881;
      margin-left: 15px;
    }
  }

  h3 {
    color: #3bafca;
    transition:0.5s;
    background: linear-gradient(currentColor 0 0) 0 100%
      /var(--d, 0) 1px no-repeat;
      &:hover {
        --d: 100%;
      } 
  }

  code {
    font-size: 12px;
    color: #707881;
  }

  a {
    text-decoration: none;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-flow: column wrap;
  max-width: 400px;
  margin: 15px;

  li {
    margin: 15px 0;
  }
`;

function Experience() {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  return (
    <StyleExpSection>
      <section data-aos="fade-right" id="experience">
        <h2>Where I&apos;ve Worked</h2>
        <StyledDiv>
          {jobs.map((el) => (
            <>
              <a href={el.url} target="_blank" rel="noreferrer">
                <h3>{el.company}</h3>
              </a>
              <span>{el.name}</span>
              <code>{el.period}</code>
              <ul>
                {el.description.map((elem) => (
                  <li>{elem}</li>
                ))}
              </ul>
            </>
          ))}
        </StyledDiv>
      </section>
      <hr />
      <section data-aos="fade-left">
        <h2>Where I&apos;ve Studied</h2>
        <StyledDiv>
          {studies.map((el) => (
            <>
              <a href={el.url} target="_blank" rel="noreferrer">
                <h3>{el.school}</h3>
              </a>
              <span>{el.name}</span>
              <code>{el.period}</code>
              <p>{el.description}</p>
            </>
          ))}
        </StyledDiv>
      </section>
    </StyleExpSection>
  );
}

export default Experience;
