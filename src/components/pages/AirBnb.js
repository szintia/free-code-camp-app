import React from "react";
import AirBnbNavbar from "../content/AirBnbNavbar";


const airBnbStyle = {
        color: "white",
};

function AirBnb() {
    return (
        <div style={airBnbStyle}>
            <AirBnbNavbar />
        </div>
    )
}

export default AirBnb;