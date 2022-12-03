import { SectionBanner } from '../../components/DhGames/SectionBanner'
import { GamesSectionHorizontalItem } from '../../components/DhGames/GamesSectionHorizontalItem'
import { GamesSectionVerticalItem } from '../../components/DhGames/GamesSectionVerticalItem'
import { SectionHeader } from '../../components/DhGames/SectionHeader'
import { cheapGames, earlyAccessGames, halloweenGames, newGames } from './games.js'
import './style.scss'


export function DHGames(){

    return (

        <body className='dh-games-component'>

            <SectionHeader />
            <SectionBanner />

            <main className='dh-games-main-content'>

                <section className='games-section'>

                    <h1 className='games-section-title'>New Games</h1>

                    <section className='games'>  
                        {
                            newGames.map( 
                                game => {
                                    return(
                                        <GamesSectionVerticalItem 
                                            type='vertical'
                                            game={game}
                                        />
                                    )
                                }
                            )
                        }
                    </section> 

                </section>

                <section className='games-section-horizontal'>

                    <h1 className='games-section-title'>Halloween Offers</h1>

                    <section className='games'>  
                        {
                            halloweenGames.map( 
                                game => {
                                    return(
                                        <GamesSectionHorizontalItem 
                                            type='card'
                                            game={game}
                                        />
                                    )
                                }
                            )
                        }
                    </section> 

                </section>

                <section className='games-section'>

                    <h1 className='games-section-title'>Early Access Games</h1>

                    <section className='games'>  
                        {
                            earlyAccessGames.map( 
                                game => {
                                    return(
                                        <GamesSectionVerticalItem 
                                            type='vertical'
                                            game={game}
                                        />
                                    )
                                }
                            )
                        }
                    </section> 

                </section>

                <section className='games-section-horizontal'>

                    <h1 className='games-section-title'>Cheap Games</h1>

                    <section className='games'>  
                        {
                            cheapGames.map( 
                                game => {
                                    return(
                                        <GamesSectionHorizontalItem 
                                            type='card'
                                            game={game}
                                        />
                                    )
                                }
                            )
                        }
                    </section> 

                </section>


            </main>

        </body>
    )
}