import styles from './Navbar.module.css'
import React from 'react'
import logo from '../img/logo.png'
import iconeLogin from '../img/person-circle.svg'
import { Link } from 'react-router-dom'


function Navbar(){
    return (
        <>
            <div className= {styles.header}>
             <div className={styles.boxImg}>
            <img src={logo}alt={"ícone de Login"} className={styles.logo}/>
        </div>
        <div className={styles.boxA}>
            <Link to="/">Página Inicial</Link>
            <Link to="musicas">Músicas</Link>
            <Link to="filmes">Filmes</Link>
            <Link to="artes">Artes</Link>
            <Link to="livros">Livros</Link>
            <Link to="jogos">Jogos</Link>
        </div>
        <div className={styles.login}>
        <a href="#">
            <img src={iconeLogin} className="imgLogin" alt="login" />
        </a>
        </div>
        </div>
        </>
    )
}

export default Navbar;