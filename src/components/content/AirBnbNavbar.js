import React from "react";
import AirBnbLogo from "../../images/airbnb-logo.png";
import {airBnbNavbarStyles} from "../styles/airBnbNavbarStyles";


function AirBnbNavbar() {
    return (
        <nav style={airBnbNavbarStyles.Navbar}>
            <img src={AirBnbLogo} alt="" style={airBnbNavbarStyles.Logo}/>
        </nav>
    )
}

export default AirBnbNavbar;