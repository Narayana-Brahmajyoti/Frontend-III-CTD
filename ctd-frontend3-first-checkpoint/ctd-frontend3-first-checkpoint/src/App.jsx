
// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente

import { useState } from "react"
import { Card } from "./Card"

function App() {
  // Aqui você irá criar os Estados para manipular os Inputs
const [nomeCor, setNomeCor] = useState('')
const [corHexadecimal, setCorHexadecimal] = useState('')
const [listaCores, setListaCores] = useState([])


function adicionarCor(event){
  event.preventDefault()
  
  const novaCorCadastrada = {

    nome: nomeCor,
    cor: corHexadecimal
  }

  setListaCores([...listaCores, novaCorCadastrada])
  setNomeCor('')
  setCorHexadecimal('')

  console.log(novaCorCadastrada)

}

  return (
    <main>
      <div className="App" onSubmit={event => adicionarCor(event)}>
        <h1>ADICIONAR NOVA COR</h1>
        <form>
        <div>
              <label htmlFor="nomeCor">Nome: </label>
              <input id='nomeCor' type="text" value={nomeCor} onChange={event => setNomeCor(event.target.value)}/>
            </div>
            <div>
              <label htmlFor="corHexadecimal">Cor: </label>
              <input id='corHexadecimal' type="text" value={corHexadecimal} onChange={event => setCorHexadecimal(event.target.value)}/>
            </div>
            <button type="submit">ADICIONAR</button>
          
        </form>
      </div>
      <section>
        <h1>CORES FAVORITAS</h1>
          {
            listaCores.map(
              card => {
                return(
                  <Card 
                    key = {card.id}
                    cardCor = {card}

                  />
                )
              }


            )
          }  
      </section>
    </main>
  )
}

export default App