import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
   <>
   <Navbar/>
   <Outlet/>
   <p>Footer</p>
   </>
  );
}

export default App;
