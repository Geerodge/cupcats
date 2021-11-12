import React from "react";
import styled from "styled-components";
import { FaTwitter, FaEthereum } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { GiSailboat } from "react-icons/gi";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const FooterStyles = styled.div`

text-align: center;
margin: 25px;
padding-top: 8rem;
line-height: 1.75;
background-color: var(--white);

.icons {
  color: #26062D;
  margin-top: 10px;
  transition: 0.3s;
  margin: 10px;
  &:hover {
      color: var(--quaternary);
  }   
}

ul {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding-left: 0;
  list-style-type: none;
  li {
    padding: 1em;
    a {
      color: var(--black);
      text-decoration: none;
      font-weight: 500;
      &:hover {
      color: var(--quaternary);;
      }
    }
  }
}

@media only screen 
  and (min-width: 576px) {
    ul {
      flex-flow: row wrap;
    }
}
`;

const Footer = () => {
    return (
        <FooterStyles>
            <footer>
                <StaticImage className="header__logo--img" src="../images/logo.png" alt="cat" />
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/mint">MINT!</Link></li>
                  <li><Link to="/traits">Traits</Link></li>
                  <li><a href="/roadmap">Roadmap</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
                <div className="copyright">
                    &copy; {new Date().getFullYear()}. All rights reserved.<br />
                    <a href="https://discord.com/invite/ZTmEHUhk69" target="_blank" rel="noreferrer">
                        <BsDiscord className="icons" size={35} />
                    </a>
                    <a href="https://twitter.com/cupcatnft" target="_blank" rel="noreferrer">
                        <FaTwitter className="icons" size={35} />
                    </a>
                    <a href="https://etherscan.io/address/0x8cd8155e1af6ad31dd9eec2ced37e04145acfcb3" target="_blank" rel="noreferrer">
                        <FaEthereum className="icons" size={35} />
                    </a>
                    <a href="https://opensea.io/collection/cupcatsofficial" target="_blank" rel="noreferrer">
                        <GiSailboat className="icons" size={35} />
                    </a>
                </div>
            </footer>
        </FooterStyles>
    )
}

export default Footer;