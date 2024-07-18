import React from "react";
import styles from "../css/EsqueletoPreferencias.module.css";
import "../css/styles.css";
import { useState, useRef} from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

let vetorQuadrado = [];
let cont = 0;
function EsqueletoPreferencias({nomeDaPagina}) {
      const squareContainer = useRef(null);
      const [divQuadrado, setdivQuadrado] = useState([]);

      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      const [inLink, setLink] = useState("");
      const [inImg, setImg] = useState("");

const addObjeto = () => {
  if(inLink == "" || inImg == ""){
    outMsg.innerHTML = "Preencha todos os dados";
  }else{
    cont++;
    setLink("");
    setImg("");
    class Quadrado{
      constructor(link, img){
        this.link = link;
        this.img = img;
      }
    }
    let newQuadrado = new Quadrado (inLink, inImg);
    vetorQuadrado.push(newQuadrado);
    for(let i = 0; i <  vetorQuadrado.length; i++){
      if(squareContainer.current){
        setdivQuadrado([...divQuadrado,<Link className={styles.squareLink} to={"https://" + inLink}target="_blank" rel="noopener noreferrer"><div className="square" key={cont}> </div> </Link>]);

      };
      console.log(vetorQuadrado[i]);
    }

  
  }
}


      
  return (
    <>
    
      <Offcanvas show={show} onHide={handleClose}className = {styles.blabla}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><p>Nova {nomeDaPagina}:</p></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>Digite Link de{nomeDaPagina}:
            <input type="text" 
            value={inLink} 
            placeholder="ex: youtube.com/blabla"
            onChange={(e) => setLink(e.target.value)}
            /></p>
          <p>Insira uma Imagem: <input
           type="text" 
          value={inImg}
           placeholder="como q eu vou fazer isso"
           onChange={(e) => setImg(e.target.value)}
           /> </p>
          <button type="submit" onClick={() => {addObjeto(); handleClose();}}>Salvar</button>
          <p id="outMsg"></p>
        </Offcanvas.Body>
      </Offcanvas>

      <div className={styles.wrap}>
      <div className={styles.content}>

          <div className={styles.topBlock}>
            <h1>{nomeDaPagina}</h1>
          </div>

        <div className={styles.squareContainer} ref={squareContainer}>
          {divQuadrado}
          <div className="square add" onClick={handleShow}>+</div>
          

        </div>
      </div>
    </div>

    </>
  );
  
};

export default EsqueletoPreferencias;

