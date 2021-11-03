import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const ImageAsideStyles = styled.div`

.image-aside {
  display: flex;
  flex-flow: column wrap;
  
  width: 100vw;
  margin-top: 5rem;
}

.image-aside__text {
  justify-content: center;
  align-items: center;
  text-align: center;

  margin: 0 auto;
  padding: clamp(4rem, 5vw, 8rem);

  & h2 {
    margin-top: 0;
  }

  & h3 {
    margin-bottom: 0;
    color: var(--quaternary);
    text-transform: uppercase;
  }

  & button {
    margin-top: 3rem;
  }

}

@media only screen 
  and (min-width: 768px) {

    .image-aside {
      flex-flow: nowrap;
      justify-content: center;
      align-items: center;
    }

    .image-aside__text {
      max-width: 50%;
      text-align: left;
    }

}

@media only screen 
  and (min-width: 1200px) {

    .image-aside__text {
      max-width: 45%;
    }
}

`;

const ImageAside = () => (
    <ImageAsideStyles>
      <section className="image-aside">
        <div className="image-aside__image">
          <StaticImage 
            className="cupcats"
            src="../images/story.png"
            alt="cupcats"
          />
        </div>
        <div className="image-aside__text">
          <h3 className="heading-3">About Our Platform</h3>
          <h2 className="heading-2">Our Story</h2>
          <p>Hello, I’m cupkitten. I make sweet cats in cups. To read my story and why I do Cupcats, please join our Discord and join to the community.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in blandit enim. Donec non metus vitae justo posuere ultricies.</p>
          <button className="primary">Read More</button>
        </div>
      </section>
    </ImageAsideStyles>

)

export default ImageAside;