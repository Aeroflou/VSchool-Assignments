import React from 'react'

export default function Vote(props){
    const {votes ,_id ,vote} = props
    let posVotesCount = 0
    let negVotesCount = 0
    if(votes){
        for(let i = 0 ; i < votes.length; i++){
            if(votes[i].upDownVotes) {
                posVotesCount++
            } else {
                negVotesCount++
            }
        }
    }
    return(
        <div>
            <span> Upvotes: {posVotesCount} </span>
            <span> DownVotes: {negVotesCount} </span>
            <button onClick={() => vote(_id, {upDownVotes: true})}>Upvote</button>
            <button onClick={() => vote(_id, {upDownVotes: false})}>Downvote</button>
        </div>
    )
}