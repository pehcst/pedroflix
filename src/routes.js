import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import CadastroVideo from "./pages/CadastroVideo";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/cadastro/video" exact component={CadastroVideo} />
        <Route component={App} />
      </Switch>
    </BrowserRouter>
  );
}
