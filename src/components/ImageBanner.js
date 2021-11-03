import React from "react";
import styled from "styled-components";
import background from "../images/banner-cats.png"

const ImageBannerStyles = styled.div`

section {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  text-align: center;

  background-image: url(${background});
  background-size: cover;

  padding: 4rem;

  & h2 {
    margin-top: 0px;
  }
}

@media only screen 
    and (min-width: 576px) {
      section {
        flex-flow: unset;
        justify-content: left;
        align-items: left;
        text-align: left;

        padding: 4rem;
      }
  }

  @media only screen 
    and (min-width: 768px) {

      section {
        margin: 2rem;
        padding: 5rem;
      }

  }

  @media only screen 
    and (min-width: 1000px) {

      margin: 7rem 4rem;

      section {
        max-width: 1000px;
        min-height: 200px;
        margin: 0 auto;

        & div {
          margin-left: 5%;
        }
      }

  }

`;

const ImageBanner = () => {
  return (
    <ImageBannerStyles>
      <section>
        <div>
          <h2 className="heading-2">CupCat Rarities</h2>
          <button className="tertiary">Check Rarities</button>
        </div>
      </section>
    </ImageBannerStyles>
  )
}

export default ImageBanner;