import './App.css'
import React from 'react'

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