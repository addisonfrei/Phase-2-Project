import React, {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function AddItem() {
  const [formData, setFormData] = useState({
      "name": "",
      "image": "",
      "price": ""
  })

  function handleFormChange(e) {
    setFormData({...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    // noValidate
    // autoComplete="off"
  >
    <div>
      <br />
      <TextField
        required
        id="outlined-required"
        label="Name"
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
      <br />
      <Button 
        size="medium" 
        onClick={() => console.log("Clicked")}
      >
        Submit
      </Button>

      
    
    </div>
  </Box>
  )
}

export default AddItem