import React, {useContext} from "react"
import {AppContext} from "./AppContextProvider"

function Footer(){
    const {theme} = useContext(AppContext)

    return(
        <footer style={{
            position: "absolute",
            bottom: "0",
            margin: "0",
            padding: "10px 0",
            width: "100%"
        }} className={`${theme}-theme`}>
            <p>Incorporated from {theme}-theme.co</p>
        </footer>
    )
}

export default Footer