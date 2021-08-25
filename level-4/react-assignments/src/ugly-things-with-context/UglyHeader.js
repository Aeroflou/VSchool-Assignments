import React, {useState, useContext} from "react"
import {AppContext} from "/Users/goobshmood/Documents/Dev/assignments/level-4/react-assignments/src/AppContextProvider"

function UglyHeader() {
    let [newTitle, setNewTitle] =  useState("")
    let [newDescription, setNewDescription] = useState("")
    let [newUrl, setNewUrl] = useState("")
    
    const handleChangeT = (e) => {
        setNewTitle(e.target.value)
    }

    const handleChangeD = (e) => {
        setNewDescription(e.target.value)
    }

    const handleChangeU = (e) => {
        setNewUrl(e.target.value)
    }

    const {addUglyThing} = useContext(AppContext)

    return(
        <main>
            <input 
                type="text"
                name="newTitle"
                placeholder="Disgusting Title"
                value={newTitle}
                onChange={handleChangeT()}
            />
            <input 
                type="text"
                name="newDescription"
                placeholder="Nasty Description"
                value={newDescription}
                onChange={handleChangeD()}
            />
            <input 
                type="text"
                name="newUrl"
                placeholder="Ugly URL"
                value={newUrl}
                onChange={handleChangeU()}
            />
            <button onClick={() => {
                addUglyThing(newTitle, newDescription, newUrl)
            }}>Submit Ugly Thing</button>
        </main>
    )
}

export default UglyHeader