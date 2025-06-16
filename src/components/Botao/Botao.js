import { Link } from 'react-router-dom';
import style from './Botao.module.css';


function Botao (props, logado = false) {
    return (
        <Link to={props.goto} className={style.sign}>{props.descricao}</Link>
    )
}

export default Botao;