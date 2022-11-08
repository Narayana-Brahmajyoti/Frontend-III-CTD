//Este componente deverá receber dados por Props e mostrar as Informações em Tela

export function Card (props) {
  return (
    <div className="card">
      <span>{props.cardCor.nome}</span>
      <h1>{props.cardCor.cor}</h1>

    </div>
  )
}