import './App.css';
import Home from './Components/Home';
import Menu from './Components/Menu';
import { useState } from 'react';
import Skills from './Components/Skills';
import Project from './Components/Projects';
import Contact from './Components/Contact';
import Activites from './Components/Activites';

function App() {
  const [classr,setClassr]=useState("About")
  return (
    <div className='myapp'>
      <Menu recent={classr} setRecent={setClassr}/>
      <div className='mainshow'>
        <div className='topbar'>
        </div>
        {classr==="About" &&  <Home/>}
        {classr==="Skills" && <Skills/>}
        {classr==="Projects" && <Project/>}
        {classr==="Activites" && <Activites/>}
        {classr==="Contact" && <Contact/>}
      </div>
      
    </div>
    
  );
}

export default App;
