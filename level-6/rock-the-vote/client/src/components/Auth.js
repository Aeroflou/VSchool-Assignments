import React, { useState, useContext } from 'react'
import AuthForm from './AuthForm'
import { UserContext } from '../context/UserProvider'

export default function Auth(){
    const initInputs = {username: "", password: ""}
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)
    const { signup, login, errMsg, resetAuthErr } = useContext(UserContext)
    
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
        <div className="auth-container">
            <h1>ROCK THE VOTE!</h1>
            { !toggle ?
                <>
                    <AuthForm 
                        handleChange={handleChange}
                        handleSubmit={handleSignup}
                        btnText="Sign-Up"
                        inputs={inputs}
                        errMsg={errMsg}
                    />
                    <p onClick={() => toggleForm()} > Already have an Account? </p>
                </>:
                <>
                    <AuthForm 
                        handleChange={handleChange}
                        handleSubmit={handleLogin}
                        btnText="Login"
                        inputs={inputs}
                        errMsg={errMsg}
                    />
                    <p onClick={() => toggleForm()} > Signup -> </p>
                </>
            }
        </div>
    )
}