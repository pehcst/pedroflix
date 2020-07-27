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
        videoDescription={"O que é Front-end? Trabahando na área"}
      />
      <Carousel ignoreFirstVideo category={Data.categorias[0]} />

      <Carousel category={Data.categorias[1]} />

      <Carousel category={Data.categorias[2]} />

      <Carousel category={Data.categorias[3]} />

      <Carousel category={Data.categorias[4]} />

      <Footer />
    </div>
  );
}
