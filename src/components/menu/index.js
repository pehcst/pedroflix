import React from "react";
import { Link } from "react-router-dom";
import Logo from "./../../assets/logo.png";
import "./style.css";

import Button from "./../../components/button";

export default function Menu() {
  return (
    <nav className="menu">
      <Link to="/">
        <img className="logo" src={Logo} alt="Pedrokflix"></img>
      </Link>
      <Button as={Link} to="cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}
