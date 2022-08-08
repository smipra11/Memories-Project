
import React, { useState, useEffect } from 'react';
import useStyles from "./styles"
import { useDispatch } from 'react-redux';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Grow from '@mui/material/Grow';
import Grid from "@mui/material/Grid"
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';

import memories from "./images/memories.png"
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <Container maxWidth="lg">
    <AppBar  position="static" color="inherit">
      <Typography variant="h2" align="center">Memories</Typography>
      <img  src={memories} alt="icon" height="60" />
    </AppBar>
    <Grow in>
      <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
           <Posts/>
          </Grid>
          <Grid item xs={12} sm={4}>
           <Form/>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  </Container>
  );
}

export default App;
