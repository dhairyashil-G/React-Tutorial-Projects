import React from "react"
import ReactDOM from "react-dom"
import Info from "/components/Info"
import About from "/components/About"
import Interest from "/components/Interest"
import Footer from "/components/Footer"
ReactDOM.render(
    <div className="Main">
        <Info/>
        <About/>
        <Interest/>
        <Footer/>
    </div>,
    document.getElementById("root")
    
)