import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

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

const Hero = (props) => {
  const { title, paragraphs, buttons } = props;
  
  // Maps through the heroParagraphs array object prop
  function getHeroParagraphs(items) {
    return items.map(item => (
        <p key={item.id}>{item.paragraph}</p>
    ));
  }

  // Maps through the heroButtons array object prop
  function getHeroButtons(items) {
    return items.map(item => (
        <a key={item.id} href={item.link}>
          <button className={item.class}>{item.text}</button>
        </a>
    ));
  }

  return (
  <HeroStyles>
    <div className="hero">
      <div className="hero__cats-container">
        <StaticImage 
          className="cupcats"
          src="../images/cupcats.png"
          alt="cupcats"
        />
      </div>
      <div className="hero__text">
        <h1>{title}</h1>
        {getHeroParagraphs(paragraphs)}
        {getHeroButtons(buttons)}
      </div>
      <span className="circle"></span>
    </div>
  </HeroStyles>
  )
}

export default Hero;