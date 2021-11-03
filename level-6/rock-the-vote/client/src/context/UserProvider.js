import React, { useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()
const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})



export default function UserProvider(props){
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        issues: [],
        errMsg: ""
    }
    const [userState, setUserState] = useState(initState)

    function getIssues(){
        userAxios.get("/api/issues")
        .then(res => {
            const issuesSort = res.data.map(issue => {
                userAxios.get(`/api/issues/comment/${issue._id}`)
                    .then(resCom => {
                        issue.comments = resCom.data
                    })
                    .catch(err => console.log(err.response.data.errMsg))
                userAxios.get(`/api/issues/vote/${issue._id}`)
                    .then(resVot => {
                        issue.votes = resVot.data
                    })
                .catch(err => console.log(err.response.data.errMsg))
                return issue
            })
            setUserState(prevState => ({
                ...prevState,
                issues: issuesSort
            }))
        })
        .catch(err => console.log(err))
    }
    function getUserIssues(){
        userAxios.get("/api/issues/user")
        .then(res => {
            const issuesSort = res.data.map(issue => {
                userAxios.get(`/api/issues/comment/${issue._id}`)
                    .then(resCom => {
                        issue.comments = resCom.data
                    })
                    .catch(err => console.log(err.response.data.errMsg))
                userAxios.get(`/api/issues/vote/${issue._id}`)
                    .then(resVot => {
                        issue.votes = resVot.data
                    })
                    .catch(err => console.log(err.response.data.errMsg))
                return issue
            })
            setUserState(prevState => ({
                ...prevState,
                issues: issuesSort
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    function vote(issueId, voteOutocome){
        userAxios.post(`/api/issues/vote/${issueId}`, voteOutocome)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    function addComment(issueId, content){
        userAxios.post(`/api/issues/comment/${issueId}`, content)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err.response.data.errMsg))        
    }
    /*
        userState.issues.find(issue => issueId, {
            userState.issue.map()
        })
    */

    function signup(credentials){
        axios.post("/auth/signup", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                getUserIssues()
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
    }
    function login(credentials){
        axios.post("/auth/login", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                getUserIssues()
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))        
    }
    function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
            issues: []
        })
    }
    function handleAuthErr(errMsg){
        setUserState(prevState =>  ({
            ...prevState,
            errMsg
        }))
    }
    function resetAuthErr(){
        setUserState(prevState => ({
            ...prevState,
            errMsg: ""
        }))
    }

    function addIssue(issue){
        userAxios.post("/api/issues", issue)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    issues: [...prevState.issues, res.data]
                }))
                console.log(res.data)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    return(
        <UserContext.Provider value={{...userState, signup, login, logout , handleAuthErr, resetAuthErr, getUserIssues, getIssues, addIssue, vote, addComment }} >
            {props.children}
        </UserContext.Provider>
    )
}