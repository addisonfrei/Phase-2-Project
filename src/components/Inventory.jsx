import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';



function Inventory( { inventory } ) {
   
    
    const signs = inventory.map((inventory) => {
        return (
            <Card sx={{maxWidth: 635}} variant="outlined" key={inventory.id} >
                <CardContent>
                    <h1>{inventory.name}</h1>
                    <h3>${inventory.price}</h3>
                    <img 
                        src={inventory.image} 
                        alt={inventory.name} 
                        height='500px' 
                        width='600px' 
                        className='center'
                    />
                </CardContent>
                <CardActions>
                    <Button size="small">Edit</Button>
                    <Button id="delete" size="small" onClick={() => console.log('Delete')}>Delete</Button>
                </CardActions>
            </Card>
        )
    })
    
  return (
    <div>
        <h1>Inventory</h1>
        {signs}
    </div>
  )
}

export default Inventory