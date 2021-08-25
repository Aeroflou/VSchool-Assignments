import React, {useContext} from "react"
import {AppContext} from "./AppContextProvider"

function Header(){
    const {theme} = useContext(AppContext)
    return(
        <header className={`${theme}-theme`}>
            <p>Header</p>
        </header>
    )
}

export default Header