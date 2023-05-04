import React from "react"
import Main from "./components/Main"
import Nav from "./components/Navbar"
import About from "./components/pages/About"
import "./style.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
    return (
        <div class="container">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/"element={<><Nav/><Main/></>} />
                    <Route path="/About" element=<About /> />
                </Routes>
            </BrowserRouter>
        </div>  
    )
}