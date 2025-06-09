import style from './Botao.module.css';


function Botao (props, logado = false) {
    return (
        <a href={props.goto} className={style.sign}>{props.descricao}</a>
    )
}

export default Botao;