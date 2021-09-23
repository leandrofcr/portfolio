import React from 'react';
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

function App() {
  return (
    <>
      <main>
        <GlobalStyle />
        <Header />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Email />
        <Footer />
      </main>
    </>
  );
}

export default App;
