import estilo from '../css/Botao.module.css';


function Botao (props, logado = false) {
    return (
        <a href={props.goto} className={estilo.sign}>{props.descricao}</a>
    )
}

export default Botao;