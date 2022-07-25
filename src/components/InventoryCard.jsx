import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
        <Card >
          <CardContent>
            <img 
                src={image} 
                alt={name} 
                height='500px' 
                width='600px' 
                //className='center'
            />
          </CardContent>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Edit</Button>
            <Button size="small" onClick={handleItemDelete}>Delete</Button>
          </CardActions>
        </Card>
      );
}

export default InventoryCard

