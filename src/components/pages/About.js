import React from "react";

const aboutStyle = {
    color: "black"
  };

function About() {
    document.body.style.backgroundColor = "white";
    return (
        <div>
            <h1 style={aboutStyle}>About page</h1>
        </div>
    )
}

export default About;