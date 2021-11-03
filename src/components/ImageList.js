import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import bullet from "../images/tick.png";

const ImageListStyles = styled.div`

.image-list {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  text-align: center;
  gap: 5rem;

  margin-top: 5rem;

  & h2 {
    margin-top: 0;
  }
  & h3 {
    margin-bottom: 0;
    color: var(--quaternary);
  }
  & ul {
    display: flex;
    flex-flow: column wrap;

    text-align: left;
    list-style: none;
    padding: 0;
    margin: 1rem;
  }
  & ul li {
    background-image: url(${bullet});
    background-repeat: no-repeat;
    line-height: 30px;
    padding-left: 45px;
    margin: 1rem 1rem;
  }
}

.image-list__image img {
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  padding: 1rem;
}

@media only screen 
    and (min-width: 576px) {

      .image-list {
        & ul {
          margin: 2rem;
        }
      }
}

@media only screen 
  and (min-width: 768px) {

}

@media only screen 
  and (min-width: 1000px) {

    .image-list {
      justify-content: space-around;
    }
}

@media only screen 
  and (min-width: 1200px) {

    .image-list {
        margin-top: 10rem;
      }

}

`;

const ImageList = () => {
  return (
    <ImageListStyles>
      <section className="image-list">
        <div className="image-list__list">
          <h3 className="header-3">Charity Goals</h3>
          <h2 className="header-2">Roadmap Activations</h2>
          <ul>
            <li>5% of every mint will be donated to cat shelters</li>
            <li>5% of every royalty fee will be donated to cat shelters</li>
            <li>3 ETH will be donated to cat related charities</li>
            <li>50 Cupcat minters will have a Cupcat hoodie</li>
            <li>1000 minters will have a Cupcat t-shirt</li>
            <li>50 minters will be selected for a special Cupcat drawing</li>
          </ul>
        </div>
        <div className="image-list__image">
          <StaticImage 
            className="img"
            src="../images/cupcat-charms.png"
            alt="cupcats"
          />
        </div>
      </section>
    </ImageListStyles>
  )
}

export default ImageList;