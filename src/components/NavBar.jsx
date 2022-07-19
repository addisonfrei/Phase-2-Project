import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const NavBar = () => {
  return (
    <div>
        <h1>Hello, welcome to your Phase 2 Project!</h1>
        <Stack direction="row" spacing={2}>
        <Button variant="contained">Link 1</Button>
        <Button variant="contained" disabled>
            Link 2
        </Button>
        <Button variant="contained" href="#contained-buttons">
            Link 3
        </Button>
        </Stack>
    </div>
  )
}

export default NavBar