import React, { useState } from "react";
import "../Styling/Home.css"
import { RiCloseFill, RiPlayFill } from "@remixicon/react";
import Terminal from "./Terminal";
const Home=()=>{
    const [run,setRun]=useState(false)
    function runCode(){
        setRun(!run)
    }
    return(
        <div className="home">
       
        <h2 className="heading">// Hello, I'am Rishabh Singh Rawat a Full Stack Java Developer</h2>
        <h2 className="subheading">public static void <span>AboutMe</span><span id="brac">()</span><span id="curly-brac">{`{`}</span></h2>
        <div className="output">
            <h2 className="system">System</h2>
            <span id="brac3"><h2>.</h2></span>
            <h2 className="out">out</h2>
            <span id="brac3"><h2>.</h2></span>
            <h2 className="println">println</h2>
            <span id="brac3"><h2>(</h2></span>
            </div>
            <h2 className="intro">"As a B.Tech Computer Science student with a strong foundation in web development, I specialize in creating user-friendly, visually engaging websites. My frontend expertise includes HTML, CSS, JavaScript, and React.js, enabling me to build responsive, interactive experiences. Additionally, my skills in backend development with Spring Boot Java have allowed me to transition into full-stack development, empowering me to deliver complete, high-performance applications. Combining frontend and backend knowledge, I am dedicated to crafting seamless, end-to-end solutions and am passionate about growing into a well-rounded professional in web development."<span id="brac">);</span></h2>
            
        
        <h2><span id="curly-brac2">{`}`}</span>  </h2>
        <div className="footer">
            {run?
            <button onClick={runCode} style={{backgroundColor:"red", borderColor:"darkred"}}>{run?<RiCloseFill className="closeIcon" size={36}/>:<RiPlayFill className="icon" size={36}/>}</button>
            :<button onClick={runCode} style={{backgroundColor:"#37cc5a"}}>{run?<RiCloseFill className="closeIcon" size={36}/>:<RiPlayFill className="icon" size={36}/>}</button>}
        
        <h2 className="run">{run?"CLOSE TERMINAL":"RUN CODE"}</h2>
        </div>
       
            {run && <Terminal />}
        
        </div>
        

    )
}
export default Home;