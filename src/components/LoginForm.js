import React, { useContext, useEffect, useState } from 'react';
import classes from '../styles/LoginForm.module.css'
import {Link} from 'react-router-dom'
import {history} from '../router/Approuter'
import AuthContext from '../context/authContext'
import {authLogin} from '../action/auth'

const LoginForm = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const {authDispatch,auth} = useContext(AuthContext)
    
    const formSubmit = async(e) => {
        e.preventDefault()
        const login = await authLogin(email,password)
        authDispatch(login)
        
    }

    useEffect(()=>{
        if(auth.token){
            history.push('/dashboard')  
        }
    },[auth])
    
    return (
        <form onSubmit={formSubmit} className={classes.form}>
            <label>Email</label>
            <input type='text' onChange={(e)=>setEmail(e.target.value)}></input>
            <label>Password</label>
            <input type='password' onChange={(e)=>setPassword(e.target.value)}></input>
            <button type='submit'>Login</button>
            <Link to='/signup' className={classes.link}>Not registered? <span className={classes['link-signup']}>Create an account</span></Link>
        </form>
    )
}

export default LoginForm