import "./App.css";
import About from "./routes/About.js";
import HomePage from "./routes/HomePage.js";

function App() {
//FAZER ROUTES
  let page = window.location.pathname;
  switch (page) {
    case "/":
      page = <HomePage />;
      break;
    case "/about":
      page = <About />;
      break;
    default:
      page = <HomePage />;
  }

  return page;
}

export default App;
