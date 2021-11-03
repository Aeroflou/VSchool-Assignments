import React, { useState } from 'react'

export default function CreatureForm(props){
    const { _id, submitCreature, btnTxt} = props
    const initInputs = {
        species: "",
        isHostile: false,
        shortDesc: "",
        description: ""
    }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const {name, value, type, checked} = e.target
        type === "checkbox" ? setInputs(prevInputs => ({...prevInputs, [name]: checked})) : setInputs(prevInputs => ({...prevInputs,[name]: value}))
    }
    function handleSubmit(e){
        e.preventDefault()
        submitCreature(inputs, _id)
        setInputs(initInputs)
    }
    
    const { species, isHostile, shortDesc, description } = inputs
    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="species" 
                value={species} 
                onChange={handleChange} 
                placeholder="Species"
            />
            <br />
            <label>
                Is This Creature Hostile?:
                <input 
                    type="checkbox" 
                    name="isHostile" 
                    value={isHostile} 
                    onChange={handleChange} 
                /> 
            </label>
            <br />
            <input 
                type="text" 
                name="shortDesc" 
                value={shortDesc} 
                onChange={handleChange} 
                placeholder="Very short summary."
            />
            <br />
            <input 
                type="text" 
                name="description" 
                value={description} 
                onChange={handleChange} 
                placeholder="A full, in-depth description."
            />
            <br />
            <button>Submit Creature to {btnTxt}</button>
        </form>
    )
}