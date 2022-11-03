import { VerticalGamesItem } from '../../components/DhGames/VerticalGamesItem'
import { newGames } from './games'
import './style.scss'


export function DHGames(){
    return (
        <div>
            <section>
                <h2>New Games</h2>
                
                {
                    newGames.map(
                        sectionNewGame => {
                            return(
                                <VerticalGamesItem 
                                    
                                    item={sectionNewGame}
                                />
                            )
                        }
                    )
                }
            </section>
        </div>
    )
}