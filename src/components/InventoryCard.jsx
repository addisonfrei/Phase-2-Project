import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const InventoryCard = ( { inventory, onDeleteItem } ) => {
    const { id, name, price, image } = inventory

    function handleItemDelete() {
        fetch(`http://localhost:3000/inventory/${id}`, {
            method: 'DELETE',
        })
            .then(r => r.json())
            .then(() => onDeleteItem(inventory))
    }

  return (
    <Card sx={{maxWidth: 635}} variant="outlined" key={id} >
        <CardContent>
            <h1>{name}</h1>
            <h3>${price}</h3>
            <img 
                src={image} 
                alt={name} 
                height='500px' 
                width='600px' 
                className='center'
            />
        </CardContent>
        <CardActions>
            <Button size="small">Edit</Button>
            <Button id="delete" size="small" onClick={handleItemDelete}>Delete</Button>
        </CardActions>
    </Card>
  )
}

export default InventoryCard