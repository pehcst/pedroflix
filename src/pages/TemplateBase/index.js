import React from "react";
import Menu from "./../../components/menu";
import Footer from "../../components/Footer";
import { Main } from "./style";

export default function TemplateBase(props) {
  return (
    <>
      <Menu />
      <Main>{props.children}</Main>
      <Footer />
    </>
  );
}
