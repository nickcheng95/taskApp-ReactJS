import React, { useContext } from 'react'
import TaskForm from './TaskForm'
import Header from './Header'
import {deleteTask,updateTask} from '../action/task'
import AuthContext from '../context/authContext'


const EditTaskPage = (props) =>{
    const {auth,taskDispatch,tasks} = useContext(AuthContext)
    const task = tasks.find((val)=>val._id === props.match.params.id)

    const deleteButton = ()=>{
        taskDispatch(deleteTask(auth,props.match.params.id))
        props.history.push('/')
    }

    const onSubmit = (updates) => {
        taskDispatch(updateTask(auth,updates,props.match.params.id))
        props.history.push('/')
    }


    return (
        <React.Fragment>
            <Header />
            <TaskForm onSubmit={onSubmit} deleteButton={deleteButton} task={task}/>
        </React.Fragment>
    )
}

export default EditTaskPage