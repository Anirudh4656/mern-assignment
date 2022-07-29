import React,{useEffect,useState} from 'react'
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import Posts from '../Posts/Posts.js';
import Form from '../Form/Form';
import { useHistory, useLocation } from 'react-router-dom';
import { Container, Grow, Grid, AppBar, TextField, Button, Paper ,Dialog} from '@material-ui/core';
import Pagination from "../Pagination/Pagination"
import { getPosts,getPostsBySearch } from '../../actions/posts';

function useQuery(){
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const classes = useStyles();
  const dispatch =useDispatch();
  const query = useQuery();
  const history = useHistory();
  const page = query.get("page") || 1;
  const  searchQuery = query.get("searchQuery");


  const [tags, setTags] = useState([]);
  const [currentId , setCurrentId]= useState(null);
  
  useEffect(()=>{
    dispatch(getPosts());
  },[currentId,dispatch]);

 
  return (
<>
      <Form  currentId={currentId} setCurrentId={setCurrentId}/>
       <Container>
        <Grid item  justifyContent="center" spacing={2}>
        <Posts setCurrentId={setCurrentId}/>
        </Grid>
   
    
      </Container>

     {(!searchQuery && !tags.length) &&(
     <div className={classes.pag}>
     <Pagination  page={page}/>
     </div>
     )}
               
</>

  )
}

export default Home