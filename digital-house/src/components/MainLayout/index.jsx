import { Link, Outlet } from 'react-router-dom'

import './style.scss'


export function MainLayout(){

    return (
        
        <main className='main-layout-component'>
            <h1 className='title has-shown'>Frontend III</h1>
            <section>
                <header className='main-layout-component-header'>

                    <h1>Aulas</h1>

                    <ul className='navBar'>

                        <li>

                            <Link to="segunda-aula">Segunda Aula</Link>

                        </li>

                        <li>

                            <Link to="terceira-aula">Terceira Aula</Link>

                        </li>
                        <li>

                            <Link to="quarta-aula">Quarta Aula</Link>

                        </li>

                        <li>

                            <Link to="quinta-aula">Quinta Aula</Link>

                        </li>
                        <li>

                            <Link to="mesa-quinta-aula">Mesa Quinta Aula</Link>

                        </li>
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
                        <li>

                           <Link to="to-do">ToDo</Link>

                        </li>
                        <li>

                            <Link to="login">Login</Link>

                        </li>

                    </ul>

                </header>

                <div className='main-layout-component-main'>

                    {/* <p>O conteúdo será carregado aqui dentro:</p> */}

                    <Outlet />

                </div>
            </section>
        </main>

        
    )
}