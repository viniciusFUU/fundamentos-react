import './index.css'
import ReactDom from "react-dom";
import React from "react";

const tag = <hr></hr>;

ReactDom.render(
  <div>
    <h1>Olá react!</h1>
    {tag}
  </div>,
  document.getElementById("root")
);
