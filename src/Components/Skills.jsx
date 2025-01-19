import React from "react";
import "../Styling/Skills.css";
const Skills=()=>{
    return(
        <div className="skills">
           <h1 className="heading">// These are my Skills</h1>
           <h2 className="subheading">public enum <span>Skills</span><span id="curly-brac">{`{`}</span></h2>
           <h2 className="comments"> /**<br/>&nbsp;* Proficient in Java programming, with strong knowledge of object-oriented programming<br/> &nbsp;*&nbsp;(OOP) concepts, data structures, and algorithms.<br/>&nbsp;*/</h2>
           <h2 className="enumtype">JAVA<span className="comma">,</span></h2>
           <h2 className="comments"> /**<br/>&nbsp;* Proficient in JavaScript with strong expertise in building dynamic, interactive user<br/>&nbsp;*&nbsp;interfaces and efficient client-side logic for web applications.<br/>&nbsp;*/</h2>
           <h2 className="enumtype">JAVASCRIPT<span className="comma">,</span></h2>
           <h2 className="comments"> /**<br/>&nbsp;* Experienced in developing robust, scalable backend applications using Spring Boot, with<br/>&nbsp;*&nbsp;a focus on RESTful API development, security integration, and seamless database<br/>&nbsp;*&nbsp;management.<br/>&nbsp;*/</h2>
           <h2 className="enumtype">SPRING_BOOT<span className="comma">,</span></h2>
           <h2 className="comments"> /**<br/>&nbsp;* Skilled in creating responsive, user-friendly web applications using React.js,<br/>&nbsp;*&nbsp;leveraging component-based architecture and state management for optimal performance<br/>&nbsp;*&nbsp;and maintainability.<br/>&nbsp;*/</h2>
           <h2 className="enumtype">REACT_JS<span className="comma">,</span></h2>
           <h2 className="comments"> /**<br/>&nbsp;* Proficient in MySQL database management, skilled in designing, optimizing, and <br/>&nbsp;*&nbsp;maintaining relational databases to ensure data integrity and performance in web <br/>&nbsp;*&nbsp;applications.<br/>&nbsp;*/</h2>
           <h2 className="enumtype">MYSQL<span className="comma">,</span></h2>
           <h2 className="comments">/**<br />&nbsp;* Proficient in MongoDB database management, experienced in designing, querying, and  <br />&nbsp;* optimizing NoSQL databases to handle large-scale data efficiently and enhance  <br />&nbsp;* performance in modern web applications.  <br />&nbsp;*/</h2>
           <h2 className="enumtype">MONGO_DB<span className="comma">,</span></h2>
           <h2><span id="curly-brac2">{`}`}</span> </h2>
        </div>
        
    )
}
export default Skills;