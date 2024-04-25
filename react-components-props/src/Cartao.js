import React from 'react'
import './style/styles.css'

const Cartao = (props) => {
    return (
        <div className="card" id='card-top'>
            {/* cabeçalho do cartão */}
            <div className="card-header" id='card-top-text'>{props.cabecalho}</div>
            {/* corpo do cartão */}
            <div className="card-body" id='card-body' >
                {props.children}
            </div>
        </div>
    )
}
export default Cartao;