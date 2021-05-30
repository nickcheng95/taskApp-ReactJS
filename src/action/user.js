import database from '../database/database'

export const getUser = async(auth) => {
    const user = await database({
        url: `/users/me`,
        headers: {
            'Authorization': `Bearer ${auth.token}` 
        },
        method: 'GET'
    })

    return {
        type: 'GET_USER',
        user
    }
}

export const updateUserPassword = (auth,password) => {
    database({
        url: `/users/me`,
        headers: {
            'Authorization': `Bearer ${auth.token}` 
        },
        method: 'PATCH',
        body: {password: password}
    }).then()
}

export const updateUser = (auth,updates) => {
    database({
        url: `/users/me`,
        headers: {
            'Authorization': `Bearer ${auth.token}` 
        },
        method: 'PATCH',
        body: updates
    }).then()
}