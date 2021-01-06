import React from "react"

function Badge(props){
    return(
        <div style={{display:"grid", gridTemplateRows:"8", gridTemplateColumns:"2", border:"5px solid black", height:300, width:750, paddingTop:0}}>
            <p style={{gridRow:"1/2", gridColumn:"1/3", backgroundColor:"black", color:"white"}}>Badge:</p>
            <p style={{gridRow:"2/3", gridColumn:"1/2"}}> Name: {props.info.fName} {props.info.lName}</p>
            <p style={{gridRow:"2/3", gridColumn:"2/3"}}>Email: {props.info.email}</p>
            <p style={{gridRow:"3/4", gridColumn:"1/2"}}>Place of Birth: {props.info.placeOfBirth}</p>
            <p style={{gridRow:"3/4", gridColumn:"2/3"}}>Phone Number: {props.info.phone}</p>
            <p style={{gridRow:"4/5", gridColumn:"1/2"}}>Favorite Food: {props.info.favoriteFood}</p>
            <p style={{gridRow:"5/8", gridColumn:"1/3", border:"5px solid black"}}>{props.info.description}</p>
        </div>
    )
}
//height:175, width:437
export default Badge