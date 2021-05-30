const authReducer = (state,action) => {
    switch(action.type){
        case 'LOGIN':
            return {
                token: action.token
            }
        case 'LOGOUT':
            return {}
        case 'REFRESH':
            return{
                token: action.token
            }
        case 'DEFAULT':
            return state
        default:
            return state
    }
}

export default authReducer