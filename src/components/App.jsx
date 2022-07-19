import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import Inventory from "./Inventory";
import AddItem from "./AddItem";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={ <HomePage />} />
        <Route path='/inventory' element={ <Inventory />} />
        <Route path='/add' element={ <AddItem />} />
      </Routes>
    </Router>
    
  );
}

export default App;
