import React from "react";
import AirBnbNavbar from "../content/AirBnbNavbar";


const airBnbStyle = {
        boxSizing: "border-box",
};

document.body.style.margin = 0;

function AirBnb() {
    document.body.style.backgroundColor = "red"
    return (
        <div style={airBnbStyle}>
            <AirBnbNavbar />
        </div>
    )
}

export default AirBnb;