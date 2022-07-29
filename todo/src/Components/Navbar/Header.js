import React ,{useEffect} from 'react'
import { useState } from 'react';
import "./header.css";
import  useStyles from "./styles"
import {recog} from "../../api/sppechRecog"
import { useDispatch } from 'react-redux';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useLocation ,useHistory} from 'react-router-dom';
import memoriesText from "../../image/memoriesText.png"
import memoriesLogo from "../../image/memoriesLogo.png"
const Header = () => {
  
  const [user, setUser]=useState(JSON.parse(localStorage.getItem("profile")));
      const classes= useStyles();
      const history =useHistory();
      const location =useLocation();
      const dispatch = useDispatch();
     
    const logout=()=>{
  dispatch({type:"LOGOUT"});
  history.push("/");
      setUser(null);
    }
    useEffect(()=>{
      const token =user?.token;
      setUser(JSON.parse(localStorage.getItem("profile")))
        },[location]);
        // recog.start();
      //   recog.onresult=(e)=>{
      // const command = e.results[0][0].transcript;
      // if(command.includes("navigate to")|| command.includes("go to")){
      //   if (command.includes("sign")){
      //     history.push("/auth")
      //   }
      // }
      
      //   }
      //   recog.onend=()=>{
      //     recog.start();
      //   }
    return (
        <div className="header">
    
   <Link to="/" className={classes.brandContainer}>
        <img className="text" component={Link} to="/" src={memoriesText} alt="icon"  />
        <img className="image" src={memoriesLogo} alt="icon"  />
      </Link>
    <Toolbar className={classes.toolbar}>
      {user?.result ? (
        <div className={classes.profile}>
          <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
          <p className="userName">{user?.result.name}</p>
          <Button variant="contained" className="logout" color="secondary" onClick={logout}>Logout</Button>
        </div>
      ) : (
        <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
      )}
    </Toolbar>
</div>
        
    )
}

export default Header
