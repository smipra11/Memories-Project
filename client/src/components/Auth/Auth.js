import React,{useState} from 'react'
import {
  Avatar,
  Paper,
  Container,
  Typography,
  styled,
  Grid,
  Button
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Input from  "./Input"


const paperStyle = {
  marginTop: '1px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2px'
}
const StyledForm = styled('form')({
  width: '100%', // Fix IE 11 issue.
  marginTop: '3px'
})

const Auth = () => {

 
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleChange = () =>{

  }
  const handleSubmit = () =>{

  }


  return (
    <Container component="main" maxWidth="xs">
      <Paper sx={paperStyle} elevation={3}>
        <Avatar >
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">{ isSignup ? 'Sign up' : 'Sign in' }</Typography>

        <StyledForm  onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            { isSignup && (
            <>
              <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
              <Input name="lastName" label="Last Name" handleChange={handleChange} half />
            </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" >
            { isSignup ? 'Sign Up' : 'Sign In' }
          </Button>
          </StyledForm>

          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
              </Button>
            </Grid>
          </Grid>

        </Paper>
        </Container>

  )
}

export default Auth