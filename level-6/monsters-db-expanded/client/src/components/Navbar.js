import React from  'react'
import {Link} from 'react-router-dom'

export default function Navbar(props){
    return(
        <nav>
            <ul>
                <Link to="/welcome">Welcome</Link>
                <Link to="/creatures">Creatures</Link>
                <button onClick={props.logout}>Logout</button>
            </ul>
        </nav>
    )
}