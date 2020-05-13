import produtos from '../../data/produtos'
import './TabelaProdutos.css'

import React from 'react'

export default props => {

    const tabProdutos = produtos.map((produto, i) => {
        return (
        <tr key={produto.id} className={i % 2 == 0 ? 'Par' : 'Impar'}><td>{produto.id}</td><td>{produto.nome}</td><td>R$ {produto.preco.toFixed(2)}</td></tr>
        )
    })

    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr><th>Id</th><th>Nome</th><th>Preco</th></tr>
                </thead>
                <tbody>
                    {tabProdutos}
                </tbody>
            </table>
        </div>
    )
}