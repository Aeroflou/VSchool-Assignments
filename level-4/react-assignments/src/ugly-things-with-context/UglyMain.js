import React, {useEffect, useContext} from "react"
import UglyThing from "./UglyThing"
import UglyHeader from "./UglyHeader"
import {AppContext} from "/Users/goobshmood/Documents/Dev/assignments/level-4/react-assignments/src/AppContextProvider"

function UglyMain (){
    const {getUglyThings, uglyThings, deleteUglyThing, editUglyThing} = useContext(AppContext)

    useEffect(() => {
        getUglyThings()
    }, [])

    const uglies = uglyThings.map((uglyThing,index) => <UglyThing title={uglyThing.title} description={uglyThing.description} url={uglyThing.url} delete={deleteUglyThing} edit={editUglyThing} id={index} key={index}/>)
    return(
        <div>
            <UglyHeader />
            {uglies}
        </div>
    )
}

export default UglyMain