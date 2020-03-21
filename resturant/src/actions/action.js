// export const newActions = (name)=>{
//     return {
//         type:'CHANGE_NAME',
//         payload : name
//     }
// }

export const newActions = (name)=>{
    return (dispatch)=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(res2=>{
            dispatch({type:'CHANGE_NAME',
            payload :res2.title})    
        })
        
    }
}