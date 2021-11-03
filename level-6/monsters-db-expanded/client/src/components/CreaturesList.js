import React, {useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
//import axios from 'axios'
import {CreatureContext} from '../context/CreatureProvider'

export default function CreaturesList() {
    const {getCreatures, creatures} = useContext(CreatureContext)
    useEffect(() => {
        getCreatures()
    }, [getCreatures])
    const creaturesList = creatures.map(creature => 
        <div key={creature._id}>
            <h3><Link to={`creatures/${creature._id}`}>{creature.species}</Link></h3>
            <p>{creature.shortDesc}</p>
        </div>
    )
    return(
        <div>
            <h1>Creatures Page</h1>
            <h2>Behold all of these wonderful creatures!</h2>
            {creaturesList}
        </div>
    )
}