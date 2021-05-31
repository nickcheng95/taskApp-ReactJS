import React from 'react'
import classes from '../styles/TaskItem.module.css'
import {Link} from 'react-router-dom'

const TaskItem = ({description,completed,_id}) => {
    return (
        <Link className={classes['task']} to={`/tasks/${_id}`}>
            <p>{description}</p>
            <p>{completed === true ? 'Completed √' : 'Not Completed ×'}</p>
        </Link>
    )
}

export default TaskItem