import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans Condensed', sans-serif;
    /* padding: 20px 60px 60px; */
    padding: 0;
    background-color: #eee;
    color: #444;

    /* @media only screen and (max-width: 900px) {
      padding: 10px 10px 60px;
    } */
  }

  a {
    text-decoration: none;
  }
`;
