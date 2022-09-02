import React from "react"

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento"
import Aleatorio from "./components/basicos/Aleatorio"

export default () =>
        <div id="app">
            {/* <h1>Fundamentos do react</h1>
            <Primeiro></Primeiro>
            <ComParametro
            titulo="Situação do aluno"
            aluno="Vinícius Augusto"
            nota={10}
            ></ComParametro>
            <Fragmento></Fragmento> */}
            <Aleatorio min="1" max="60"></Aleatorio>
        </div>
