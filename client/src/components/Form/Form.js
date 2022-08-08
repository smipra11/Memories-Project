import React ,{ useState, useEffect }from 'react'
import  Paper  from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { createPost } from '../../actions/posts'

const Form = () =>{

    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    const dispatch =useDispatch();

    useEffect(() => {
         setPostData(postData);
      }, [postData]);
    
      const clear = () => {
     
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
       
          dispatch(createPost(postData));
          clear();
        
      };
    return(
    <Paper >
    <form autoComplete="off" noValidate  onSubmit={handleSubmit}>
      <Typography variant="h6">Creating a Memory</Typography>
      <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
      <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
      <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
      <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
      <div ><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
      <Button  variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
      <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
    </form>
  </Paper>
    )
}
export default Form