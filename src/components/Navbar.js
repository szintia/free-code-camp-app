import React from "react"
import reactLogo from "../images/react-icon-small.png"
export default function Navbar() {
    return (
       <nav>
            <img src={reactLogo} className="nav--icon" alt=""/>
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React course - Project 1</h4>
       </nav>
    )
}


