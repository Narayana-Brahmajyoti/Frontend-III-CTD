import { useState, useEffect } from "react"
import './style.scss'


export function ThirteenthClass(){
    
    //hook
    const [contador, setContador] = useState(0)
    const [userName, setUserName] = useState('')
    const [userNameError, setUserNameError] = useState(false)
    const [errorForm, setErrorForm] = useState(false)
    const [temaClaro, setTemaClaro] = useState(false)
    
    function adicionar(){
        
        setContador(contador + 1)
        console.log(contador)
    }

    // function validarNome() {

    //     setErrorForm(!errorForm)
        
        

    // }


    //Validar a quantidade de cararacteres
    useEffect(
        () => {

            if(userName.length > 10) {

                setUserNameError(true)

            } else {

                setUserNameError(false)
                
            }

        }, [userName]

    )

    //Validar nome
    // useEffect(
    //     () => {

    //         if(errorForm) {

    //             console.log('Existe erro')

    //         } else {

    //             console.log('Não existe erro')

    //         }

    // }, [errorForm])

    function mudarTema(){
        
        setTemaClaro(!temaClaro)

    }

    return(
        <main className={`thirteenth-class-component-contador ${temaClaro ? 'lightTheme': ''}`}>
            
            <div className="form">
                <label htmlFor="nome">Digite seu nome: </label>
                <input id="nome" type="text" value={userName} onChange={event => setUserName(event.target.value)}/>
                { userNameError ? (<small>O campo Nome contém mais do que 10 caracteres</small>) : null }
            </div>
            
            <div>
            <p>O valor do Contador é: {contador}</p>
            <button onClick={() => adicionar()}>Atualizar contador</button>
            {/* <button onClick={() => validarNome()}>Validar</button> */}
            
            <button onClick={mudarTema}>Mudar Tema</button>

            </div>

        </main>
    )


}