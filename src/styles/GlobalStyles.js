import { createGlobalStyle } from 'styled-components';
import "normalize.css";
import "@fontsource/patrick-hand"; // Defaults to weight 400.
import "@fontsource/lemon"; // Defaults to weight 400.

const GlobalStyles = createGlobalStyle`

  html {

    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #fafafa;
    --green: #599b44;
    --darkgrey: #333332;

    --primary: #F6CDFF;
    --secondary: #F4F0BE;
    --tertiary: #FF92FB;
    --quaternary: #7B2F8C;
    --quinary: #5d5c61;

    font-size: 10px;

  }

  html {
    background: #F6CDFF;
    background: -webkit-linear-gradient(top, #F6CDFF 0%, #FF92FB 60%);
    background: -linear-gradient(top, #F6CDFF 0%, #FF92FB 60%);
    background: -moz-linear-gradient(top, #F6CDFF 0%, #FF92FB 60%);
  }
  
  body {
    font-family: "Patrick Hand", sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 2rem;
    line-height: 1.75;
    color: var(--black);
    width: 100vw;
    overflow-x: hidden; /* Hide horizontal scrollbar */

    h1, h2, h3, h4, h5, h6 {
      font-family: "Lemon", sans-serif;
      color: var(--black);
    }

    button.primary {
      background-color: var(--white);
      cursor: pointer;
      font-weight: 700;
      text-transform: uppercase;
      border: none;
      color: var(--tertiary);
      border: solid 1px var(--tertiary);
      padding: 0 15px;
      height: 2.5em;
      -webkit-transition: background-color .3s ease-out;
      -moz-transition: background-color .3s ease-out;
      -o-transition: background-color .3s ease-out;
      transition: background-color .3s ease-out;
      &:hover {
        background-color: var(--tertiary);
        color: var(--white);
      }
    }

    button.secondary {
      background-color: var(--tertiary);
      cursor: pointer;
      font-weight: 700;
      text-transform: uppercase;
      border: none;
      color: var(--white);
      padding: 0 15px;
      height: 2.5em;
      -webkit-transition: background-color .3s ease-out;
      -moz-transition: background-color .3s ease-out;
      -o-transition: background-color .3s ease-out;
      transition: background-color .3s ease-out;
      &:hover {
        background-color: var(--white);
        color: var(--tertiary);
      }
    }

    a {
      color: var(--primary);
    }

  }
  
`;

export default GlobalStyles;