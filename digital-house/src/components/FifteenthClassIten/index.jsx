import { useState } from 'react'
import './style.scss'

export function FifteenthClassIten(props) {

    console.log(props)

    return(
        <div className="fifteenth-class-iten">
            <h1 contentEditable="true">Nome do Endereço</h1>
            <address>{props.data.logradouro}, {props.data.bairro} - {props.data.localidade}({props.data.uf})</address>
            <small>{props.data.cep}</small>
            <button onClick={() => props.onDeleteLocation(props.data)}>Deletar</button>
        </div>
    )

}