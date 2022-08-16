import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

const InventoryCard = ( { inventory, onDeleteItem, isLoggedIn } ) => {
    let{ id, name, price, image, available } = inventory

    function handleItemDelete() {
        fetch(`http://localhost:3001/inventory/${id}`, {
            method: 'DELETE',
        })
            .then(r => r.json())
            .then(() => onDeleteItem(inventory))
    }
    
  return (
    <Card>
      <CardContent>
        <img 
            src={image} 
            alt={name} 
            height='500px' 
            width='600px' 
        />
      </CardContent>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body1">
          ${price}
        </Typography>
        {available === "Out of Stock" ? (
          <Typography variant="body2" color="red">
            {available}
          </Typography>
        ) : (
          <Typography variant="body2" color="text.secondary">
            {available}  
          </Typography>
        )}
      </CardContent>
      <CardActions >
        {isLoggedIn ? (
          <Button 
            variant="contained" 
            size="small" 
            startIcon={<DeleteIcon />} 
            onClick={handleItemDelete}
            >
              Delete
          </Button>
        ) : (
          null
        )}
      </CardActions>
    </Card>
  );
}

export default InventoryCard
