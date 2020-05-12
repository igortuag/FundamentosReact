import './App.css'
import React from 'react'

import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'

export default _ =>
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">

            <Card titulo="#04 - Desafio Aleatório">
                <Aleatorio min={9} max={27}></Aleatorio>
            </Card>

            <Card titulo="#03 - Fragmento">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Segundo Componente">
                <ComParametro
                    titulo="Segundo Componente"
                    aluno="Pedro"
                    nota={9.7}
                />
            </Card>

            <Card titulo="#01 - Primeiro">
                <Primeiro></Primeiro>
            </Card>

        </div>
    </div>