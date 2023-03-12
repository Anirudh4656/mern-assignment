import React,{useEffect,useState} from 'react'
// import Posts from '../Posts/Posts.js';
import useStyles from "./styles.js"
import Form from '../Form/Form';
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom';
import { Container, Grow, Grid, AppBar, TextField, Button, Paper ,Dialog} from '@material-ui/core';
// import Pagination from "../Pagination/Pagination"
function useQuery(){
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const classes = useStyles();
  // const dispatch =useDispatch();
  const query = useQuery();
  const history = useHistory();
  const page = query.get("page") || 1;
  const  searchQuery = query.get("searchQuery");


  const [tags, setTags] = useState([]);
  const [currentId , setCurrentId]= useState(null);
  const [openp , setOpenp]= useState(false);

  // useEffect(()=>{
  //   dispatch(getPosts());
  // },[currentId,dispatch]);
const open =()=>{
 setOpenp(true);
}

  return (
<>
<Grow in>
<Container className={classes.gridContainer} maxidth="xl" >
         <Grid container justify="space-between"   className={classes.grid1} alignItem="stretch"   spacing={2}>
        <Grid  className={classes.grid} item xs={12} sm={2} md={12}>
        {/* <Posts setCurrentId={setCurrentId}/> */}
        {/* {(!searchQuery && !tags.length) &&(
     {<Pagination  page={page}/>  }
     )} */}
        </Grid>
        <Grid container justify="space-between"  className={classes.grid2} flex-direction="column" alignItem="stretch" spacing={3}>
     <Grid item xs={12} sm={4} md={4}>
        <Form  currentId={currentId} setCurrentId={setCurrentId}/>
  </Grid>
  <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
  </Grid>
   </Grid>
        </Container>
       </Grow>      
</>

  )
}

export default Home