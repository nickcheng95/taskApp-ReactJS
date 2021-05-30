import React,{useContext} from 'react';
import classes from '../styles/Header.module.css'
import AuthContext from '../context/authContext'
import {Link} from 'react-router-dom'
import {authLogout} from '../action/auth'



const Header = () => {
    const {authDispatch,auth} = useContext(AuthContext)

    const logout = () => {
        authDispatch(authLogout(auth))
    }

    return (
        <div className={classes.header}>
            <Link to='/dashboard' className={classes.title}>Task App</Link>
            <Link className={classes.button} onClick={logout} to='/'>Logout</Link>
        </div>
    )
}

export default Header