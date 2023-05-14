import React from "react";
import AirBnbNavbar from "../content/AirBnbNavbar";


const airBnbStyle = {
        boxSizing: "border-box",
};

document.body.style.margin = 0;
document.body.style.backgroundColor = "white";

function AirBnb() {
    return (
        <div style={airBnbStyle}>
            <AirBnbNavbar />
        </div>
    )
}

export default AirBnb;