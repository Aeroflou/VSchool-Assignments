import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"

function Class(){
    const {className} = useParams()
    const [classData, setClassData] = useState({})

    useEffect(() =>{
        fetch(`https://www.dnd5eapi.co/api/classes/${className}`)
            .then(response => response.json())
            .then(data => {
                setClassData(() => data)
            })
    }, [className])

    return(
        <div>
            <hr />
            <h1>Class Info</h1>
            <h2>The {classData.name}</h2>
            <hr />
            <h3>Hit Die</h3>
            <p>D{classData.hit_die}</p>
            <h3>Saving Throw Proficiencies</h3>
            {classData.saving_throws?.map(save => <p>{save.name}</p>)}
            <hr />
            <h3>Proficiencies</h3>
            {classData.proficiencies?.map(prof => <p>{prof.name}</p>)}
            <h3>Potential Proficiencies (Choose {classData.proficiency_choices && classData.proficiency_choices[0].choose})</h3>
            {classData.proficiency_choices && classData.proficiency_choices[0].from.map(prof => <p>{prof.name}</p>)}
            <hr />
        </div>
    )
}

export default Class

    /*console.log(classData)
    console.log(classData.saving_throws)
    console.log(classData.proficiencies)
    console.log(classData.proficiency_choices)*/