import React,{useContext, useEffect, useState} from 'react';
import classes from '../styles/UserPage.module.css'
import Header from './Header'
import AuthContext from '../context/authContext'
import {updateUserPassword} from '../action/user'
import {userAvatar} from '../database/database'
import validator from 'validator'

const UserPage = (props) => {
    const {user,auth} = useContext(AuthContext)
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [age,setAge] = useState('')
    const [password,setPassword] = useState('')
    const [createdAt, setCreatedAt] = useState('')
    const [changePassword,setChangePassword] = useState(false)
    const [passwordError, setPasswordError] = useState('')
    const [formError, setFormError] = useState('')
    
    useEffect(()=>{
        if(user){
            setName(user.name)
            setEmail(user.email)
            setAge(user.age)
            setCreatedAt(new Date(user.createdAt).toLocaleDateString('en-US', {  
                day:   'numeric',
                month: 'short',
                year:  'numeric',
            }))
        }
    },[user])

    const onSubmit = (e)=>{
        e.preventDefault();

        const nameValidation = name.trim() !== '';
        const emailValidation = validator.isEmail(email)

        if(!nameValidation || !emailValidation){
            setFormError('Error');
            return
        }

        props.history.push('/dashboard')

    }

    const onCancelChangePassword = () => {
        setChangePassword(false); 
        setPassword(''); 
        setPasswordError('')
    }
    
    const onChangePassword = ()=>{
        if(password.trim().length < 6){
            return setPasswordError('The password should contain at least 6 letters')
        }else if(password.toLowerCase().includes('password')){
            return setPasswordError('The password should not contain PASSWORD')
        }
        updateUserPassword(auth,password)
        onCancelChangePassword()
    
    }



    
    return (
        <React.Fragment>
            <Header></Header>
            <div className={classes['user']}>
                <form className={classes['form']} onSubmit={onSubmit}> 
                    <label>Name</label>
                    <input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>  
                    <label>Email</label>
                    <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                    <label>Age</label>
                    <input type='text' value={age} onChange={(e)=>setAge(e.target.value)}></input> 
                    {formError && <p className={classes['error']}>{formError}</p>}
                    <button className={classes['button']} type='submit'>Update Profile</button> 
                    {!changePassword && <button className={classes['button2']} type='button' onClick={()=>setChangePassword(true)}>Change Password</button>}
                    {changePassword && <label>Password</label>}
                    {changePassword && <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>}
                    {passwordError && <p className={classes['error']}>{passwordError}</p>}
                    {changePassword && <div className={classes['button-password']}>
                        <button className={classes['cancel-password']} type='button' onClick={onCancelChangePassword}>Cancel</button>
                        <button className={classes['change-password']} type='button' onClick={onChangePassword}>Update Password</button>
                    </div>}    
                    
                    <p className={classes['date']}>{`Been our member since ${createdAt}`}</p>
                    <button type='button' className={classes['button3']}>Delete account</button>
                </form>
                <img src={userAvatar(user._id)}></img>
            </div>
        </React.Fragment>

    )
}

export default UserPage