import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function Logo() {
 return ( 
    <StaticImage 
      src="../../images/logo.svg"
      alt="Logo"
      placeholder="blurred"
      layout="fixed"
      width={70}
      height={70}
      className="logo-img"
    />
 )
}

export default Logo;