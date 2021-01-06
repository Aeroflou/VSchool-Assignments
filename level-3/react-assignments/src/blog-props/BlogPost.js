import React from "react"

function BlogPost(props){
    return(
        <div style={{width: "50%", margin: "0px 25% 0px 25%", color: "#212529"}}>
            <h1 style={{fontSize: "36px"}}>{props.info.title}</h1>
            <p style={{fontSize: "28px"}}>{props.info.subTitle}</p>
            <div style={{color: "#868E96", fontSize: "18px", fontFamily: "Times New Roman"}}>
                <span>Posted</span>
                <span> by </span>
                <span style={{color: "#212529"}}>{props.info.author}</span>
                <span> on {props.info.date}</span>
            </div>
            <hr/>
        </div>
    )
}

export default BlogPost