import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function Logo() {
 return ( 
    <StaticImage 
      src="../../images/logo.png"
      alt="Logo"
      placeholder="blurred"
      layout="fixed"
      width={70}
      height={70}
    />
 )
}

export default Logo;