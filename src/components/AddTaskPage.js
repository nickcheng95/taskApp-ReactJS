import React, { useContext } from 'react'
import TaskForm from './TaskForm'
import Header from './Header'
import {addTask} from '../action/task'
import AuthContext from '../context/authContext'


const AddTaskPage = (props) =>{

    const {auth,taskDispatch} = useContext(AuthContext)

    const onSubmit = ({description,completed})=>{
        addTask(auth,{description,completed: completed === 'completed'})
            .then((res)=>{taskDispatch(res)})
        
        props.history.push('/')
    }
    return (
        <React.Fragment>
            <Header />
            <TaskForm onSubmit={onSubmit}/>

        </React.Fragment>
    )
}

export default AddTaskPage