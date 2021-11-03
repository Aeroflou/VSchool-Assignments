import React, { useContext } from 'react'
import CreatureForm from './CreatureForm'
import { CreatureContext } from '../context/CreatureProvider'

export default function Welcome(){
    const {user: {username}, addCreature} = useContext(CreatureContext)
    return(
        <div>
            <h1> Welcome to your personal page watcher {username}! </h1>
            <h3>Have some new reports to add?</h3>
            <CreatureForm submitCreature={addCreature} btnTxt="Add"/>
            <h3> A quick word on the mysteries of the world! </h3>
            <p>Heed my words well! It would serve well to us all for you not to falsify the information you gather and put out for all to see. Yes even you, after all if you won't be honest, why should anyone else. We're already in a situation of great mystique filled with many uncertanties. One bit of misinformation may lead to anyone's demise. That is all.</p>
        </div>
    )
}