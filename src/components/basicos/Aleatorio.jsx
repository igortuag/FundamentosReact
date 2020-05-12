import React from 'react'

export default (props) => (
    <>
        <h2>Valor Aleatório</h2>
        <p>
            <strong> Valor Minimo: </strong> {props.min} <br />
            <strong> Valor Maximo: </strong> {props.max} <br />
            <strong> Valor Escolhido: </strong> {Math.floor(Math.random() * (props.max - props.min) + props.min)}
        </p>
    </>
)