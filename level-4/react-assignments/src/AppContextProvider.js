import React, {useState} from "react"
import axios from "axios"

const AppContext = React.createContext()
const page = "https://api.vschool.io/austinbyas/thing"

function AppContextProvider (props){
    const [theme, setTheme] = useState("light")
    const [uglyThings, setUglyThings] = useState([])

    const changeTheme = (theme) => {
        setTheme({theme})
    }

    const deleteUglyThing = (uglyId) => {
        let newArray = uglyThings.filter(ugly => uglyId !== ugly.id )
        setUglyThings(prev => ({...prev, uglyThings: newArray}))
        axios.delete(`${page}/${uglyId._id}`)
        console.log("ugly thing deleted!")
    }

    const getUglyThings = () => {
        axios.get(page)
        .then(res => {
            setUglyThings(res.data)
        })
        .catch(err => console.log(err))
        console.log("ugly things got!")
    }

    const editUglyThing = (uglyThing, newTitle, newDesc) => {
        let newArr = uglyThings.map(ugly => {
        if(uglyThing.id === ugly.id){
              uglyThing.topText = newTitle
              uglyThing.bottomText = newDesc
              axios.put(`${page}/${uglyThing._id}`, newTitle, newDesc)
              .then(res => {
                  console.log(res.data)
              })
              .catch(err => console.log(err))
              return uglyThing
        } else{
            return ugly
        }})
        setUglyThings(prev => ({...prev, uglyThings: newArr }))
        console.log("changes made!")
    }

    const addUglyThing = (title, desc, url) => {
        const uglyObj = {
            title: title,
            description: desc,
            imgUrl: url
        }
        axios.post(page,uglyObj)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    const value = {
        theme: theme,
        changeTheme: changeTheme,
        uglyThings: uglyThings,
        addUglyThing: addUglyThing,
        getUglyThings: getUglyThings,
        deleteUglyThing: deleteUglyThing,
        editUglyThing: editUglyThing
    }

    return(
        <AppContext.Provider value={value}>
            {() => props.children}
        </AppContext.Provider>
    )
}

export {AppContextProvider, AppContext}