import React from "react"
import Pet from "./Pet"

function Friend(props){
    const petList = props.info.pets.map(petto => <Pet id={petto.id} info={petto}/>)
    return(
        <div style={{display: "flex", backgroundColor: "lightblue", padding: "5px", margin: "5px", width:"700px", border: "5px solid blue"}}>
            <h1 style={{width: "120px"}}>{props.info.name}</h1>
            <h2 style={{width: "100px"}}>Age: {props.info.age}</h2>
            {petList}
        </div>
    )
}

export default Friend