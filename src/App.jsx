import React from "react"
import "./App.css"

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento"
import Aleatorio from "./components/basicos/Aleatorio"
import Card from "./components/layout/Card"
import Familia from "./components/basicos/Familia"
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import ListaAlunos from "./components/repeticao/ListaAlunos"
import ListaProdutos from "./components/repeticao/ListaProdutos"

export default () =>
        <div id="app">
            <h1>Fundamentos do react</h1>

            <div className="Cards">

                <Card titulo="#07 Atividade de produtos" color="#FE2E2E">
                    <ListaProdutos></ListaProdutos>
                </Card>

                <Card titulo="#06 Lista de Alunos">
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo="#05 Componente com filhos" color="#FF00FF">
                    <Familia sobrenome="Monteiro">
                        <FamiliaMembro nome="Vinícius"/>
                        <FamiliaMembro nome="Bianca"/>
                        <FamiliaMembro nome="Marli" />
                    </Familia>
                </Card>

                <Card titulo="#04 Desafio Aleatório" color="#080">
                    <Aleatorio min="1" max="60"></Aleatorio>    
                </Card>

                <Card titulo="#03 Fragmento" color="#00FFFF">
                    <Fragmento></Fragmento>
                </Card>   

                <Card titulo="#02 Com parâmetro" color="#FF8000">
                    <ComParametro
                    titulo="Situação do aluno"
                    aluno="Vinícius Augusto"
                    nota={10}
                    ></ComParametro>
                </Card>    

                <Card titulo=" #01 Primeiro exercício" color="#FFFF00">                
                    <Primeiro></Primeiro>
                </Card>     
            
            </div>

        </div>
