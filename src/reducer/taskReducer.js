const taskReducer = (state,action) => {
    switch(action.type){
        case 'GET_TASKS':
            return action.tasks
        case 'ADD_TASK':
            return [...state,action.task]
        case 'DELETE_TASK':
            return state.filter((val)=>val._id !== action._id)
        
        case 'UPDATE_TASK':
            return state.map((val)=>{
                if(val._id === action._id){
                    return {
                        ...val,
                        ...action.updates
                    }
                }else{
                    return val
                }
            })
            
        default: 
            return state
    }
}

export default taskReducer