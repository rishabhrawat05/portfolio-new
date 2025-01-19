import React, { useState } from "react";
import "../Styling/Menu.css";
import { RiArrowDropRightFill, RiArrowDropRightLine, RiArrowRightFill } from "@remixicon/react";
const Menu=({recent,setRecent})=>{
    const [click,setClick]=useState("About");
    function onClick(e){
        setClick(e);
        setRecent(e);
    }
    return(
        <div className="menu">
            <h6>Portfolio Explorer</h6>
            <ul style={{listStyle:"none"}}>
              
                <li className="list" onClick={()=>onClick("About")} style={{color:click=="About"?"grey":"white",fontSize:click=="About"?"1.6em":"1.5em"}}><RiArrowDropRightLine size={45}/>About</li>
                <li className="list" onClick={()=>onClick("Skills")} style={{color:click=="Skills"?"grey":"white",fontSize:click=="Skills"?"1.6em":"1.5em"}}><RiArrowDropRightLine size={45}/>Skills</li>
                <li className="list" onClick={()=>onClick("Projects")} style={{color:click=="Projects"?"grey":"white",fontSize:click=="Projects"?"1.6em":"1.5em"}}><RiArrowDropRightLine size={45}/>Projects</li>
                <li className="list" onClick={()=>onClick("Activites")} style={{color:click=="Activites"?"grey":"white",fontSize:click=="Activites"?"1.6em":"1.5em"}}><RiArrowDropRightLine size={45}/>Activities</li>
                <li className="list" onClick={()=>onClick("Contact")} style={{color:click=="Contact"?"grey":"white",fontSize:click=="Contact"?"1.6em":"1.5em"}}><RiArrowDropRightLine size={45}/>Contact</li>
            </ul>
        </div>
    )
}

export default Menu;