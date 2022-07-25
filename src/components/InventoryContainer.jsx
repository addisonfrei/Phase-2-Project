import React, { useState, useEffect } from 'react'

import InventoryCard from './InventoryCard';



function Inventory( { inventoryList } ) { 
   
    const inventoryCard = inventoryList.map((inventory) => {
        return (
            <InventoryCard 
                key={inventory.id}
                inventory={inventory}
            />
        )
    })
    


  return (
    <div>
        <h1>Inventory</h1>
        {inventoryCard}
    </div>
  )
}

export default Inventory