//Este componente deverá receber dados por Props e mostrar as Informações em Tela
// import './stylecard.scss'

export function Card (props) {

  function lightOrDark(color) {

    // If RGB --> Convert it to HEX: http://gist.github.com/983661
    color = +("0x" + color.slice(1).replace(
      color.length < 5 && /./g, '$&$&'
    ));

    let r = color >> 16;
    let g = color >> 8 & 255;
    let b = color & 255;

    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    let hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
  
    // Using the HSP value, determine whether the color is light or dark
    return hsp > 127.5
    
    
  
  }

  const tema = (cor) => {
    return lightOrDark(cor) ? 'section-card-horizontal-light' : 'section-card-horizontal-dark'
  }

  return (
    <div className={ ` ${tema(props.cardCor.cor)} cardU`} style={{backgroundColor:props.cardCor.cor }}>
      <span className="section-card-horizontal-span" >{props.cardCor.nome}</span>
      <h1 className="section-card-horizontal-title">{props.cardCor.cor}</h1>

    </div>
  )
}