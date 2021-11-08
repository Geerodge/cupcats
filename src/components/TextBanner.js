import React from "react";
import styled from "styled-components";
import calendar from "../images/calendar.png";
import medal from "../images/medal.png";
import lock from "../images/lock.png";
import coins from "../images/coins.png";

const TextBannerStyles = styled.div`

section {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  text-align: left;

  margin: 3rem;
  padding: 3rem;
  background-color: var(--white);
}

.left {
  width: 100%;
  text-align: center;
  align-items: center;
  & h2 {
    margin-top: 0px;
    font-size: clamp(4rem, 4vw, 5rem);
  }
  & h3 {
    margin-bottom: 0px;
    color: var(--quaternary);
    text-transform: uppercase;
  }
  & h4 {
    text-transform: uppercase;
  }
}

.right {
  width: 100%;
  text-align: center;
  align-items: center;
  & ul {
    display: flex;
    flex-flow: column wrap;

    list-style: none;
    padding: 0;
  }
  & ul li {
    background-repeat: no-repeat;
    background-position: center top;
    padding-left: 0px;
    padding-top: 20px;
    text-align: center;
    margin-top: 5rem;
  }
  & ul li:first-child  {
    background-image: url(${calendar});
   }
  & ul li:nth-child(2) { 
    background-image: url(${medal});
  }
  & ul li:nth-child(3) {
    background-image: url(${lock});
   }
  & ul li:last-child {
    background-image: url(${coins});
   }
  & ul li span {
    font-weight: bold;
    color: var(--quaternary);
  }
}

@media only screen 
  and (min-width: 1000px) {
    .left {
      text-align: left;
      width: 33.3%;
    }
    .right {
      width: 66.6%;
      & ul {
        flex-flow: row wrap;
      }
      & ul li {
        width: 44%;
        background-repeat: no-repeat;
        background-position: top left;
        text-align: left;
        line-height: 30px;
        padding-left: 30px;
        padding-top: 0px;
        margin-top: 2rem;
      }
    }
}

@media only screen 
  and (min-width: 1500px) {
    
    section {
      padding-left: 5%;
      margin: 5rem;
      padding: 5rem;
    }
    .right {
      & ul li {
        background-position: left center;
      }
    }
}

`;

const TextBanner = () => {
  return (
    <TextBannerStyles>
      <section>
        <div className="left">
          <h3 className="header-3">Cupcats Market</h3>
          <h2 className="header-2">General Info</h2>
          <h4 className="header-2">5000 Cupcats = 0.02 ETH Each</h4>
        </div>
        <div className="right">
          <ul>
            <li>Release date of Cupcats <br /><span>September 18th-19th, 2021</span></li>
            <li>Honorary Cupcat Collection <br /><span>Total 17 Cupcats, you can check collection soon.</span></li>
            <li>Token details <br /><span>ERC-721 on Ethereum Network</span></li>
            <li>Total supply of Cupcats <br /><span>5000 minted, 24 reserved for giveaways</span></li>
          </ul>
        </div>
      </section>
    </TextBannerStyles>
  )
}

export default TextBanner;