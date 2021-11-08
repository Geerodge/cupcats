import React from "react";
import styled from "styled-components";

const ImageBarStyles = styled.div`

.image-bar {
  display: flex;
  flex-flow: row wrap;
  
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  
  width: 100vw;
}

.image-bar__one,
.image-bar__two,
.image-bar__three,
.image-bar__four,
.image-bar__five {
  margin-top: 2rem;
  width: 100%;
  & svg {
    max-width: 100px;
    position: absolute;
    z-index: 1;
    text-align: center;
  }
  & .circle {
    position: relative;
    display: inline-block;
    background: var(--primary);
    border-radius: 50%;
    height: 100px;
    width: 100px;
    z-index: -1;
    top: 15px;
  }
  & h3 {
    color: var(--quaternary);
    margin-bottom: 0;
  }
  & h4 {
    margin-bottom: 0;
  }
  & p {
    margin-top: 0;
  }
}

@media only screen 
    and (min-width: 576px) {
      
    .image-bar__one,
    .image-bar__two,
    .image-bar__three,
    .image-bar__four,
    .image-bar__five {
      margin-top: 5rem;
    }
}

@media only screen 
  and (min-width: 768px) {

  .image-bar__one,
  .image-bar__two,
  .image-bar__three,
  .image-bar__four,
  .image-bar__five {
    width: 33.3%;    
  }

}

@media only screen 
  and (min-width: 1000px) {

  .image-bar__one,
  .image-bar__two,
  .image-bar__three,
  .image-bar__four,
  .image-bar__five {
    width: 25%;
  }

}

@media only screen 
  and (min-width: 1200px) {

  .image-bar__one,
  .image-bar__two,
  .image-bar__three,
  .image-bar__four,
  .image-bar__five {
    width: 20%;
  }

}

`;

const ImageBar = () => (
    <ImageBarStyles>
      <section className="image-bar">
        <div className="image-bar__one">
          <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <polygon fill="none" 
                    stroke="#7B2F8C"
                    stroke-width="3"
                    stroke-linecap="round"
                    points="50 1 95 25 95 75 50 99 5 75 5 25"/>
          </svg>
          <span className="circle"></span>
          <h3 className="heading-3">OpenSea</h3>
          <p>OpenSea collection</p>
        </div>
        <div className="image-bar__two">
          <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <polygon fill="none" 
                    stroke="#7B2F8C"
                    stroke-width="3"
                    stroke-linecap="round"
                    points="50 1 95 25 95 75 50 99 5 75 5 25"/>
          </svg>
          <span className="circle"></span>
          <h3 className="heading-3">Instagram</h3>
          <p>Give a follow to Cupcat Comics on Instagram</p>
        </div>
        <div className="image-bar__three">
          <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <polygon fill="none" 
                    stroke="#7B2F8C"
                    stroke-width="3"
                    stroke-linecap="round"
                    points="50 1 95 25 95 75 50 99 5 75 5 25"/>
          </svg>
          <span className="circle"></span>
          <h3 className="heading-3">Rarity Rankings</h3>
          <p>Our official rarity rankings for Cupcats</p>
        </div>
        <div className="image-bar__four">
          <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <polygon fill="none" 
                    stroke="#7B2F8C"
                    stroke-width="3"
                    stroke-linecap="round"
                    points="50 1 95 25 95 75 50 99 5 75 5 25"/>
          </svg>
          <span className="circle"></span>
          <h3 className="heading-3">OpenSea</h3>
          <p>Unofficial rankings of Cupcats on Rarity Tools</p>
        </div>
        <div className="image-bar__five">
          <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <polygon fill="none" 
                    stroke="#7B2F8C"
                    stroke-width="3"
                    stroke-linecap="round"
                    points="50 1 95 25 95 75 50 99 5 75 5 25"/>
          </svg>
          <span className="circle"></span>
          <h3 className="heading-3">Twitter</h3>
          <p>Our official Twitter account</p>
        </div>
      </section>
    </ImageBarStyles>

)

export default ImageBar;