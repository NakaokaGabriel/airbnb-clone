import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
  }

  body, input, button {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
  }

  body {
    width: 100%;
  }

  h1 {
    font-weight: bold;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
  }
`;
