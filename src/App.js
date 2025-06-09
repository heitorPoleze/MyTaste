import "./App.css";
import DetalhesQuadrado from "./components/js/DetalhesQuadrado.js";
import ContainerQuadrado from "./components/js/ContainerQuadrado.js";
import Header from "./components/js/Header.js";

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
