import { useTheme } from "../../hooks/useTheme"

export function Configurations() {

    // Utilização do Hook useTheme
    const { theme, changeTheme, text , changeText } = useTheme()
    // const { text , changeText} = useText()

    return (

        <div>

            <h1>Configurações</h1>

            <form>

                <section>

                    <h1>Tema</h1>

                    <div>
                        <input type="radio" name="theme" id="light" checked={theme === 'light'} onChange={() => changeTheme('light')} />
                        <label htmlFor="light">Claro</label>
                    </div>

                    <div>
                        <input type="radio" name="theme" id="dark" checked={theme === 'dark'} onChange={() => changeTheme('dark')} />
                        <label htmlFor="dark">Escuro</label>
                    </div>

                    <div>
                        <input type="radio" name="theme" id="hight-contrast" checked={theme === 'hight-contrast'} onChange={() => changeTheme('hight-contrast')} />
                        <label htmlFor="">Alto Contraste</label>
                    </div>

                </section>

                <section>

                    <h1>Acessibilidade</h1>

                    <div>
                        <input type="checkbox"   onChange={() => changeText()}/>
                        {/* <input type="checkbox" id="big-text" checked={text === 'big-text'} onChange={() => changeText('big-text')}/> */}
                        <label htmlFor="language">Letras grandes</label>
                    </div>

                </section>

                {/* <section>

                    <h1>Linguagem</h1>

                    <div>
                        <label htmlFor="language">Linguagem</label>
                        <select
                            id="language"
                            onChange={event => changeCurrentLanguage(event.target.value)}
                            value={currentLanguage}
                        >
                            <option value="portuguese">Portugues</option>
                            <option value="english">English</option>
                            <option value="russian">Russo</option>
                        </select>
                    </div>

                </section> */}

            </form>

        </div>

    )

}