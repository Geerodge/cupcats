import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function Cupkitten() {
 return ( 
    <StaticImage 
      src="../../images/cupkitten.svg"
      alt="Cupkitten"
      placeholder="blurred"
      layout="fixed"
      width={86}
      height={86}
    />
 )
}

export default Cupkitten;