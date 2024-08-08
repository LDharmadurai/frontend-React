import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import NewItem from './components/NewItem';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/new" element = {<NewItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
