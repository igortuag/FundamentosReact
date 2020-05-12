import React from 'react'

export default function ComParametro(props) {
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'
    const notaInt = Math.ceil(props.nota)
    return (
        <div>
            <p>
                <h2>{props.titulo}</h2>
                <h3><strong>{props.aluno}</strong></h3>
                <h3>Nota: {notaInt}</h3>
                Está:
                <strong> {status}</strong>!
            </p>
        </div>
    )
}