import './style.scss'
import testeImage from './../../assets/images/teste.jfif'
import batataGif from './../../assets/images/batata.gif'
import { FifthClassItem } from '../../components/FifthClassItem'
import { useTheme } from '../../hooks/useTheme'

export function FifthClass(){

    const { theme } = useTheme()
    const componentsFinded = [    
    
        {
            id: 1,
            title: 'Vídeo component',
            Image: testeImage,
            text: 'Descrição'

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
        <div className={`fifth-class-component ${theme}`}>

            <h1 className='main-title'>Componentes identificados</h1>
            
            <ul className='components-finded'>

                {
                    componentsFinded.map(
                        component => {
                            return(
                                <FifthClassItem 
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