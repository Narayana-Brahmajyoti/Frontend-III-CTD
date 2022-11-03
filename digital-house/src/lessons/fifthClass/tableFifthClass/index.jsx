import './style.scss'
// import testeImage from './../../../assets/images/teste.jtif'
// import batataGif from './../../../assets/images/batata.gif'
import { TableFifthClassItem } from '../../../components/FifthClassItem/TableFifthClassItem'

export function TableFifthClass(){

    const componentsFinded = [    
    
        {
            id: 1,
            title: 'Header',
            Image: testeImage,
            text: 'Nabvar'

        },
        {
            id: 2,
            title: 'Input component',
            Image: batataGif,
            text: 'Descrição '

        },
        {
            id: 3,
            title: 'Buttom component',
            Image: batataGif,
            text: 'Descrição '
        }
    
    ]

    return(
        <div className='fourth-class-component'>

            <h1 className='main-title'>Mesa Quinta Aula</h1>
            <h2>Projeto escolhido: Netflix</h2>
            
            <ul className='components-finded'>

                {
                    componentsFinded.map(
                        component => {
                            return(
                                <TableFifthClassItem
                                    key={component.id} 
                                    item={component} 
                                />
                            )
                        }
                    )
                }
                
                
            </ul>
        </div>
        
    )
}