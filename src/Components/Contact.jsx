import React, { useEffect, useState } from "react";
import "../Styling/Contact.css"
import { RiGithubFill, RiGithubLine, RiLinkedinFill } from "@remixicon/react";
const Contact=()=>{
  
    return(
        <div className="contact">
         
          <div className="logo1">
            <h1>Follow me on</h1>
           <RiGithubFill color="white" size={150}/>
            <a href="https://github.com/rishabhrawat05" target="_blank">Go to Github Profile</a>
            </div>
            
            <div className="logo1">
            <h1>Connect with me on</h1>
            <RiLinkedinFill color="white" size={150}/>
            <a href="https://www.linkedin.com/in/rishabh-singh-rawat-408762289/" target="_blank">Go to LinkedIn Profile</a>
            </div>
           
        </div>
    )
}

export default Contact;