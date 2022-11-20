import { useEffect, useState } from 'react'
import { PedidoPizza } from '../../components/PedidoPizza'

import './style.scss'

export function TableThirteenthClass() {

    const [pedido, setPedido] = useState('')
    
    const [formularioErro, setFormularioErro] = useState(false)
    const [allPedidos, setAllPedidos] = useState([])
    
    useEffect(
        () => {
            setTimeout(() => 
            {
                console.log('Componente atualizado')
            }, 2000)
        }
    ), [pedido]



    function adicionarPedido(event){
        event.preventDefault()

        const newItenPedido = {

            itemPedido: pedido,
            
        }

        if (pedido === '') {

            setFormularioErro(true)
            

        } else {

            setFormularioErro(false)

            setAllPedidos([...allPedidos, newItenPedido])

            setPedido('')
        
        }


    }

    function apagarPedido(event){

        alert('Seu pedido foi cancelado')

        setAllPedidos([])

    }

    

    return (

        <main>
            <form className={formularioErro ? 'form-error' : ''} onSubmit={event => adicionarPedido(event)}>

                <fieldset>
                    <legend>Pedido de Pizzas</legend>
                    
                    <label htmlFor="pedido" >Escreva o sabor desejado: </label>
                    <input id="pedido" type="text" value={pedido} onChange={event => setPedido(event.target.value)}/>
                    
                    <button type='submit'>Adicionar Pedido</button>
                    <button type='reset' onClick={event => apagarPedido()}>Cancelar Pedido</button>
                </fieldset>

                {
                    formularioErro ? (
                        <span>O pedido não pode estar vazio</span>
                    ) : null
                }
            </form>
                        
            <section className='pedidos'>
                <ul>
                
                    {
                        allPedidos.map(
                            pedido => {
                                return (
                                    <PedidoPizza
                                        pedidoData={pedido}
                                    />
                                )
                            }
                        )
                    }
                
                </ul>
            </section>
            
        </main>
    )

}