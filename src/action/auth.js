import database from '../database/database'

export const refreshLogin = () => {
    const token = localStorage.getItem('task-app_JWT')
    if(token){
        return {type:'REFRESH',token}
    }else{
        return {type: 'LOGOUT'}
    }
}

export const authLogin = async(email,password) => {
    const response = await database({
        url: `/users/login`,
        body:{
            email,
            password
        },
        method: 'POST'
    })
    
    localStorage.setItem('task-app_JWT',response.token)
    
    return {
        type: 'LOGIN',
        token: response.token
    }
    
    
}

export const authLogout = (auth) => {
    database({
        url: `/users/logout`,
        headers: {
            'Authorization': `Bearer ${auth.token}` 
        },
        method: 'POST'
    })

    localStorage.removeItem('task-app_JWT')
    return {type: 'LOGOUT'}
}