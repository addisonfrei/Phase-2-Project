import React from 'react'
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const NavBar = ( { isLoggedIn, setIsLoggedIn }) => {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    R.J. Frei Primitives
                </Typography>
                <Button color="inherit" to='/' component= { Link }>Home</Button>
                <Button color="inherit" to='/inventory' component= { Link }>View Inventory</Button>
                <Button color="inherit" to='/add' component= { Link }>Add Item</Button>
                {isLoggedIn ? (
                  <Button color="inherit" onClick={() => setIsLoggedIn(isLoggedIn => !isLoggedIn)}>Log Out</Button>
                ) : (
                  <Button color="inherit" to='/login' component= { Link }>Login</Button>
                )}
                </Toolbar>
            </AppBar>
        </Box>
    </div>
  )
}

export default NavBar