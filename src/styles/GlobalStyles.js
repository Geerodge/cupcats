import { createGlobalStyle } from 'styled-components';
import "normalize.css";
import "@fontsource/patrick-hand"; // Defaults to weight 400.
import "@fontsource/lemon"; // Defaults to weight 400.
import "@fontsource/comic-neue"; // Defaults to weight 400.
import background from "../images/bg.png";

const GlobalStyles = createGlobalStyle`

  html {
    --primary: #F6CDFF;
    --secondary: #F4F0BE;
    --tertiary: #FF92FB;
    --quaternary: #7B2F8C;
    --grey: #5d5c61;
    --darkgrey: #333332;
    --light: #FAF5FF;
    --white: #FFFFFF;
    --dark: #26062D;
    --bright: #FFF89B;
    --black: #000000;
    --background: #F3BDFF;

    font-size: 10px;

    /* background: url(${background}), linear-gradient(180deg, var(--background) 0%, rgba(255, 255, 255, 0)); */
    background: linear-gradient(180deg, var(--background) 0%, rgba(255, 255, 255, 0));
    min-height: 100%;
  }
  
  body {
    font-family: Montserrat, "Patrick Hand", sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 2rem;
    line-height: 1.75;
    color: var(--black);
    width: 100vw;
    overflow-x: hidden; /* Hide horizontal scrollbar */

    h1, h2 {
      font-family: "Comic Neue", "Lemon", sans-serif;
      color: var(--black);
    }

    /*
    clamp() enables selecting value within a range of values between 
    a defined minimum and maximum. It takes three parameters: 
    a minimum value, a preferred value, and a maximum allowed value. 
    */
    .heading-1--mega {
      font-size: clamp(4rem, 6vw, 8rem);
      line-height: clamp(4.5rem, 7vw, 8.5rem);
    }

    .heading-1 {
      font-size: clamp(4rem, 4vw, 6rem);
      line-height: clamp(3.5rem, 6vw, 6.5rem);
    }

    .heading-2 {
      font-size: clamp(3rem, 4vw, 5rem);
      line-height: clamp(3rem, 5.5vw, 4.5rem);
    }

    .heading-3 {
      font-size: clamp(2rem, 3vw, 2rem);
      line-height: clamp(3rem, 5.5vw, 4.5rem);
      font-family: Montserrat;
    }

    .subheading {
      font-weight: 500;
      margin-bottom: 0;
    }

    button.primary {
      background-color: var(--quaternary);
      cursor: pointer;
      border: none;
      border-radius: 100px;
      color: var(--white);
      padding: 0 35px;
      height: 2.5em;
      -webkit-transition: background-color .3s ease-out;
      -moz-transition: background-color .3s ease-out;
      -o-transition: background-color .3s ease-out;
      transition: background-color .3s ease-out;
      &:hover {
        background-color: var(--tertiary);
        color: var(--black);
      }
    }

    button.secondary {
      background-color: var(--tertiary);
      cursor: pointer;
      border: none;
      border-radius: 100px;
      color: var(--black);
      padding: 0 35px;
      height: 2.5em;
      -webkit-transition: background-color .3s ease-out;
      -moz-transition: background-color .3s ease-out;
      -o-transition: background-color .3s ease-out;
      transition: background-color .3s ease-out;
      &:hover {
        background-color: var(--quaternary);
        color: var(--white);
      }
    }

    button.tertiary {
      background-color: var(--white);
      cursor: pointer;
      border: none;
      border-radius: 100px;
      color: var(--quaternary);
      padding: 0 35px;
      height: 2.5em;
      -webkit-transition: background-color .3s ease-out;
      -moz-transition: background-color .3s ease-out;
      -o-transition: background-color .3s ease-out;
      transition: background-color .3s ease-out;
      &:hover {
        background-color: var(--quaternary);
        color: var(--white);
      }
    }

    a {
      color: var(--primary);
    }

  }
  
`;

export default GlobalStyles;