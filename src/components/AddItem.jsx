import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function AddItem() {
  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <div>
      <br />
      <TextField
        required
        id="outlined-required"
        label="Name"
        defaultValue="Item Name"
      />
      <TextField
        required
        id="outlined-required"
        label="Image"
        defaultValue="Image URL"
      />
      <TextField
        required
        id="outlined-required"
        label="Item Price"
        defaultValue="49.99"
      />
      <br />
      <Button size="medium" onClick={() => console.log("Clicked")}>Submit</Button>

      
    
    </div>
  </Box>
  )
}

export default AddItem