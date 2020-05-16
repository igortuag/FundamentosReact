import React, { useState } from 'react'
import './Loteria.css'

export default function Loteria(props) {
    function gerarNumeros(qtde) {
        var numeros = new Array(parseInt(qtde))
            .fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumeroNaoContido(1, 60, nums)
                console.log([...nums, novoNumero])
                return [...nums, novoNumero]
            }, [])
            .sort((n1, n2) => n1 - n2)

        return numeros
    }

    function gerarNumeroNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
        return array.includes * (aleatorio) ? gerarNumeroNaoContido(min, max, array) : aleatorio;
    }

    const [qtde, setQtde] = useState(props.qtde || 6)
    const numerosIniciais = gerarNumeros(qtde)
    const [numeros, setNumeros] = useState(numerosIniciais)
    return (
        <div className="Loteria">
            <h2>Mega</h2>
            <div>
                <label>Qtde de Numeros</label>
                <input
                    min = "6"
                    max = "15" 
                    type="number" value={qtde}
                    onChange={(e) => { 
                        setQtde(+e.target.value)
                        setNumeros(gerarNumeros(+e.target.value))
                    }}
                />
            </div>
            <h3>{numeros.join(' ')}</h3>
            <button onClick={_ => setNumeros(gerarNumeros(qtde))}>
                Gerar Números
            </button>
        </div>
    )
}
