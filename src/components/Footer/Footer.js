import Botao from "../Botao/Botao";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <>
        <footer>
            <div className={styles["left"]}> 
                <p>© Heitor Poleze, 2025</p>
                <p>Todos os direitos reservados</p>
            </div>
            <div className={styles["center"]}>
               <a href="https://www.linkedin.com/in/heitor-poleze-coelho-dias-8ab2762b3/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
               <a href="https://github.com/heitorPoleze" target="_blank" rel="noopener noreferrer">GitHub</a>
               <a href="https://www.instagram.com/heitor.poleze/" target="_blank" rel="noopener noreferrer">Instagram</a>
               
                
            </div>
            <div className={styles["right"]}>
                <Botao goto="/about" descricao="Sobre Mim"/>
                <a href="">Código Fonte</a>
            </div>
        </footer>
        </>
        )
    }

    export default Footer;