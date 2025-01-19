import React from "react";
import "../Styling/Activites.css";
import {RiGithubFill, RiMapPinUserFill } from "@remixicon/react";
import { SiDevpost } from "react-icons/si";
const Activites=()=>{

    return(
        <div className="activites">
             <h1 className="heading">// These are my Activites</h1>
             <div className="events">
             <div className="reimagine"></div>
             <div className="about">
             <h1>Reimagine: The Web Competition</h1>
             <p style={{color:'white'}}>During the Reimagine Hackathon, the focus was on redesigning a product website with an emphasis on device compatibility. The project aimed to enhance user experience by ensuring the website was fully responsive across a variety of devices, including desktops, tablets, and smartphones.</p>
             <p style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:'2%', width:'15%'}}><RiGithubFill color="white"/><a href="https://github.com/rishabhrawat05/NothingPhone-1" style={{fontSize:'2vh'}} target="_blank">Github</a></p>
             </div>
            
             
             </div>
             <div className="events">
             <div className="coddex"></div>
             <div className="about">
             <h1>Codédex Summer Hackathon'24</h1>
             <p style={{color:'white'}}>I participated solo in Codédex Summer Hackathon 2024, building a captivating invitational website for a stoop sale within 24 hours. Featuring a vintage paper theme, smooth animations with GSAP and locomotive scroll, and responsive design, the project was a creative and technical challenge that pushed my limits and showcased my skills.</p>
             <p style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:'2%', width:'15%'}}><RiGithubFill color="white"/><a href="https://github.com/rishabhrawat05/Brooklyn-Stoop-Sale" style={{fontSize:'2vh'}} target="_blank">Github</a></p>
             
             </div>
             
             </div>

             <div className="events">
             <div className="hacktoberfest"></div>
             <div className="about">
                <h1>Hacktoberfest'24</h1>
                <p style={{color:'white'}}>I participated in Hacktoberfest 2024, contributing to open-source projects and collaborating with developers worldwide. It was an incredible experience to enhance my coding skills, solve real-world problems, and support the open-source community. This journey of learning and giving back has been both fulfilling and inspiring!</p>
                <p style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:'5%', width:'15%'}}><RiMapPinUserFill color="white"/><a href="https://www.holopin.io/@rishabhrawat05#" style={{fontSize:'2vh'}} target="_blank">Holopin</a></p>
             </div>
             
             </div>

             <div className="events">
             <div className="ggsoc"></div>
             <div className="about">
                <h1>GSSoC 2024-Extd</h1>
                <p style={{color:'white'}}> participated in GirlScript Summer of Code, contributing to impactful open-source projects over three months. It was an enriching journey of collaboration, skill-building, and problem-solving alongside a vibrant community. This experience not only strengthened my technical expertise but also deepened my passion for open-source contributions.</p>
                <p style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:'2%', width:'15%'}}><RiGithubFill color="white"/><a href="https://github.com/rishabhrawat05#-ggsoc24-badges" style={{fontSize:'2vh'}} target="_blank">Github</a></p>
             </div>
            
             </div>

             <div className="events">
             <div className="hackweek"></div>
             <div className="about">
                <h1>Global Hack Week: Data</h1>
                <p style={{color:'white'}}> I participated in Global Hack Week: Data, diving into exciting challenges and projects focused on data science and analytics. Collaborating with a global community, I explored innovative solutions, honed my data-handling skills, and learned cutting-edge techniques. It was an inspiring week of growth, creativity, and meaningful connections!</p>
                <p style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:'7%', width:'15%'}}><SiDevpost color="white" size={30} /><a href="https://devpost.com/rishabhrawat05" style={{fontSize:'2vh'}} target="_blank">Devpost</a></p>
             </div>
            
             </div>
            
             
        </div>
    )
 
}
export default Activites;