import { Link, Outlet } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'

import './style.scss'


export function MainLayout(){

    let contents = {
        english: {},
        portuguese: {},
    }

    // Importação do Tema utilização do Hook customizado "useTheme"
    const { theme, text } = useTheme()
    // const { text } = useText() ${text}

    return (
        // Alteração da Classe baseado no valor do Tema
        <div className={`main-layout-component ${theme} ${text ? 'big-text' : ''}`}>
            <header className='main-layout-component-header'>
                <h1 className='title has-shown'>Frontend III - React</h1>
            </header>
            <aside className='main-layout-component-aside'>
                <section>
                    <h1>Aulas</h1>
                    <ul className="ul-aulas">
                        <li>
                            <Link to="segunda-aula">Segunda Aula</Link>
                        </li>
                        <li>
                            <Link to="terceira-aula">Terceira Aula</Link>                        </li>
                        <li>
                            <Link to="quarta-aula">Quarta Aula</Link>
                        </li>
                        <li>
                            <Link to="quinta-aula">Quinta Aula</Link>
                        </li>
                        {/* <li>
                            <Link to="mesa-quinta-aula">Mesa Quinta Aula</Link>
                        </li> */}
                        <li>
                            <Link to="setima-aula">Sétima Aula</Link>
                        </li>
                        <li>
                            <Link to="mesa-setima-aula">Mesa Sétima Aula</Link>
                        </li>
                        <li>
                            <Link to="decima-terceira-aula">Decima Terceira Aula</Link>
                        </li>
                        <li>
                            <Link to="mesa-decima-terceira-aula">Mesa Decima terceira Aula</Link>
                        </li>
                        <li>
                            <Link to="decima-quarta-aula">Decima Quarta Aula</Link>
                        </li>
                        <li>
                            <Link to="decima-quinta-aula">Decima Quinta Aula</Link>
                        </li>
                        <li>
                            <Link to="dh-games">DHGames</Link>
                        </li>
                        <li>
                            <Link to="challenges">Instagram TimeLine</Link>
                        </li>                        
                        {/* <li>
                            <Link to="login">Login</Link>
                        </li> */}
                    </ul>
                </section>
                <section>
                    <h1>Telas</h1>
                    <ul>
                        <li>
                           <Link to="to-do">ToDo</Link>
                        </li>
                        <li>
                            <Link to="configurations">Configurações</Link>
                        </li>
                    </ul>
                </section>
            </aside>
            <main className='main-layout-component-main'>
                <Outlet />
            </main>
        </div>        
    )
}