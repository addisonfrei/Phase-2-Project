import React from 'react'
import InventoryCard from './InventoryCard';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const InventoryContainer = ( { inventoryList, onDeleteItem, isLoggedIn } ) => { 
    const inventoryCard = inventoryList.map(inventory => (
            <Grid item xs={6} key={inventory.id}>
              <Item><InventoryCard inventory={inventory} onDeleteItem={onDeleteItem} isLoggedIn={isLoggedIn}/></Item>
            </Grid>
        ))
    return (
        <Box sx={{ flexGrow: 1 }} style={{marginTop: '20px'}}>
          <Grid container spacing={2}>
            { inventoryCard }
          </Grid>
        </Box>
      );
}

export default InventoryContainer

