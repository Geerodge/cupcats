import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const HeroStyles = styled.div`

  .hero {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    text-align: center;

    padding: 2rem;
  }

  .hero__text {
    max-width: 80%;
    & h1 {
      line-height: 1.25;
    }
  }

  .circle {
    display: block;
    background: var(--tertiary);
    border-radius: 50%;
    height: 15em;
    width: 15em;
    z-index: -1;
    position: absolute;
    top: 7%;
  }

  button {
    margin: 2rem 2rem 2rem 0;
  }

  .hero__cats-container {
    display: block;
  }

  @media only screen 
    and (min-width: 375px) {

    button {
      margin-top: 5rem;
    }

  }

  @media only screen 
    and (min-width: 576px) {

    .circle {
      height: 25em;
      width: 25em;
    }

  }

  @media only screen 
    and (min-width: 768px) {

    .circle {
      top: 5%;
    }

  }

  @media only screen 
    and (min-width: 1000px) {

    .circle {
      top: 10%;
    }

  }
`;

const Hero = () => {
  return (
  <HeroStyles>
    <div className="hero">
      <div className="hero__cats-container">
        <StaticImage className="cupcats" src="../images/cupcats.png" alt="cupcats" />
      </div>
      <div className="hero__text">
        <h1>Hello Cat World!</h1>
        <p>Hello, I’m cupkitten. I make sweet cats in cups. To read my story and why I do Cupcats, please join our Discord and join to the community.</p>
        <p>Almost everything about Cupcats decided with community members, you can find details below!</p>
        <button className="primary">Read More</button>
        <button className="secondary">Check Rarities</button>
      </div>
      <span className="circle"></span>
    </div>
  </HeroStyles>
  )
}

export default Hero;