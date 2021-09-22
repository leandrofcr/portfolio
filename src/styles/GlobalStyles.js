import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

html {
    box-sizing: border-box;
    width: 100vmax;
    scrollbar-color: dark;
  }

  body {
    overflow-x: hidden;
  }

  body::-webkit-scrollbar {
  width: 12px;
  }

  body::-webkit-scrollbar-track {
  background: #707881;
  }

  body::-webkit-scrollbar-thumb {
  background-color: #212935;
  border-radius: 20px;
  border: 1px solid #707881;
  }
`;

export default GlobalStyle;
