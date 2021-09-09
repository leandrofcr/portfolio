import React from 'react';
import styled from 'styled-components';

const StyledHeaderSection = styled.section`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
  position: fixed;
  background-color: #212935;
  z-index: 2;

  span {
    color: #3bafca;
    background-color: #29313d;
    padding: 7px;
    border-radius: 50%;
  }

  a {
    text-decoration: none;
    margin: 0 10px;
    color: #707881;
    font-weight: 600;
    background: linear-gradient(currentColor 0 0) 0 100% / var(--d, 0) 1px
      no-repeat;
    transition: 0.5s;
    &:hover {
      color: #efb357;
      --d: 100%;
    }
  }

  @media (max-width: 925px) {
    justify-content: center;
  }
`;

function Header() {
  return (
    <StyledHeaderSection>
      <span>LR</span>
      <nav>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </StyledHeaderSection>
  );
}

export default Header;
