import React from 'react'
import classes from '../styles/TaskSummary.module.css'
import {Link} from 'react-router-dom'

const TaskSummary = ({tasks}) => {
    const unfinishedAmount = tasks.length > 0 ? tasks.reduce((pre,acc)=>{
        if(acc.completed === false){
            return pre + 1
        }else{return pre}
    },0) : ''
    
    return (
        <div className={classes['summary']}>
            <div>
                {unfinishedAmount && <p>Viewing {tasks.length} tasks, {unfinishedAmount} Tasks unfinished</p>}
                <Link to='/add_task' className={classes['button']}>Add Task</Link>
            </div>
            <div >
                <Link className={classes['profile']} to='/users'>User Profile</Link>
            </div>
        </div>
    )
}

export default TaskSummary