import produtos from '../../data/produtos'

import React from 'react'

export default props => {

    const tabProdutos = produtos.map(produto => {
        return (
                <tr><td>{produto.nome}</td><td>{produto.preco}</td></tr>
        )
    })

    return (
        <table>
            <tr><td>Nome</td><td>Preco</td></tr>
            {tabProdutos}
        </table>
    )
}