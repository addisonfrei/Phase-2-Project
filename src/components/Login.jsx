import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Login = ({isLoggedIn, setIsLoggedIn}) => {
    const [user, setUser] = useState({
        "username": "",
      "password": "",
    })
    function handleFormChange(e) {
        setUser({...user,
          [e.target.name]: e.target.value
        })
      }
    console.log(user)

    function handleFormSubmit() {
        if (user.username === 'admin' && user.password === 'admin') {
            console.log("logged in")
            setIsLoggedIn(isLoggedIn => !isLoggedIn)
        } else {
            alert('Invalid login!  Please try again!')
        }
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
      <p>Username and password is admin for demo purposes</p>
      <TextField
        required
        id="outlined-required"
        label="Username"
        name="username"
        value={user.name}
        onChange={handleFormChange}
        
      />
      <TextField
        required
        id="outlined-required"
        label="Password"
        name='password'
        value={user.password}
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
 

export default Login