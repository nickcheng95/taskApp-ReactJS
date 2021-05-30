import React from "react"
import TaskItem from './TaskItem'
import classes from '../styles/TaskItem.module.css'

const TaskList = ({tasks}) => {
    
    return (
        <React.Fragment>
            <div className={classes['task-title']}>Your Tasks</div>
            {tasks.length > 0 ? tasks.map((val,index)=>{
                return <TaskItem {...val} key={index}></TaskItem>
            }) : <p className={classes['task-notasks']}>You have no tasks</p>}
        </React.Fragment>
    )
}

export default TaskList