import React, {useEffect, useState} from 'react';
import LoginForm from './LoginForm'
import classes from '../styles/HomePage.module.css'

const HomePage = () => {
    return (
        <div className={classes.home}>
            <div className={classes['home-info']}>
                <h1>Task App</h1>
                <LoginForm></LoginForm>
            </div>

        </div>
    )
}

export default HomePage