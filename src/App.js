import "./App.css";
import DetalhesQuadrado from "./components/DetalhesQuadrado/DetalhesQuadrado.js";
import About from "./routes/About.js";
import HomePage from "./routes/HomePage.js";
import NotFound from "./routes/NotFound.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/home/:id" element={<DetalhesQuadrado />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
