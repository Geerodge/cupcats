import React from "react";
import styled from "styled-components";
import { FaTwitter, FaEthereum } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { GiSailboat } from "react-icons/gi";

const FooterStyles = styled.div`

    text-align: center;
    margin: 25px;
    line-height: 1.75;

    .icons {
        color: var(--darkgrey);
        margin-top: 10px;
        transition: 0.3s;
        &:hover {
            color: var(--quaternary);
        }
    }
    
    a {
        margin: 10px;
    }
  
    @keyframes blinking-cursor {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;

const Footer = () => {
    return (
        <FooterStyles>
            <footer>
                <p>This is the footer.</p>
                © {new Date().getFullYear()} Cupcats NFT<br />
                <a href="https://discord.com/invite/ZTmEHUhk69" target="_blank" rel="noreferrer">
                    <BsDiscord className="icons" />
                </a>
                <a href="https://twitter.com/cupcatnft" target="_blank" rel="noreferrer">
                    <FaTwitter className="icons" />
                </a>
                <a href="https://etherscan.io/address/0x8cd8155e1af6ad31dd9eec2ced37e04145acfcb3" target="_blank" rel="noreferrer">
                    <FaEthereum className="icons" />
                </a>
                <a href="https://opensea.io/collection/cupcatsofficial" target="_blank" rel="noreferrer">
                    <GiSailboat className="icons" />
                </a>
            </footer>
        </FooterStyles>
    )
}

export default Footer;