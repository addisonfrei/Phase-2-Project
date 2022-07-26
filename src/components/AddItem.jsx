import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const stock = [
  {
    value: 'In Stock',
    label: 'In Stock',
  },
  {
    value: 'Out of Stock',
    label: 'Out of Stock',
  },
];

function AddItem( { onFormSubmit } ) {
  const [formData, setFormData] = useState({
      "name": "",
      "image": "",
      "price": "",
      "available": ""
  })

  const navigate = useNavigate()

  function handleFormChange(e) {
    setFormData({...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleFormSubmit() {
    fetch('http://localhost:3001/inventory', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData)})
      .then(r => r.json())
      .then(newObj => onFormSubmit(newObj))
      navigate('/inventory')
  }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
    >
    <div>
      <br />
      <TextField
        required
        id="outlined-required"
        label="name"
        name="name"
        value={formData.name}
        onChange={handleFormChange}
      />
      <TextField
        required
        id="outlined-required"
        label="Image"
        name='image'
        value={formData.image}
        onChange={handleFormChange}
      />
      <TextField
        required
        id="outlined-required"
        label="Item Price"
        name='price'
        value={formData.price}
        onChange={handleFormChange}
      />
      <TextField
          select
          id="outlined-required"
          label="Select"
          name="available"
          onChange={handleFormChange}
          helperText="Please select availability"
          variant="standard"
        >
          <MenuItem value="In Stock">In Stock</MenuItem>
          <MenuItem value="Out of Stock">Out of Stock</MenuItem>
        </TextField>
      <br />
      <Button 
        size="medium" 
        onClick={handleFormSubmit}
      >
        Submit
      </Button>
    </div>
  </Box>
  )
}

export default AddItem