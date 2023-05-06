import React from "react"
import Main from "./components/Main"
import Nav from "./components/Navbar"
import About from "./components/pages/About"
import AirBnb from "./components/pages/AirBnb"
import "./style.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
    return (
        <div class="container">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/"element={<><Nav/><Main/></>} />
                    <Route path="/About" element=<About /> />
                    <Route path="/AirBnb" element=<AirBnb /> />
                </Routes>
            </BrowserRouter>
        </div>  
    )
}