import React from "react"

function Spot(props){
    let color = ""
    if (props.info.timeToGo === "Summer"){
        color = "yellow"
    } else if (props.info.timeToGo === "Spring"){
        color = "green"
    } else if (props.info.timeToGo === "Fall"){
        color = "orange"
    } else {
        color = "blue"
    }
    let priceGuage = ""
    if (props.info.price < 500){
        priceGuage = "$"
    } else if (props.info.price < 1000){
        priceGuage = "$$"
    } else if (props.info.price >= 1000){
        priceGuage = "$$$"
    }
    return(
        <div>
            <div style={{display: "block", color: color, backgroundColor: "lightgray", padding: "5px"}}>
                <h3>{props.info.place} {priceGuage}</h3>
                <p>Best Season To Go: {props.info.timeToGo}</p>
                <p>Price: {props.info.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
            </div>
            <hr/>
        </div>
    )
}

export default Spot