import React from 'react';
import styled from 'styled-components';
import {
  Header,
  Hero,
  About,
  Experience,
  Projects,
  Contact,
  Email,
  Footer,
} from './components';
import GlobalStyle from './styles/GlobalStyles';

const StyledApp = styled.div`

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  font-size: 1.2em;
  display: flex;
  align-items: center;
  flex-flow: column wrap;
  background-color: #212935;
  color: #f5f5f5;
  margin: 0;
  width: 100%;

  /* 
  #707881;
  #29313d;
  #222a36;
  #676cdb;
  #3bafca;
  #212935;
  #EFB357;
  #F86A60;
  #76BE53;
  */



`;

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Email />
      <Footer />
    </StyledApp>
  );
}

export default App;
