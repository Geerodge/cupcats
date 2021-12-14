import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function Cupcatchips() {
 return ( 
    <StaticImage 
      src="../../images/cupcatchips.svg"
      alt="Cupcat with chips"
      placeholder="blurred"
      layout="fixed"
      width={86}
      height={86}
    />
 )
}

export default Cupcatchips;