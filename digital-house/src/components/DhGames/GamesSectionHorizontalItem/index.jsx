import './style.scss';

export function GamesSectionHorizontalItem(props){

    return (

        <div className={`games-section-horizontal-item-component ${props.type === 'vertical' ? 'item-vertical' : 'item-card'}`}>

            <img className='game-picture' src={props.game.picture} />
            
            <div className='infos'>
                <h1 className='name'>{props.game.name}</h1>
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
            
            <span>{props.game.oldPrice}</span>
            <span>{props.game.price}</span>

        </div>
    )
}