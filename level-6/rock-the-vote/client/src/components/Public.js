import React, { useContext, useEffect } from 'react'
import IssuesList from './IssueList'
import { UserContext } from '../context/UserProvider'

export default function Public(){
    const { issues, vote, addComment, getIssues } = useContext(UserContext)
    useEffect(() => {
        getIssues()
    }, [issues.length])
    return(
        <div>
            <h1>Public Issues</h1>
            <IssuesList issues={issues} vote={vote} addComment={addComment}/>
        </div>
    )
}