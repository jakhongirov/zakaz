import Head from "next/head";

import Layout from "../src/Components/layout/layout";
import Intro from "../src/Components/intro/intro";
import HomeNews from "../src/Components/home-news/home-news";
import Photogallery from "../src/Components/photogallery/photogallery";
import LinksSlider from "../src/Components/linksSlider/linksSlider";


export default function Home() {
  return (
    <>
      <Head>
        <title>UZB</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Intro />
        <HomeNews /> 
        <Photogallery />
        <LinksSlider />
      </Layout>
    </>
  );
}
