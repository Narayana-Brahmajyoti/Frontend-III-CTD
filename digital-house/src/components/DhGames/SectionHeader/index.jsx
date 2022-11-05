import './style.scss';

export function SectionHeader(){

    return(
        <header className='header'>
            <div className='header-navbar-logo'>
                <h1><span className='header-navbar-logo-detalhe'>DH</span><span className='header-navbar-logo-text'>Games</span></h1>
            </div>
            <div className='header-navbar-menu'>

                <ul>
                    <li>
                        <a href="#" >STORE</a>
                    </li>

                    <li>
                        <a href="#" >LIBRARY</a>
                    </li>

                    <li>
                        <a href="#" >COMMUNITY</a>
                    </li>

                    <li>
                        <a href="#">ABOUT</a>
                    </li>

                    <li>
                        <a href="#">PROFILE</a>
                    </li>
                </ul>

            </div>

        </header>
    )
}