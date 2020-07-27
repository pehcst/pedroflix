import React from "react";
import Logo from "./../../assets/logo.png";
import "./style.css";

import Button from "./../../components/button";

export default function Menu() {
  return (
    <nav className="menu">
      <a href="/">
        <img className="logo" src={Logo} alt="Pedrokflix"></img>
      </a>
      <Button as="a" href="/">
        Novo vídeo
      </Button>
    </nav>
  );
}
