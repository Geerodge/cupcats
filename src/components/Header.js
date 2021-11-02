import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image"

import { FaTwitter } from "react-icons/fa";
import { BsInstagram, BsDiscord } from "react-icons/bs";

const HeaderStyles = styled.div`

  header {
    display: flex;
    margin: 5rem 0 10rem 0;
    width: 100vw;
    line-height: 1;
  }

  .header__logo {
    flex: 25%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header__nav {
    flex: 50%;

  }

  .header__social {
    flex: 25%;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header__social--icons {
    color: #26062D;
    margin: 0rem 2rem;
  }

  .header__logo--img {
    margin: 0rem 2rem;
  }

  /* Mobile Nav */
  @keyframes bugfix { from {padding:0;} to {padding:0;}}
  @-webkit-keyframes bugfix { from {padding:0;} to {padding:0;}}

  #overlay-button {
    position: absolute;
    right: 1em;
    top: .5em;
    padding: 26px 11px;
    z-index: 5;
    cursor: pointer;
    user-select: none;
    span {
      height: 4px;
      width: 35px;
      border-radius: 2px;
      background-color: var(--black);
      position: relative;
      display: block;
      transition: all .2s ease-in-out;
      &:before {
        top: -10px;
        visibility: visible;
      }
      &:after {
        top: 10px;
      }
      &:before, &:after {
        height: 4px;
        width: 35px;
        border-radius: 2px;
        background-color: var(--black);
        position: absolute;
        content: "";
        transition: all .2s ease-in-out;
      }
    }
    &:hover span, &:hover span:before, &:hover span:after {
      background: var(--darkgrey);
    }
  }

  input[type=checkbox] {
    display: none;
  }

  input[type=checkbox]:checked ~ #overlay {
    visibility: visible;
  }

  input[type=checkbox]:checked ~ #overlay-button {
    &:hover span, span{
      background: transparent;
    }
    span {
      &:before {
        transform: rotate(45deg) translate(7px, 7px);
        opacity: 1;
      }
      &:after {
        transform: rotate(-45deg) translate(7px, -7px);
      }
    }
  }

  #overlay {
    height: 100vh;
    background: var(--primary);
    z-index: 2;
    visibility: hidden;
    position: fixed;
    &.active {
      visibility: visible;
    }
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      height: 100vh;
      padding-left: 0;
      list-style-type: none;
      li {
        padding: 1em;
        a {
          color: var(--black);
          text-decoration: none;
          font-size: 1.5em;
          &:hover {
            color: var(--quaternary);;
          }
        }
      }
    }
  }

  /* For devices with width greater than or equal to 992px, like desktop computers */
  @media only screen 
    and (min-width: 992px) {

    #overlay-button {
      display: none;
    }

    #overlay {
      position: static;
      background: none;
      font-size: .85em;
      height: inherit;

      ul {
        visibility: visible;
        flex-flow: row nowrap;
        height: 75px;
        margin: 0;
      }
    }
  }

  /* For devices with width less than or equal to 992px */
  @media only screen 
    and (max-width: 992px) {

      #overlay {
        width: 100vw;
      }

      .header__logo,
      .header__social {
        display: none;
      }

      header {
        margin: 0 0 15rem 0;
      }

    }
`;

const Header = () => (
    <HeaderStyles>
      <header>
        <div className="header__logo">
          <StaticImage className="header__logo--img" src="../images/logo.png" alt="cat" />
          <h3>CupCats</h3>
        </div>
        <nav className="header__nav">
          <input type="checkbox" id="overlay-input" />
          <label htmlFor="overlay-input" id="overlay-button"><span></span></label>
          <div id="overlay">
              <ul>
                  <li><a href="/">Home</a></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/mint">MINT!</Link></li>
                  <li><Link to="/traits">Traits</Link></li>
                  <li><a href="/roadmap">Roadmap</a></li>
                  <li><a href="/contact">Contact</a></li>
              </ul>
          </div>
        </nav>
        <div className="header__social">
          <a href="https://discord.com/invite/ZTmEHUhk69" target="_blank" rel="noreferrer">
              <BsInstagram className="header__social--icons" size={35} />
          </a>
          <a href="https://twitter.com/cupcatnft" target="_blank" rel="noreferrer">
              <FaTwitter className="header__social--icons" size={35} />
          </a>
          <a href="https://discord.com/invite/ZTmEHUhk69" target="_blank" rel="noreferrer">
              <BsDiscord className="header__social--icons" size={35} />
          </a>
        </div>
      </header>
    </HeaderStyles>

)

export default Header;