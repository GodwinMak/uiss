import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Home';
import {Routes, Route , BrowserRouter } from "react-router-dom"
import About from './Components/About';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Event from './Components/Events';
import Project from './Components/Project';
import Register from './Components/Register';



function App() {
    const [activeLink, setActiveLink] = React.useState('home');

  return (
    <BrowserRouter>
        <Header setActiveLink={setActiveLink} activeLink={activeLink}/>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/about' exact element={<About/>}/>
          <Route path='/event' exact element={<Event/>}/>
          <Route path='/project' exact element={<Project/>}/>
          <Route path='/register' exact element={<Register/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
