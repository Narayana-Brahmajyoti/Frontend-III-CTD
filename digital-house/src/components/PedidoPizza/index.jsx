
import './style.scss'

//Pedido de pizza
export function PedidoPizza(props){
    
    

    return (
        <div>
            
            <li>{props.pedidoData.itemPedido}</li>    
        </div>
    )
}