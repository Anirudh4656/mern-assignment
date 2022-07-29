import React,{useEffect,useState} from 'react'
import './App.css';
import { BrowserRouter,Switch,Route, Redirect } from 'react-router-dom';
import Header from './Components/Navbar/Header';
import { useHistory } from 'react-router-dom';
import Footer from './Components/Footer';
import PostDetails from './Components/PostDetails/PostDetails';
import Home from "./Components/Home/Home"
import Appv from './Components/Voice/Appv';
import { useDispatch } from 'react-redux';
import Auth from './Components/Auth/Auth';
import alanBtn from "@alan-ai/alan-sdk-web"
const alanKey="0e6153ba175061f49a238d5cfcdb6e3c2e956eca572e1d8b807a3e2338fdd0dc/stage"
const App=()=> {
  const user= JSON.parse(localStorage.getItem("profile"));
  const history = useHistory();
  const dispatch =useDispatch();
  useEffect(()=>{
    alanBtn({
      key:alanKey,
      onCommand:({command})=>{
        if(command ==="test"){
       alert("rrtyui")
        
        }
        if(command ==="Logout"){
          dispatch({type:"LOGOUT"});
          history.push("/posts");
        }
        if(command ==="Login"){
          history.push("/auth")
          
        }
       
      }
    },[])
  })
  
  
  return (
    <>
     <BrowserRouter>
     <Header  />
     <Switch>
     <Route path="/" exact component={()=> <Redirect to="/posts" />} />
     <Route path="/posts" exact component={Home} />
     <Route path="/auth" exact component={Auth} />
     <Route path="/posts/search" exact component={Home} />
     <Route path="/posts/:id"  component={PostDetails} />
     <Route path="/auth" exact component={()=>(!user ? <Auth />:<Redirect  to="/posts"/>)} />
     </Switch>
     </BrowserRouter>
     </>
     );
     }

export default App;
