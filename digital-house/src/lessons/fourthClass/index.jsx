import './style.scss'
import testeImage from './../../assets/images/teste.jfif'
import batataGif from './../../assets/images/batata.gif'

export function FourthClass(){

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
        <div className='fourth-class-component'>
            <h1 className='main-title'>Componentes identificados</h1>
            <h2>Site - <a href={"https://www.starplus.com/en-br"} target={"_blank"} >Star+</a> </h2>
            <br/>
            <ul className='components-finded'>

                {
                    componentsFinded.map(
                        component => {
                            return(
                                <li key={component.id}>
                                    <img src={component.Image} alt='' />
                                    <h1>{component.title}</h1>
                                    <p>{component.text}</p>
                                </li>
                            )
                        }
                    )
                }
                
                
            </ul>
        </div>
        
    )
}