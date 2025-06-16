import "./App.css";
import About from "./components/routes/About.js";
import HomePage from "./components/routes/HomePage.js";
import NotFound from "./components/routes/NotFound.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
