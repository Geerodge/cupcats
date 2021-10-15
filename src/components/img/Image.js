import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function Cats() {
 return ( 
    <StaticImage 
      src="../../images/cats.jpg"
      alt="Cats"
      placeholder="blurred"
      layout="fixed"
      width={200}
      height={200}
    />
 )
}

export default Cats;