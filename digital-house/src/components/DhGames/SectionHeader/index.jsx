import './style.scss';

export function SectionHeader(){

    return(
        <header className='header'>
            <div className='header-navbar-logo'>
                <h1 className='header-h1'><span className='header-navbar-logo-detalhe'>DH</span><span className='header-navbar-logo-text'>GAMES</span></h1>
            </div>
            <div className='header-navbar-menu'>

                <ul className='header-ul'>
                    <li className='header-li-store'>
                        <a className='header-a-store' href="#" >STORE</a>
                    </li>

                    <li className='library'>
                        <a href="#" >LIBRARY</a>
                    </li>

                    <li className='community'>
                        <a href="#" >COMMUNITY</a>
                    </li>

                    <li className='about'>
                        <a href="#">ABOUT</a>
                    </li>

                    <li className='profile'>
                        <a href="#">PROFILE</a>
                    </li>
                </ul>

            </div>

        </header>
    )
}