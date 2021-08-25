import React from "react"
import {Link} from "react-router-dom"

function Header(){
    return(
        <header style={{
            position: "absolute",
            top: "0",
            backgroundColor: "#333333",
            height: "5%",
            width: "100%"
        }}>
            <ul style={{display: "flex", alignItems: "center", listStyle: "none"}}>
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/about"> About </Link></li>
                <li><Link to="/classes"> Classes </Link></li>
            </ul>
        </header>
    )
}

export default Header