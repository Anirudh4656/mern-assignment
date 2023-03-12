import React,{useEffect,useState} from 'react'
import './App.css';
import { BrowserRouter,Switch,Route, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Home from "./Components/Home/Home"
import Auth from './Components/Auth/Auth';
const App=()=> {
  const user= JSON.parse(localStorage.getItem("profile"));
  const history = useHistory();
  return (
    <>
     <BrowserRouter>
  
     <Switch>
     <Route path="/" exact component={()=> <Redirect to="/posts" />} />
     <Route path="/posts" exact component={Home} />
     <Route path="/auth" exact component={Auth} />
     <Route path="/auth" exact component={()=>(!user ? <Auth />:<Redirect  to="/posts"/>)} />
     </Switch>
     </BrowserRouter>
     </>
     );
     }

export default App;
