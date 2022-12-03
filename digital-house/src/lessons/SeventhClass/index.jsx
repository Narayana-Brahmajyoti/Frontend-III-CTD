import { useState } from 'react'
import './style.scss'

export function SeventhClass() {

    //let contador = 0
    const [contador, setContador] = useState(0)

    const [temaClaro, setTemaClaro] = useState(false)

    function somarNumero(){
        
        setContador(contador + 1)

    }

    function mudarTema(){
        
        setTemaClaro(!temaClaro)

    }

    return(

        <main className={ `setima-aula-component-contador ${temaClaro ? 'lightTheme': 'darkTheme'}` }>

            <h1>Contador</h1>

            <button onClick={() => somarNumero()}>Adicionar</button>
            <span>Número atual: {contador}</span>

            <button onClick={mudarTema}>Mudar Tema</button>

        </main>

    )


}