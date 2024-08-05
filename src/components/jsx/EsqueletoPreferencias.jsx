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
      const [inImg, setImg] = useState(null);
      const handleImgChange = (e) => {
        if (e.target.files){
          setImg(URL.createObjectURL(e.target.files[0]));
        }
      };

const addObjeto = () => {
  if(inLink == "" || inImg == ""){
    outMsg.innerHTML = "Preencha todos os dados";
  }else{
    outMsg.innerHTML = nomeDaPagina + " foi salvo!"
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
        setdivQuadrado([...divQuadrado,<Link className={styles.squareLink} to={ inLink}target="_blank" rel="noopener noreferrer"><div className="square" key={cont}> <img src={inImg} /> </div> </Link>]);

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
          <p>Digite um Link de {nomeDaPagina}:
            <input type="text"
            value={inLink} 
            placeholder="ex: https://youtube.com/blabla" className={styles.inputlink}
            onChange={(e) => setLink(e.target.value)}
            /></p>
          <p>Insira uma Imagem:</p>
          <input type="file" accept="image/*" className={styles.inputimg} onChange={handleImgChange} />
          <button type="submit" className={styles.botao} onClick={() => {addObjeto();}}>Salvar</button>
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


