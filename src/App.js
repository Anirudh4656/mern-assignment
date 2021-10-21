
import './App.css';
import CreateNote from './Components/CreateNote';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Note from './Components/Note';
import { useState } from 'react';


const App=()=> {
  const[addItem, setAddItem]=useState([]);
  const addNote=(note)=>{
    setAddItem((prevData)=>{
      return[...prevData, note]
    })

  }
  const onDelete=(id)=>{
    setAddItem((old)=>
      old.filter((currdata,indx)=>{
        return indx !==id;
      })
    )


  }
  return (
    <>
     <Header />
     <CreateNote passNote={addNote} />
    { addItem.map((val,index)=> {
       return <Note
       key={index}
        id={index}
        title={val.title}
        content={val.content}
        delete={onDelete}
         />
     })}
     
    <Footer />
     
    </>
  );
}

export default App;
