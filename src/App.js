import React from "react"
import Main from "./components/Main"
import About from "./components/pages/About"
import "./style.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
    return (
        <div class="container">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element=<Main /> />
                    <Route path="/About" element=<About /> />
                </Routes>
            </BrowserRouter>
        </div>  
    )
}