import React, { useEffect, useReducer, useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import DashboardPage from '../components/DashboardPage';
import UserPage from '../components/UserPage';
import AddTaskPage from '../components/AddTaskPage';
import EditTaskPage from '../components/EditTaskPage';
import NotFoundPage from '../components/NotFoundPage';
import HomePage from '../components/HomePage';
import SignUpPage from '../components/SignUpPage';
import authReducer from '../reducer/authReducer'
import AuthContext from '../context/authContext'
import {refreshLogin} from '../action/auth'
import taskReducer from '../reducer/taskReducer'
import userReducer from '../reducer/userReducer'
import {getTasks} from '../action/task'
import {getUser} from '../action/user'

const createHistory = require('history').createBrowserHistory

export const history = createHistory()


const AppRouter = () => {

    const [auth,authDispatch] = useReducer(authReducer,{})
    const [tasks,taskDispatch] = useReducer(taskReducer,[])
    const [user,userDispatch] = useReducer(userReducer,{})
    
    
    useEffect(async()=>{
        if(auth.token){
            const newuser = await getUser(auth)
            userDispatch(newuser)
            const tasks = await getTasks(auth)
            taskDispatch(tasks)
        }else{
            return
        }

    },[auth])    
    
    useEffect(()=>{
        authDispatch(refreshLogin())
        
    },[])



    return (
        <AuthContext.Provider value={{auth,authDispatch,tasks,taskDispatch,user}}>
            <Router history={history}>
                <Switch>
                    <Route path='/' component={HomePage} exact={true}></Route>
                    <Route path='/signup' component={SignUpPage} exact={true}></Route>
                    <Route path='/dashboard' component={DashboardPage} exact={true}></Route>
                    <Route path='/add_task' component={AddTaskPage} exact={true}></Route>
                    <Route path='/tasks/:id' component={EditTaskPage}></Route>
                    <Route path='/users' component={UserPage}></Route>
                    <Route component={NotFoundPage} />
                </Switch>
            </Router>
        </AuthContext.Provider>
        
    )
};

export default AppRouter;