import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function CupcatOne() {
 return ( 
    <StaticImage 
      src="../../images/cupcat-1.svg"
      alt="Cupcat"
      placeholder="blurred"
      layout="fixed"
      width={54}
      height={54}
    />
 )
}

export default CupcatOne;