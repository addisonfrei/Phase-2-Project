import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function AddItem( { onFormSubmit } ) {
  const [formData, setFormData] = useState({
      "name": "",
      "image": "",
      "price": ""
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