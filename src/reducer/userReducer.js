const userReducer = (state,action) => {
    switch(action.type){
        case 'GET_USER':
            return {...action.user}
        case 'UPDATE_USER':
            return {...state,...action.updates}
        case 'RESET_USER':
            return {}
        default: 
            return state
    }
}

export default userReducer