import styles from "./Header.module.css";
import Botao from "../Botao/Botao.js";
import { VscAccount } from "react-icons/vsc";
function Header() {

  const numeroRandomico = Math.random();

  const criaAlgo = () => {    
   console.log(numeroRandomico);
   if (numeroRandomico < 0.5) {
      return "Login";
    } 
    return <VscAccount className={styles["icon"]}/>;
  }

  return (
    <header className={styles["header"]}>
      <div className={styles["container"]}>
        <div className={styles["navleft"]}>
          <img src="#" alt="logo" className={styles["logo"]} />
        </div>


        <div className={styles["links"]}>
          <Botao goto="/" descricao="Home"/>
          <Botao goto="/" descricao="Músicas"/>
          <Botao goto="/" descricao="Jogos"/>
          <Botao goto="/" descricao="Filmes"/>
          <Botao goto="/" descricao="Livros"/>
          <Botao goto="/" descricao="Adicionar um tópico"/>
        </div>


        <div className={styles["navright"]}>
          <Botao goto="/" descricao={criaAlgo()} />
        </div>
      </div>
    </header>
  );
}

export default Header;
