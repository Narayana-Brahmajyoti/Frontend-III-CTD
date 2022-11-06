import './style.scss'
import backgroundBanner from './../../../assets/imgDHGames/img-backgound.png'
import aboboraHalloween from './../../../assets/imgDHGames/aboboraHalloween.png'
import morcegoHalloween from './../../../assets/imgDHGames/morcegoHalloween.png'

export function SectionBanner() {

    return (
        <section className='banner-section'>
            <div className='banner-section-caixa'>
                <img className='banner-section-background' src={backgroundBanner}></img>
                <img className='banner-section-icone1' src={morcegoHalloween} />
                <div className='banner-section-glassmorphism'>
                    <h1 className='banner-section-title'>PROMOS OU</h1>
                    <h3 className='banner-section-subtitulo'>DESCONTOZURAS?</h3>
                    <h4 className='banner-section-text1'>O trocadilho é ruim mas as promoções não!</h4>
                    <span className='banner-section-text2'>Aproveite as assombrosas ofertas de Halloween</span>
                </div>
                <img className='banner-section-icone2' src={aboboraHalloween} />
            </div>
        </section>
    )
}