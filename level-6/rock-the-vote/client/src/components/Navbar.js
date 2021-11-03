import React from  'react'
import {Link} from 'react-router-dom'

export default function Navbar(props){
    return(
        <nav>
            <ul>
                <img src="https://coursework.vschool.io/content/images/size/w2000/2020/01/political.jpeg" alt="https://coursework.vschool.io/content/images/size/w2000/2020/01/political.jpeg" style={{width: "12px", height: "12px", left: 0}} />
                <Link to="/profile">Proflie</Link>
                <Link to="/issues">Issues</Link>
                <button onClick={props.logout}>Logout</button>
            </ul>
        </nav>
    )
}