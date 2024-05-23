import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer (){
    return(
        <>
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.linha}>
                    <div className={styles.footer}>
                        <h1 className={styles.titulos}>Sobre o site</h1>
                        <ul>
                            <li><Link to="/" className={styles.fonte}>Sobre nós</Link></li>
                            <li><Link to="/" className={styles.fonte}>Nossos serviços</Link></li>
                            <li><Link to="/"className={styles.fonte}>O que utilizamos</Link></li>
                            <li><Link to="/" className={styles.fonte}>Política de privacidade</Link></li>
                        </ul>
                    </div>
                    <div className={styles.footer}>
                        <h1 className={styles.titulos}>Suporte</h1>
                        <ul>
                            <li><Link to="/" className={styles.fonte}>FAQ</Link></li>
                            <li><Link to="/" className={styles.fonte}>Nos contate</Link></li>
                            <li><Link to="/" className={styles.fonte}>Ajuda</Link></li>
                            <li><Link to="/" className={styles.fonte}>Acessibilidade</Link></li>
                        </ul>
                    </div>
                    <div className={styles.footer}>
                        <h1 className={styles.titulos}>Nos siga nas redes  socias</h1>
                        <div className={styles.socialmedia}>
                        <ul>
                            <li><Link to="https://www.instagram.com/heitor.poleze/" target="_blanck">Instagram</Link></li>
                            <li><Link to="https://www.linkedin.com/in/heitor-poleze-coelho-dias-8ab2762b3/" target="_blanck">Linkedin</Link></li>
                            <li><Link to="https://github.com/heitorPoleze" target="_blanck">Github</Link></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
}
export default Footer;