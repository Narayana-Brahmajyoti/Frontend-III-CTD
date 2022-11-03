import './style.scss';

export function VerticalGamesItem(props){

    return (

        <li>
            <img src={props.sectionNewGame.picture} />
            <h3>{props.sectionNewGame.name}</h3>
            <img src={props.sectionNewGame.plataforms}/>
            <span>{props.sectionNewGame.categories}</span>
            <span>{props.sectionNewGame.price}</span>
        </li>
    )
}