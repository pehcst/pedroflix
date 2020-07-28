import React from "react";
import { Link } from "react-router-dom";
import TemplateBase from "./../TemplateBase";

export default function CadastroVideo() {
  return (
    <TemplateBase>
      <h1>Cadastro de video</h1>
      <Link to="/cadastro/categoria"> Cadastro de categoria </Link>
    </TemplateBase>
  );
}
