import React from 'react'

import InventoryCard from './InventoryCard';



function Inventory( { inventoryList, onDeleteItem } ) { 
   
    const inventoryCard = inventoryList.map((inventory) => {
        return (
            <InventoryCard 
                key={inventory.id}
                inventory={inventory}
                onDeleteItem={onDeleteItem}
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