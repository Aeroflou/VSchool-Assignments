import React from 'react'
import Issue from './Issue'

export default function IssueList(props){
    return(
        <div className="issue-list">
            {props.issues ? 
                props.issues.map(issue => {
                return <Issue {...issue} vote={props.vote} addComment={props.addComment} key={issue._id}/>
                }
            ) : "wow, there must be world peace"}
        </div>
    )
}