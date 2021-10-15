import React from "react";
import data from '../components/data/sorted.json';

const Sort = () => {
    // let result = data.assets.map(item => ({ 
    //   name: 'Cupcat' + ' ' + data.assets[0].token_id,
    //   image: data.assets[0].image_url,
    //   external_url: 'https://www.cupcatnft.com',
    // }));
    // console.log(result)

    // for (const [key, value] of Object.entries(data.assets, index)) {
    //   console.log(`${key}: ${value}`);
    // }

    let cats = data.assets.map((cat,i) => ({
      name: 'Cupcat' + ' ' + data.assets[i].token_id,
      image: data.assets[i].image_url,
      external_url: 'https://www.cupcatnft.com',
    }))
    console.log(cats);

  return (
    <>
    </>
  )
}

export default Sort;