import Botao from "../components/Botao/Botao";
import Header from "../components/Header/Header";

function NotFound (){
    return(
        <>
        <Header/>
        <main>
            <h1>404 not found</h1>
            <Botao goto="/" descricao="Home"/>
        </main>
        </>
    )
}

export default NotFound;