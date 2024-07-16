import React from "react";
import styles from "../css/EsqueletoPreferencias.module.css";
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';


function EsqueletoPreferencias() {
  /*
    const darNomeAPagina = (nomeDaPagina) => {
      var h1TopBlock = document.getElem("h1TopBlock");
      h1TopBlock.textContent = nomeDaPagina;
    }*/
      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      
  return (
    <>
    
      <Offcanvas show={show} onHide={handleClose}className = {styles.blabla}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><p>Nova Música:</p></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>Link da Música: <input type="text" id="inLinkDaMusica" placeholder="ex: youtube.com/blabla"/></p>
          <p>Insira uma Imagem: <input type="text" id="inImg" placeholder="como q eu vou fazer isso"/> </p>
          <button type="submit" id="btSalvar">Salvar</button>
          <p id="outMsg"></p>
        </Offcanvas.Body>
      </Offcanvas>

      <div className={styles.wrap}>
      <div className={styles.content}>

          <div className={styles.topBlock}>
            <h1 id="h1TopBlock"></h1>
          </div>

        <div className={styles.squareContainer}>

          <div className={styles.square} onClick={handleShow}></div>
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
};

export default EsqueletoPreferencias;

const inLinkDaMusica = document.getElementById("inLinkDaMusica");
const inImg = document.getElementById("inImg");
const btSalvar = document.getElementById("btSalvar");
const outMsg = document.getElementById("outMsg");

btSalvar.addEventListener("click", function(){
  if(inLinkDaMusica.value == "" || inImg.value == ""){
    outMsg.textContent = "Preencha todos os campos"
  }
}
)
