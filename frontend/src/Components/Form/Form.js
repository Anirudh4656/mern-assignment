import React,{useEffect, useState} from 'react'
import FileBase from "react-file-base64"
import {useHistory,useLocation} from "react-router-dom"

import { Container, Grow, Grid, AppBar, TextField, Button, Paper ,Dialog, Typography} from '@material-ui/core';
import useStyles from "./style"

import Add from "@material-ui/icons/Add"
import ChipInput from 'material-ui-chip-input';


const Form = ({currentId , setCurrentId}) => {
  const [tags, setTags] = useState([]);
  const [openpop, setOpenpop] = useState(false);
  // const history = useHistory();
  const user= JSON.parse(localStorage.getItem("profile"));
  const classes = useStyles();
  const [postData, setPostData]= useState({name:"" , attacks:"" , HP:"", abilities: "", selectedFile:""})
  const[ expand , setExpand] = useState(false);
                                                        
    // useEffect(()=>{
    //   if(post) setPostData(post);
    //    },[post]);
  
 if(!user?.result?.name){
  return(
    <Paper className={classes.paper}>
      <Typography variant="h6" align="center">
        Please SignIn  to create your own memories and like other's memories. </Typography>
    </Paper>
  )
 }
 
   
 const handleSubmit=()=>{
     
 }
    const expandIt =()=>{
        setExpand(true)
    }
    const backToNormal =()=>{
        setExpand(false)
    }
    
    const popup=()=>{
      setOpenpop(!openpop)
     }
  

    const handleKeyPress = (e) => {
      if (e.keyCode === 13) {
      //  searchPost();
      }
      
    };
     const handleAddChip = (tag) => setTags([...tags, tag]);
   
     const handleDeleteChip = (chipToDelete) => setTags(tags.filter((tag) => tag !== chipToDelete));

  return (
    <div className="main_note"  onDoubleClick={backToNormal} >
  
    {    expand?
            <input 
            type="text" 
            name="name"
             value={postData.name} 
             onChange={(e)=> setPostData({...postData, title:e.target.value})}
              placeholder="name" 
               autoComplete="off" />
                :null }
                {    expand?
            <input 
            type="text" 
            name="attacks"
             value={postData.attacks} 
             onChange={(e)=> setPostData({...postData, tags:e.target.value})}
              placeholder="attacks" 
               autoComplete="off" />
                :null }
                <input 
            type="text" 
            name="HP"
             value={postData.HP} 
             onChange={(e)=> setPostData({...postData, tags:e.target.value})}
              placeholder="HP" 
               autoComplete="off" />
                <input 
            type="text" 
            name="abilities"
             value={postData.abilities} 
             onChange={(e)=> setPostData({...postData, tags:e.target.value})}
              placeholder="abilities" 
               autoComplete="off" />

             {expand? ( <>
                <div className={classes.fileInput}>
        <FileBase type="file"
        multiple={false}
        onDone={({base64})=>setPostData({...postData, selectedFile:base64})} />
    </div>
    <div className='main_note_button-div'> 
    <button  className="main_note_button" onClick={handleSubmit}>
    <Add  style={{ margin: '-3px ',color:"#3f51b5" }}  fontSize="medium" />
              </button>
              </div>
             </>)
              :null}
          
       
            
        </div>
  )
}

export default Form