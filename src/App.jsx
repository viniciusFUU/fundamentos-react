import React from "react"

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento"
import Aleatorio from "./components/basicos/Aleatorio"
import Card from "./components/layout/Card"

export default () =>
        <div id="app">
            <h1>Fundamentos do react</h1>

            <Card titulo="#04 Desafio Aleatório">
                <Aleatorio min="1" max="60"></Aleatorio>    
            </Card>

            <Card titulo="#03 Fragmento">
                <Fragmento></Fragmento>
            </Card>   

            <Card titulo="#02 Com parâmetro">
                <ComParametro
                titulo="Situação do aluno"
                aluno="Vinícius Augusto"
                nota={10}
                ></ComParametro>
            </Card>    

            <Card titulo=" #01 Primeiro exercício">                
                <Primeiro></Primeiro>
            </Card>     
            
        </div>
