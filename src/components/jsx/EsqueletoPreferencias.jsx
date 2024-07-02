import React from "react";
import styles from "../css/EsqueletoPreferencias.module.css";

function EsqueletoPreferencias(titulo){

  const darNomeAPagina = (nomeDaPagina) => {
    var h1TopBlock = document.getElem("h1TopBlock");
    h1TopBlock.textContent = nomeDaPagina;
  }
    return(
        <>

<div className={styles.wrap}>

<div className={styles.content}>
    
  <div className={styles.topBlock}>
    <h1 id="h1TopBlock"></h1>
    </div>

  <div className={styles.squareContainer}>

                <div className={styles.square}></div>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
                <div className={styles.square}></div>

                                
                
              </div>
            </div>
        </div>

        </>
    );
}
export default EsqueletoPreferencias;