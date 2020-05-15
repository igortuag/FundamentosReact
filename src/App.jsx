import './App.css'
import React from 'react'

import Input from "./components/formulario/Input"
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'

export default _ =>
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">

            <Card titulo="#11 - Componente Controlado (Input)" color="#E45F56">
                <Input />
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                <IndiretaPai />
            </Card>

            <Card titulo="#09 - Comunicação Direta" color="#59323C">
                <DiretaPai />
            </Card>

            <Card titulo="#08 - Par ou Impar" color="#982395">
                <ParOuImpar numero={22} />
                <UsuarioInfo usuario={{ nome: 'Igor' }} />
                <UsuarioInfo usuario={{ email: 'Igor@tuag.com' }} />
                <UsuarioInfo usuario={{}} />
                <UsuarioInfo />
            </Card>

            <Card titulo="#07 - Exercicio Repetição" color="#3A9AD9">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 - Repetição" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                <Familia sobreNome="Silva">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio min={9} max={27}></Aleatorio>
            </Card>

            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Segundo Componente" color="#E8B71A">
                <ComParametro
                    titulo="Segundo Componente"
                    aluno="Pedro"
                    nota={9.7}
                />
            </Card>

            <Card titulo="#01 - Primeiro" color="#588C73">
                <Primeiro></Primeiro>
            </Card>

        </div>
    </div>