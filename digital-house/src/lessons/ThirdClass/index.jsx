import './style.scss'
import batataGif from './../../assets/images/batata.gif'

export function ThirdClass() {

    const title = 'Teste'
    const components = [
        { name: 'Component Card', description: 'Descrição', image: 'http://pa1.narvii.com/6203/b19ab0278cb42d6c11e6ac6c3c4f2824dc593def_00.gif' },
        { name: 'Component Card 2', description: 'Descrição 2', image: batataGif },
        { name: 'Component Card 3', description: 'Descrição 3', image: '' },
        { name: 'Component Card 4', description: 'Descrição 4', image: '' }
    
    
    ]

    return(
        <div className='main-ThirdClass'>
            {/* <img src={batataGif} /> */}
            <h1>Lista de componentes encontrados no sistema</h1>
            <ul className='ulComponent'>
                {
                    components.map( component => (
                        <li>
                            <img src={ component.image }/>
                            <h1>{ component.name }</h1>
                            <p>{ component.description }</p>
                        </li>
                    ))    
                }
                
            </ul>
        </div>
    )

}