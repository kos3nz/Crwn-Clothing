import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans Condensed', sans-serif;
    /* padding: 20px 60px 60px; */
    padding: 0;
    background-color: #eee;

    /* @media only screen and (max-width: 900px) {
      padding: 10px 10px 60px;
    } */
  }

  a {
    text-decoration: none;
  }

  .contents {
    position: relative;
    top: 100px;

    @media only screen and (max-width: 900px) {
      top: 85px;
    }

    @media only screen and (max-width: 500px) {
      top: 80px;
    }
  }
`;
