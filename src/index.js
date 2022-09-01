import "./index.css";
import ReactDom from "react-dom";
import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";

ReactDom.render(
  <div id="app">
    <Primeiro></Primeiro>
    <ComParametro
    titulo="Situação do aluno"
      aluno="Vinícius Augusto"
      nota={10}
    ></ComParametro>
  </div>,
  document.getElementById("root")
);
