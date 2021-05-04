import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans Condensed';
    padding: 20px 60px 60px;
    background-color: #eee;

    @media only screen and (max-width: 900px) {
      padding: 10px 10px 60px;
    }
  }

  a {
    text-decoration: none;
  }
`;