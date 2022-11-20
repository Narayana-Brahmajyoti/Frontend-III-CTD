import { useState } from "react"
import { FourteenthClassIten } from "../../components/FourteenthClassIten"
import './style.scss'

export function FourteenthClass() {

    const registers = [
        { id: 1, title: 'Primeiro registro' }
    ]


    const [registerListVisible, setRegisterListVisible] = useState(true)

    function deleteRegisterFromList() {

               console.log('Registro deletado')

    }

    return (
        <body className="fourteenth-class-iten-component">
            <main >
                <h1>Lista de Registros</h1>

                <button onClick={() => setRegisterListVisible(!registerListVisible)}>{`${registerListVisible ? 'Ocultar' : 'Mostrar'} Lista`}</button>

                {

                    // Verificação se o State que controla a visibilidade da Lista é True
                    registerListVisible ? (

                        <ul>
                            {
                                // Map utilizando o Array "registers"
                                registers.map(
                                    register => {
                                        return (
                                            <FourteenthClassIten
                                                key={register.id}
                                                registerData={register}
                                                deleteRegister={(registerReturned) => deleteRegisterFromList(registerReturned)}
                                            />
                                        )
                                    }
                                )
                            }
                        </ul>

                    ) : (

                        <p>A lista está oculta</p>

                    )

                }
            </main>

        </body>
    )
}
