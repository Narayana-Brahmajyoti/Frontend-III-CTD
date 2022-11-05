import './style.scss'
import backgroundBanner from './../../../assets/imgDHGames/img-backgound.png'

export function SectionBanner() {

    return (
        <section className='banner'>
            <div className='banner-caixa'>
                <img className='banner-background' src={backgroundBanner}></img>
                <div>
                    <h1>PROMOS OU</h1>
                    <h2>DESCONTOZURAS?</h2>
                    <h4>O trocadilho é ruim mas as promoções não!</h4>
                    <span>Aproveite as assombrosas ofertas de Halloween</span>
                </div>
                
            </div>
        </section>
    )
}