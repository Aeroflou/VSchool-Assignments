import React, { useState } from 'react'

export default function CommentForm(props){
    const [content, setContent] = useState("")

    function handleChange(e){
        const {value} = e.target
        setContent(value)
    }

    function handleSubmit(e){
        e.preventDefault()
        props.addComment(props._id, {content: content})
    }

    return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            value={content} 
            name="content" 
            onChange={handleChange} 
            placeholder="Comment"/> 
        <button>Post Comment</button>
    </form>
    )
}