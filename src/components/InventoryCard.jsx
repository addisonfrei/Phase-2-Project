import React, {useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const InventoryCard = ( { inventory, onDeleteItem } ) => {
    const { id, name, price, image } = inventory
    const [isAvailable, setIsAvailable] = useState(true) 

    function handleItemDelete() {
        fetch(`http://localhost:3000/inventory/${id}`, {
            method: 'DELETE',
        })
            .then(r => r.json())
            .then(() => onDeleteItem(inventory))
    }

    function handleStockChange() {
        setIsAvailable((isAvailable) => !isAvailable)
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
            {isAvailable ? (
                <Button 
                    size="small" 
                    onClick={handleStockChange}
                >
                    In Stock
                </Button>
            ) : (
                <Button 
                    size="small" 
                    onClick={handleStockChange}
                >
                    Out of Stock
                </Button>
            )}
            <Button size="small" onClick={handleItemDelete}>Delete</Button>
          </CardActions>
        </Card>
      );
}

export default InventoryCard

