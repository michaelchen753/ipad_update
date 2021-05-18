import React,{ useState } from 'react';
import Header from './components/header/header';
import Slides from './components/slides/slides';
import { data } from './assets/data';
import './App.css';

function App() {

const [isHidden , setIsHidden]= useState(false);

  return (
    <div className="App container">
    <Header isHidden={isHidden} data={data} toggle={()=>setIsHidden(!isHidden)}/>    
      { 
        !isHidden && <Slides content= {data[0].content } />
      }         
    </div>
  );
}

export default App;
