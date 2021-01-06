import React from "react"

function Die (props){
    return(
        <div style={{height: "200px", width: "200px", textAlign: "center", backgroundColor: "white", margin: "10px"}}>
            <h1>{props.number}</h1>
        </div>
    )
}

export default Die