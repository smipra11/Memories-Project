import React ,{useState,useEffect}from 'react'
import { useDispatch } from 'react-redux'
import Grow from '@mui/material/Grow';
import Grid from "@mui/material/Grid"
import Container from '@mui/material/Container'
import { getPosts } from '../../actions/posts';

import Posts from "../Posts/Posts"
import Form from "../Form/Form"

const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getPosts());
    }, [setCurrentId,dispatch]);

  return (
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
  )
}

export default Home