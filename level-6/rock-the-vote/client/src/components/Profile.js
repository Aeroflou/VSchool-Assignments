import React, { useContext, useEffect } from 'react'
import IssueForm from './IssueForm'
import IssueList from './IssueList'
import { UserContext } from '../context/UserProvider'

export default function Profile (){
    const {user: {username}, addIssue, issues, vote, addComment, getUserIssues} = useContext(UserContext)
    console.log( issues )
    useEffect(() => {
        getUserIssues()
    }, [issues.legnth])

    return(
        <div className="profile">
            <h1> Welcome to your page {username} </h1>
            <h3>Add a new Issue</h3>
            <IssueForm addIssue={addIssue}/>
            <h3>All of your Issues</h3>
            <IssueList issues={issues} vote={vote} addComment={addComment}/>
        </div>
    )
}