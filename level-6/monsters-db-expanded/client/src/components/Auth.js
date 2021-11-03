import React, { useState, useContext } from 'react'
import AuthForm from './AuthForm'
import { CreatureContext } from '../context/CreatureProvider'

export default function Auth(){
    const initInputs = {username: "", password: ""}
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)
    const { signup, login, errMsg, resetAuthErr } = useContext(CreatureContext)
    
    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSignup(e){
        e.preventDefault()
        signup(inputs)
    }

    function handleLogin(e){
        e.preventDefault()
        login(inputs)
    }

    function toggleForm(){
        setToggle(!toggle)
        resetAuthErr()
    }
    return(
        <div>
            <h1>Creatures Abound...</h1>
            { !toggle ?
                <>
                    <AuthForm 
                        handleChange={handleChange}
                        handleSubmit={handleSignup}
                        btnText="Claim Empty Book"
                        inputs={inputs}
                        errMsg={errMsg}
                    />
                    <p onClick={() => toggleForm()} > Do you happen to already have a journal? </p>
                </>:
                <>
                    <AuthForm 
                        handleChange={handleChange}
                        handleSubmit={handleLogin}
                        btnText="Open Your Book"
                        inputs={inputs}
                        errMsg={errMsg}
                    />
                    <p onClick={() => toggleForm()} > You may want to make a journal first. -> </p>
                </>
            }
        </div>
    )
}