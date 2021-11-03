import React from 'react'

export default function Comment(props){
    const {user, content} = props
    return(
        <div className="comment">
            <p> {user} </p>
            <p> {content} </p>
        </div>
    )
}