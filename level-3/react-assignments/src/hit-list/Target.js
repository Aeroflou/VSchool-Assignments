import React from "react"

function Target(props){
    return(
        <div style={{width:"200px", height:"300px", backgroundColor:"black"}}>
            <img style={{width:"200px", height:"250px"}} src={props.info.image} alt={props.info.name}/>
            <p style={{background:"rgb(105,105,105,0.5)", color:"white"}}>{props.info.name}</p>
        </div>
    )
}

export default Target