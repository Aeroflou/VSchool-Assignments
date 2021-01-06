import React from "react"

function Navbar(){
    return(
        <div style={{display: "flex", position: "fixed", fontSize: "12px", color: "black", textAlign: "center", background: "white 50%", width: "100%"}}>
            <span style={{fontSize: "20px"}}> Start Booststrap </span>
            <span> HOME </span>
            <span> ABOUT </span>
            <span> SAMPLE POST </span>
            <span> CONTACT </span>
        </div>
    )
}

export default Navbar