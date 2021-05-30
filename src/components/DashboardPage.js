import React, { useContext, useEffect } from 'react'
import Header from './Header'
import classes from '../styles/DashboardPage.module.css'
import TaskList from './TaskList'
import TaskSummary from './TaskSummary'
import AuthContext from '../context/authContext'

const DashboardPage = () => {

    const {tasks} = useContext(AuthContext)

    return (
        <React.Fragment>
            <Header></Header>
            <TaskSummary tasks={tasks} />

            <div className={classes.dashboard}><TaskList tasks={tasks}/></div>
        </React.Fragment>
    )
}

export default DashboardPage