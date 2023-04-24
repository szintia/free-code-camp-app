import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import About from "./components/pages/About"
import "./style.css"
import { Router, Routes, Route } from "react-router-dom"

export default function App() {
    return (
        <div className="container">
            <Router>
            <Navbar />
            <Routes>
                <Route path='/About' element={<About/>} />
            </Routes>
            </Router>
            <Main />
        </div>  
    )
}