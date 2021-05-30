export const userAvatar = (id) => {
    return `https://task-manager-nodejsapp.herokuapp.com/users/${id}/avatar`
}

const dbRequest = async({method='GET',body=null,url,headers={}}) => {
    try{
        const response = await fetch(`https://task-manager-nodejsapp.herokuapp.com${url}`,{
            method,
            body: body ? JSON.stringify(body) : null,
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            }
        })
    
        if(!response){
            return 
        }else{
            const jsonres = await response.json()
            return jsonres
        }
    }catch(e){
        console.log(e)
    }


}

export default dbRequest