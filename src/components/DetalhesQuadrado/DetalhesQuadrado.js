import styles from "./DetalhesQuadrado.module.css";
import dados from "../dados.json";
import { useParams } from "react-router-dom";

function DetalhesQuadrado() {
  const parametros = useParams();
  const quadrado = dados.find((dado) => dado.id === parametros.id);

  return (
    <div className={styles["pagina"]}>
      <div className={styles["detalhes"]}>
        <div className={styles["esquerda"]}>
          <img src={quadrado.linkImg} alt={quadrado.descricao} />
        </div>
        <div className={styles["direita"]}>
          <p className={styles["descricao"]}>{quadrado.descricao}</p>
          <a
            href={quadrado.linkDestino}
            target="_blank"
            rel="noopener noreferrer"
            className={styles["link"]}
          >
            {quadrado.linkDestino}
          </a>
        </div>
      </div>
    </div>
  );
}

export default DetalhesQuadrado;
