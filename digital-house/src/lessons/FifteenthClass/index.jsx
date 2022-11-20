import { useEffect } from 'react'
import { useState } from 'react'
import { FifteenthClassIten } from '../../components/FifteenthClassIten'

import './style.scss'

export function FifteenthClass() {

    const [locations, setLocations] = useState([])
    const [cep, setCep] = useState('')
    const [erroForm, setErroForm] = useState(false)


    function searchCep(cepRecieved) {
        event.preventDefault()

        setCep(cepRecieved)

        if(cepRecieved.length === 8) {

            fetch(`https://viacep.com.br/ws/${cepRecieved}/json/`).then(
                response => {
                    response.json().then(
                        address => {

                            if(address.erro !== undefined) {

                                // Deu erro
                                setErroForm(true)
                            

                            } else {

                                // Deu Sucesso
                                setErroForm(false)
                                setLocations([...locations, address])

                            }
                        }
                    )
                }
            )

        }
    }


    function deleteLocation(currentLocation) {

        console.log(currentLocation.cep)

        locations.map(
            (location) => {
                if(location.cep === currentLocation.cep) {
                    setLocations(
                        locations.filter(
                            (currentLocation) => location.cep != currentLocation.cep
                        )
                    )
                }
            }
        )

        
    }

    return(

        <div className="fifteenth-class-iten-component">

            <form>

                <h1>Cadastrar endereços</h1>

                <div>
                    <label htmlFor="cep">Cep</label>
                    <input
                        id="cep"
                        type="number"
                        // value={cep}
                        onChange={event => setCep(event.target.value)}
                    />
                    {
                        erroForm ? (<span className='erroForm'>O CEP Digitado não foi encontrado na base de dados, por favor insira um CEP válido</span>) : null
                    }
                </div>

                <button value={cep} onClick={ event => searchCep(event.target.value)}>Cadastrar</button> 

            </form>

            <section className="locations">

                {
                    locations.map(
                        (location, index) => (
                            <FifteenthClassIten
                                key={index}
                                data={location}
                                onDeleteLocation={ currentLocation => deleteLocation(currentLocation)}
                            />
                        )  
                    )
                }

            </section>

        </div>

    )

}