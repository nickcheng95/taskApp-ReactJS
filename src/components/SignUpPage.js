import React, { useState, useContext } from 'react';
import classes from '../styles/SignupPage.module.css'
import validator from 'validator'
import {signupUser} from '../action/auth'
import AuthContext from '../context/authContext'

const SignupPage = (props) => {
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const {authDispatch} = useContext(AuthContext)

    const formSubmit = (e) => {
        e.preventDefault()
        
        const emailValidation = validator.isEmail(email)
        const nameValidation = name.trim() !== ''
        const passwordValidation = password.trim().length > 6 && !password.toLowerCase().includes('password')

        if(!emailValidation || !nameValidation || !passwordValidation){
            return
        }
        
        const data = {
            name,
            email,
            password,
            age: age ? age : 0
        }

        signupUser(data).then((res)=>{
            authDispatch(res)
            props.history.push('/')
        })

    }
    
    return (
        <div className={classes.home}>  
            <div className={classes['form']}>
                <h2>Create an account to manager your tasks</h2>
                <form onSubmit={formSubmit} className={classes['form-form']}>
                    <label>Email</label>
                    <input type='text' onChange={(e)=>setEmail(e.target.value)}></input>
                    <label>Password</label>
                    <input type='password' onChange={(e)=>setPassword(e.target.value)}></input>
                    <label>Name</label>
                    <input type='text' onChange={(e)=>setName(e.target.value)}></input>
                    <label>Age (optional)</label>
                    <input type='number' onChange={(e)=>setAge(e.target.value)}></input>
                    <button type='submit'>Sign Up</button>
                </form>
            </div>          
        </div>
    )
}

export default SignupPage