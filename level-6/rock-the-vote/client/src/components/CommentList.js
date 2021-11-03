import React from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm'

export default function CommentList(props){
    return(
        <div>
            <CommentForm addComment={props.addComment} _id={props._id} />
            {props.comments ? props.comments.map(comment => <Comment {...comment}/>) : "no comments here :<"}
        </div>
    )
}