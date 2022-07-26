import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import InventoryContainer from "./InventoryContainer";
import AddItem from "./AddItem";
import Login from "./Login";

const App = () => {
  const [inventoryList, setInventoryList] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)

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
  console.log(isLoggedIn)

  return (
    <Router>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
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
        <Route 
          path='/login' 
          element={ <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} 
        />
      </Routes>
    </Router>
    
  );
}

export default App;
