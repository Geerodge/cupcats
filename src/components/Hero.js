import React from "react";
import styled from "styled-components";

const HeroStyles = styled.div`

  .hero {
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .circle {
    display: block;
    background: var(--tertiary);
    border-radius: 50%;
    height: 25em;
    width: 25em;
    z-index: -1;
    position: absolute;
  }

`;

const Hero = () => {
  return (
  <HeroStyles>
    <div className="hero">
      <div className="hero__text">
        <h1>Hello Cat World!</h1>
        <p>Hello, I’m cupkitten. I make sweet cats in cups. To read my story and why I do Cupcats, please join our Discord and join to the community.</p>
        <p>Almost everything about Cupcats decided with community members, you can find details below!</p>
        <button>Read More</button>
        <button>Check Rarities me</button>
      </div>
      <span className="circle"></span>
    </div>
  </HeroStyles>
  )
}

export default Hero;