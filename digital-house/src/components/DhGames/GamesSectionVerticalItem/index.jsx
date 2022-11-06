import './style.scss';
import mac from '../../../assets/imgDHGames/mac.png'
import windows from '../../../assets/imgDHGames/windows.png'


export function GamesSectionVerticalItem(props){

    return (

        <div className={`games-section-vertical-item-component ${props.type === 'vertical' ? 'item-vertical' : 'item-card'}`}>

            <img className='game-picture' src={props.game.picture} />
            
            <div className='infos'>
                <h1 className='name'>{props.game.name}</h1>
                <img className='plataforms'src=
                    {
                        props.game.plataforms.map( 
                        
                            plataform => {
                                return(
                                    plataform === 'windows' ?  windows : mac
                                )
                            }

                        )
                    }
                
                />
                <span className='categories'>
                    {
                        props.game.categories.map(
                            category => {
                                return (
                                    <a href=''>{category}</a>
                                )
                            }
                        )
                    }
                </span>  
            </div>
            
            <span className='price'>{props.game.price}</span>
        </div>
    )
}