import React from 'react';
import classes from '../styles/SignupPage.module.css'


const SignupPage = () => {
    const formSubmit = (e) => {
        e.preventDefault()
        const data = {
            name: 'ccc',
            email: 'ccc@aaa.com',
            password: 'asdasdadwad'
        }
        console.log(JSON.stringify(data))
        fetch('https://task-manager-nodejsapp.herokuapp.com/users',{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response)=>{
            return response.json()
        }).then((res)=>{console.log(res)}).catch(e=>console.log(e.message))
    }
    
    return (
        <div className={classes.home}>  
            <div className={classes['form']}>
                <h2>Create an account to manager your tasks</h2>
                <form onSubmit={formSubmit} className={classes['form-form']}>
                    <label>Email</label>
                    <input type='text'></input>
                    <label>Password</label>
                    <input type='password' ></input>
                    <label>Name</label>
                    <input type='text' ></input>
                    <label>Age (optional)</label>
                    <input type='text' ></input>
                    <button type='submit'>Sign Up</button>
                </form>
            </div>          
        </div>
    )
}

export default SignupPage