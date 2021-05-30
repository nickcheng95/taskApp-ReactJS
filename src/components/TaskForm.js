import React, { useState } from 'react'
import classes from '../styles/TaskForm.module.css'

const TaskForm = (props)=>{
    let descriptionDefault = ''
    let completedDefault = false
    let createdAt = 0;
    
    if(props.task){
        descriptionDefault = props.task.description;
        completedDefault = props.task.completed;     
        createdAt = new Date(props.task.createdAt).toLocaleDateString('en-US', {  
            day:   'numeric',
            month: 'short',
            year:  'numeric',
        });
    }
    
    const [description,setDescription] = useState(descriptionDefault)
    const [completed,setCompleted] = useState(completedDefault)
    
    const onSubmit = (e) => {
        e.preventDefault()
        props.onSubmit({description,completed})
    }
    return(
        <form className={classes['form']} onSubmit={onSubmit}>
            <label>Description</label>
            <input type='text' onChange={(e)=>setDescription(e.target.value)} value={description}></input>
            <label>Finished ?</label>
            <select onChange={(e)=>setCompleted(e.target.value)} value={completed}>
                <option value={true}>Completed</option>
                <option value={false}>Not Completed</option>
            </select>
            {props.task && <p className={classes['time']}>Created At: {createdAt}</p>}
            <div className={classes['button-box']}>
                <button className={classes['button']} type='submit'>{props.task ? 'Save' : 'Add Task'}</button>
                {props.task && <button className={classes['delete']} onClick={props.deleteButton}>Delete</button>}
            </div>
        </form>
    )
}

export default TaskForm