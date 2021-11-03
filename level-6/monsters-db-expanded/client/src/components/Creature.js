import React, {useState, useEffect, useContext} from "react"
import CreatureForm from './CreatureForm'
import {useParams, Link} from "react-router-dom"
import {CreatureContext} from '../context/CreatureProvider'

function Creature(){
    const {creatureId} = useParams()
    const {creatures, editCreature, deleteCreature, user} = useContext(CreatureContext)
    const [creatureInfo, setCreatureInfo] = useState({})
    const [button, toggleButton] = useState(false)
    useEffect(() => {
        creatures.map(creature => {
            if(creature._id === creatureId){
                setCreatureInfo(creatures.find(creature => creature._id === creatureId))
                return creature
            }
            return creature
        })
    },[creatureId, creatures])

    return(
        <div className="creature">
            <div className="creatureIntro">
                <Link to="/creatures"> Back To Creatures List </Link>
                <h1>{creatureInfo.species}</h1>
                <h2>{creatureInfo.shortDesc}</h2>
            </div>
            <p className="creatureDesc">{creatureInfo.description}</p>

            {creatureInfo.isHostile ? 
                <div className="dangerTrue">
                    <h1>THIS CREATURE IS DANGEROUS</h1>
                    <p>Approaching this creature would be an unwise idea. No matter how cautious you are, likeliness is that you will be attacked or worse.</p>
                </div>
            :
                <div className="dangerFalse">
                    <h1>This creature is safe</h1>
                    <p>Assuming that this creature is treated with respect, and blah blah blah. You should be fine to approach this creature.</p>
                </div>
            }

            {creatureInfo.user === user._id &&
                <div>
                    <h3>Here to make some changes? Or just read up?</h3>
                    <button onClick={() => toggleButton(!button)}>{button ? "Stop Editing" : "Edit"}</button>
                    {button &&
                        <>
                            <CreatureForm _id={creatureId} btnTxt="Edit" submitCreature={editCreature}/>
                            <button onClick={() => deleteCreature(creatureId)}>Delete Creature</button>
                        </>
                    }
                </div>
            }
        </div>
    )
}
export default Creature