import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import InventoryContainer from "./InventoryContainer";
import AddItem from "./AddItem";

const App = () => {
  const [inventoryList, setInventoryList] = useState([])

  useEffect(() => {
      fetch('http://localhost:3001/inventory')
          .then(r => r.json())
          .then(data => setInventoryList(data))
  }, [])

  function handleAddItem(newObj) {
    const updatedInventory = [...inventoryList, newObj]
    setInventoryList(updatedInventory)
  }
  function handleDeleteItem(itemToDelete) {
    const updatedInventory = inventoryList.filter((inventory) => inventory.id !== itemToDelete.id)
    setInventoryList(updatedInventory)
  }

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route 
          path='/' 
          element={ <HomePage />} 
        />
        <Route 
          path='/inventory' 
          element={ <InventoryContainer inventoryList={inventoryList} onDeleteItem={handleDeleteItem}/>} 
        />
        <Route 
          path='/add' 
          element={ <AddItem onFormSubmit={handleAddItem} />} 
        />
      </Routes>
    </Router>
    
  );
}

export default App;
