import database from '../database/database'

export const getTasks = async(auth) => {
    const tasks = await database({
        url: '/tasks',
        headers: {
            'Authorization': `Bearer ${auth.token}` 
        }
    })
    return {
        type: 'GET_TASKS',
        tasks
    }
}

export const addTask = async(auth,task) =>{
    const newtask = await database({
        url: '/tasks',
        headers: {
            'Authorization': `Bearer ${auth.token}` 
        },
        method: 'POST',
        body: task
    })
    return {
        type: 'ADD_TASK',
        task: newtask
    }

}

export const deleteTask = (auth,_id) => {
    database({
        url: `/tasks/${_id}`,
        headers: {
            'Authorization': `Bearer ${auth.token}` 
        },
        method: 'DELETE',
    })

    return {
        type: 'DELETE_TASK',
        _id
    }
}

export const updateTask = (auth, updates, _id) =>{
    database({
        url: `/tasks/${_id}`,
        headers: {
            'Authorization': `Bearer ${auth.token}` 
        },
        method: 'PATCH',
        body: updates
    })

    return {
        type: 'UPDATE_TASK',
        _id,
        updates
    }

}