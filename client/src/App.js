
import React, { useState, useEffect } from 'react';
import useStyles from "./styles"
import { useDispatch } from 'react-redux';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Grow from '@mui/material/Grow';
import  Box  from '@mui/system/Box';
import Grid from "@mui/material/Grid"
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import Avatar from '@mui/material/Avatar';
import { getPosts } from './actions/posts';

import memories from "./images/memories.png"
function App() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [setCurrentId,dispatch]);

  return (
    <Container maxWidth="lg">
    <AppBar sx={{borderRadius:1}} position="static" color="inherit">
      <Box sx={{display:"flex",flexDirection:"row",alignContent:"center",justifyContent:'center'}}>
      <Typography variant="h2" align="center" color= "rgba(0,183,255, 1)">Memories</Typography>
      <Avatar  src={memories} sx={{ width: 56, height: 56 ,marginTop:1}}  variant="square"/>
      </Box>
    </AppBar>
    <Grow in>
      <Container sx={{marginTop:5}}>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
           <Posts setCurrentId={setCurrentId}/>
          </Grid>
          <Grid item xs={12} sm={4}>
           <Form currentId={currentId} setCurrentId={setCurrentId}/>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  </Container>
  );
}

export default App;
