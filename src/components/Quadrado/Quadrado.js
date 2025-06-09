import styles from "./Quadrado.module.css";

function Quadrado(props){
    console.log(props);
    return(
        <div className={styles["quadrado"]} id={props.key}>
            <a href={`/${props.id}`}>
            <img src={props.linkImg} alt={props.descricao}/>
            </a>
            <hr/>
            <a className = {styles["descricao"]} href={props.linkDestino} target="_blank" rel="noopener noreferrer" >
            {props.descricao.slice(0, 60)} 
            </a>
        </div>
    )
}

export default Quadrado;