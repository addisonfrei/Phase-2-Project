import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import Inventory from "./Inventory";
import AddItem from "./AddItem";

const App = () => {
  const [inventory, setInventory] = useState([])

  useEffect(() => {
      fetch('http://localhost:3000/inventory')
          .then(r => r.json())
          .then(data => setInventory(data))
  }, [])

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={ <HomePage />} />
        <Route path='/inventory' element={ <Inventory inventory={inventory}/>} />
        <Route path='/add' element={ <AddItem />} />
      </Routes>
    </Router>
    
  );
}

export default App;
