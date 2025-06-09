import Quadrado from "../Quadrado/Quadrado.js";
import styles from "./ContainerQuadrado.module.css";
import dados from "../dados.json";


function ContainerQuadrado(){
  console.log(dados);
    return (
        <div className={styles["containerQuadrado"]}>
            {
                dados.map(dado => {
                    return <Quadrado key={dado.id} linkImg={dado.linkImg} descricao={dado.descricao} linkDestino={dado.linkDestino} id={dado.id}/>
                })
            }
        </div>
    )
}

export default ContainerQuadrado;