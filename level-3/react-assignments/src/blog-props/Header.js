import React from "react"
import Navbar from "./Navbar"

function Header(){
    return(
        <div style={{backgroundImage: 'url("./home-bg.jpg")', height: "532px", backgroundColor: "gray", textAlign: "center", color: "white"}}>
            <Navbar />
            <div>
                <h1 style={{fontSize: "80px"}}>Clean Blog</h1>
                <p style={{fontSize: "24px"}}>A Blog Theme by Start Bootstrap</p>
            </div>
        </div>
    )
}

export default Header