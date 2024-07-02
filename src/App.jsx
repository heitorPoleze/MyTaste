import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/jsx/Navbar';
import Footer from './components/jsx/Footer';

function App() {
  return (
   <>
   <Navbar/>
   <Outlet/>
   <Footer/>
   </>
  );
}

export default App;
