import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function CupcatFour() {
 return ( 
    <StaticImage 
      src="../../images/cupcat-4.svg"
      alt="Cupcat"
      placeholder="blurred"
      layout="fixed"
      width={54}
      height={54}
    />
 )
}

export default CupcatFour;