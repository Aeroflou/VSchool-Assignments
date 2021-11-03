import React from 'react'
import CommentsList from './CommentList'
import Vote from './Vote'

export default function Issue(props){
    const { title, description, comments, _id, votes, vote, addComment } = props
    console.log(props)
    console.log(comments)
    console.log(votes)
    return(
        <div className="issue">
            <h2> {title} </h2>
            <h3> {description} </h3>
            <Vote votes={votes} vote={vote} _id={_id} />
            <div className="comments-list">
                <CommentsList comments={comments} addComment={addComment} _id={_id} />
            </div>
        </div>
    )
}