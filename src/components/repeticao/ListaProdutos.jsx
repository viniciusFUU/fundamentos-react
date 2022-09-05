import React from "react";
import produtos from "../../Data/produto"
import './TabelaProdutos.css'

export default props =>{
    const lista = produtos.map((produto, i) => {
        return (
            <tr key={produto.id} className={i % 2 == 0 ? 'Par' : 'Impar'}>
                <td>{produto.id})</td>
                <td>{produto.produto}</td>
                <td>{produto.preco.toFixed(2).replace('.', ',')} R$</td>
            </tr>
        )
    })

    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {lista}
                </tbody>
            </table>
        </div>
    )
}