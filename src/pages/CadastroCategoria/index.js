import React from "react";
import { Link } from "react-router-dom";
import TemplateBase from "./../TemplateBase";

export default function CadastroCategoria() {
  return (
    <TemplateBase>
      <h1>Cadastro de Categoria</h1>
      <form>
        <label for="nm_categoria">Nome da Categoria</label>
        <input type="text"></input>
        <button>Cadastrar</button>
      </form>
      <Link to="/"> Home </Link>
    </TemplateBase>
  );
}
