import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PaginaInicial from "./components/PaginaInicial";
import Musica from "./components/Musica";
import ErrorPage from "./components/ErrorPage";
import Filmes from "./components/Filmes";
import Artes from "./components/Artes";
import Livros from "./components/Livros";
import Jogos from "./components/Jogos";


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
