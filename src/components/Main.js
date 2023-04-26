import React from "react"
import { Link } from "react-router-dom"


const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'blue'
};
    
 
  

function Main() {
    return (
       <main>
            <h1 className="main--title">Fun facts about React</h1>
            <ul className="main--facts">
                <li>Topic 1</li>
                <li>Topic 2</li>
                <li>Topic 3</li>
                <li>Topic 4</li>
                <li><Link to="/About" style={linkStyle}>About</Link></li>
                
            </ul>
            
       </main>
    )
}

export default Main;
