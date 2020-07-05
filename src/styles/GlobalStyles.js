import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #6C63FF;
    font-family: 'Ubuntu', 'Roboto', 'sans-serif';
  }
`;