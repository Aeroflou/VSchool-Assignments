import React from "react"

function Pet(props){
    return(
        <div style={{backgroundColor: "slategray", padding: "2px", border: "2px solid gray", margin: "1px"}}>
            <h3 style={{width: "120px"}}>{props.info.name}</h3>
            <p style={{width: "120px"}}>{props.info.breed}</p>
        </div>
    )
}

export default Pet