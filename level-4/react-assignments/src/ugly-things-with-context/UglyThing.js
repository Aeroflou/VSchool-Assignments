import React from "react"

function UglyThing(props){
    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <img src={props.url} alt="ugly thing"/>
            <button onClick={props.delete(props.id)}>Delete</button>
        </div>
    )
}

export default UglyThing