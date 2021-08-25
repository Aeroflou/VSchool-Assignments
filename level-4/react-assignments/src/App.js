import React, {useState, useContext} from "react"
import Header from "./Header"
import Footer from "./Footer"
import {AppContext} from "./AppContextProvider"
import "./styles.css"

import UglyMain from "./ugly-things-with-context/UglyMain"

function App (){
    const [newTheme, setNewTheme] = useState("")

    const handleChange = (e) => {
        setNewTheme(e.target.value)
    }

    const {theme,changeTheme} = useContext(AppContext)
    return(
        <div>
            <Header />
                <h1>Choose a theme!</h1>
                <p>Right now the {theme} Theme is currently displayed</p>
                <select
                    name="newTheme"
                    onChange={handleChange}
                >
                    <option value="dark">Dark Theme</option>
                    <option value="light">Light Theme</option>
                    <option value="neon">Neon Theme</option>
                    <option value="superman">Superman Theme</option>
                </select>
                <button onClick={() => {changeTheme(newTheme)}}>Choose Theme</button> 
                <UglyMain />
            <Footer />
        </div>
    )
}

export default App