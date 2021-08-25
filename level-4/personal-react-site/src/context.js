import React, {useContext} from "react"

const DumbContext = React.createContext()

function DumbContextProvider (props){
    const [dumbNumber, setDumbNumber] = useContext(0)

    const countUp = () => {
        setDumbNumber(prev => prev + 1)
    }
    return(
        <>
        <DumbContext.Provider value={dumbNumber, countUp}>
            {props.children}
        </DumbContext.Provider>
        </>
    )
}

export {DumbContextProvider, DumbContext}