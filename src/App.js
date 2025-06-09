import "./App.css";
import ContainerQuadrado from "./components/ContainerQuadrado/ContainerQuadrado.js";
import DetalhesQuadrado from "./components/DetalhesQuadrado/DetalhesQuadrado.js";
import Header from "./components/Header/Header.js";

function App() {
  return (
    <>
      {console.log(window.location)}

      <DetalhesQuadrado />
      <Header />
      <ContainerQuadrado />
      <footer> adadda</footer>
    </>
  );
}

export default App;
