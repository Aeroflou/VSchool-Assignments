import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"

function Classes(){
    const [classesData, setClassesData] = useState([])

    useEffect(() => {
        fetch("https://www.dnd5eapi.co/api/classes/")
            .then(response => response.json())
            .then(data => {
                setClassesData(() => data.results)
            })
    }, [])
    

    const classList = classesData.map(cl => (
        <li key={cl.index}>
            <h3><Link to={`/classes/${cl.index}`}> {cl.name} </Link></h3>
        </li>
    ))

    return(
        <div>
			<hr />
            <h1>Classes</h1>
            <ul>
                {classList}
            </ul>
        </div>
    )
}

export default Classes