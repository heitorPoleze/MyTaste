// ROTAS
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PaginaInicial from "./components/jsx/PaginaInicial";
import Musica from "./components/jsx/Musica";
import ErrorPage from "./components/jsx/ErrorPage";
import Filmes from "./components/jsx/Filmes";
import Artes from "./components/jsx/Artes";
import Livros from "./components/jsx/Livros";
import Jogos from "./components/jsx/Jogos";


const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement: <ErrorPage/>,
        children:[
    {
        path:"/",
        element: <PaginaInicial/>
    },     
    
    {
        path:"musicas",
        element:<Musica/>
    },
    {
        path: "filmes",
        element: <Filmes/>
    },
    {
        path: "artes",
        element: <Artes/>
    },
    {
        path: "livros",
        element: <Livros/>
    },
    {
        path: "jogos",
        element: <Jogos/>
    }
]}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
