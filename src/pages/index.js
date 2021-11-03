import * as React from "react";
import ImageBanner from "../components/ImageBanner";
import Hero from "../components/Hero";
import ImageAside from "../components/ImageAside";
import ImageBar from "../components/ImageBar";
import ImageList from "../components/ImageList";
import TextBanner from "../components/TextBanner";
import Layout from "../components/Layout";

// Hero paragraph content
const heroParagraphs = [
  {
  id: 1,
  paragraph: 'Hello, I’m cupkitten. I make sweet cats in cups. To read my story and why I do Cupcats, please join our Discord and join to the community.'
  },
  {
  id: 2,
  paragraph: 'Almost everything about Cupcats decided with community members, you can find details below!'
  }
];

// Hero buttons and links
const heroButtons = [
  {
  id: 1,
  class: 'primary',
  text: 'Read More',
  link: "https://google.co.uk"
  },
  {
  id: 2,
  class: 'secondary',
  text: 'Check Rarities',
  link: "https://google.co.uk"
  }
];

const IndexPage = () => {
  return (
    <Layout>
      <Hero
        title="Hello Cat World!"
        paragraphs={heroParagraphs}
        buttons={heroButtons}
      />
      <ImageAside />
      <ImageBanner />
      <ImageBar />
      <ImageList />
      <TextBanner />
    </Layout>
  )
}

export default IndexPage;
