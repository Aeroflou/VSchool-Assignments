import React, { useState, useCallback } from 'react'
import axios from 'axios'

export const CreatureContext = React.createContext()
const journalAxios = axios.create()
journalAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})


export default function UserProvider(props){
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        creatures: [],
        errMsg: ""
    }
    const [journalState, setJournalState] = useState(initState)

    const getCreatures = useCallback(function (){
        journalAxios.get("/api/creatures")
        .then(res => {
            setJournalState(prevState => ({
                ...prevState,
                creatures: res.data
            }))
        })
        .catch(err => console.log(err))
    }, [])
    
    function addCreature(creature){
        journalAxios.post("/api/creatures", creature)
            .then(res => {
                setJournalState(prevState => ({
                    ...prevState,
                    creatures: [...prevState.creatures, res.data]
                }))
                console.log(res.data)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    function editCreature(creature, creatureId){
        journalAxios.put(`/api/creatures/${creatureId}`, creature)
            .then(res => {
                setJournalState(prevState => ({
                    ...prevState,
                    creatures: [prevState.creatures.map(creature => {
                        if(creature._id === creatureId){
                            return res.data
                        } else {
                            return creature
                        }
                    })]
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    function deleteCreature(creatureId){
        journalAxios.delete(`/api/creatures/${creatureId}`)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function signup(credentials){
        axios.post("/auth/signup", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                getCreatures()
                setJournalState(prevJournalState => ({
                    ...prevJournalState,
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
                console.log(res.data)
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                getCreatures()
                setJournalState(prevJournalState => ({
                    ...prevJournalState,
                    user,
                    token
                }))
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))        
    }
    function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setJournalState({
            user: {},
            token: "",
            creatures: []
        })
    }
    function handleAuthErr(errMsg){
        setJournalState(prevState =>  ({
            ...prevState,
            errMsg
        }))
    }
    function resetAuthErr(){
        setJournalState(prevState => ({
            ...prevState,
            errMsg: ""
        }))
    }

    return(
        <CreatureContext.Provider value={{...journalState, getCreatures, addCreature, editCreature, deleteCreature, signup, login, logout, handleAuthErr, resetAuthErr }} >
            {props.children}
        </CreatureContext.Provider>
    )
}