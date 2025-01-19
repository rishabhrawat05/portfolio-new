import React, { useState } from "react";
import "../Styling/Project.css";
import data from "../data/project.json"
import { RiCloseCircleFill } from "@remixicon/react";

const Project=()=>{
    const [show,setShow]=useState(false);
    const [id,setId]=useState(0);
    const features=data[id].features;
    const technologies=data[id].technologies;
    const closeButton=(e)=>{
        setShow(!show)
        setId(e)
    }
    return(
        <div className="project1">
          <h1 className="heading">// These are my Projects</h1>
           <div className="project">
           <div  onClick={()=>closeButton(0)} className="pro" data-topic={`com.project.${data[0].name}`}>
           </div>
           <div  onClick={()=>closeButton(1)} className="pro" data-topic={`com.project.${data[1].name}`}>
           </div>
           <div  onClick={()=>closeButton(2)} className="pro" data-topic={`com.project.${data[2].name}`}>
           </div>
           <div  onClick={()=>closeButton(3)} className="pro"  data-topic={`com.project.${data[3].name}`}>
           </div>
           
           {show &&
           <div className="describe">
            <div className="closeButton">
                <RiCloseCircleFill onClick={()=>closeButton(0)} size={36} color="red"/>
                </div>
                <div className="info">
                <h3>{data[id].title}</h3>
                <h3>{data[id].description}</h3>
                <h3>Features:</h3>
                <ul style={{color:"white",paddingLeft:"5vh"}}>
                    {features.map((value,index)=>(
                        <li>{value}</li>
                    ))}
                    
                </ul>
                <h3>Technologies:</h3>
                <ul style={{color:"white",paddingLeft:"5vh"}}>
                    {technologies.map((value,index)=>(
                        <li>{value}</li>
                    ))}
                    
                </ul>
                <h3>View Project:</h3>
                <a href={data[id].github_link} target="_blank" rel="noopener noreferrer"> Github</a>
                </div>
           </div>
            }
            </div>
        </div>
    )
}
export default Project