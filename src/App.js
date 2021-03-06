import React from "react";
import Menu from "./components/menu";
import BannerMain from "./components/BannerMain";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Data from "./data/dados_iniciais.json";

export default function App() {
  return (
    <div style={{ background: "#151515" }}>
      <Menu />
      <BannerMain
        videoTitle={Data.categorias[0].videos[0].titulo}
        url={Data.categorias[0].videos[0].url}
        videoDescription={"React é facil, eles disseram!"}
      />
      <Carousel category={Data.categorias[4]} />
      <Carousel ignoreFirstVideo category={Data.categorias[0]} />
      <Carousel category={Data.categorias[1]} />
      <Carousel category={Data.categorias[2]} />

      <Footer />
    </div>
  );
}
