import styles from "../css/DetalhesQuadrado.module.css";
import dados from "../dados.json";
const quadrado = dados.filter(
  (dado) => dado.id === window.location.pathname.slice(1)
);
function DetalhesQuadrado() {
  return (
    <>
      <div className={styles["detalhes"]}>
        <h2>Detalhes da preferência</h2>
        {quadrado.map((dado) => {
          return (
            <div className={styles["espaco"]}>
              <div className={styles["esquerda"]}>
                <img src={dado.linkImg} alt={dado.descricao} />
              </div>
              <div className={styles["direita"]}>
                <p>{dado.descricao}</p>
                <a href={dado.linkDestino} target="_blank" rel="noopener noreferrer">
                  {dado.linkDestino}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default DetalhesQuadrado;
