import styles from "./PreencheQuadrado.module.css";
function PreencheQuadrado() {
    return (
     <div className={styles["form-container"]}>
        <form enctype="multipart/form-data"> 

            <label>Descrição: </label>
            <input type="text" name="inpDescricao" key={"inpDescricao"} placeholder="Digite uma descrição"></input>

            <label>Upload da Imagem: </label>
            <input type="file" name="inpImagem" key={"inpImagem"} accept="image/*"></input>

            <label>Link de Destino: </label>
            <input type="text" name="inpDestino" key={"inpDestino"} placeholder="https://www.google.com"></input>

            <button type="submit">Enviar</button>
        </form>
     </div>      
    )
}

export default PreencheQuadrado;
