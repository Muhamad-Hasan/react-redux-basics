const initialState = {
    name :'Aun',
    wishes:["work" , "eat"]
} 

const reducer = (state=initialState , action) =>{
    console.log('action'  , action);
    if(action.type ==='CHANGE_NAME' ){
        return {
            ...state,
            name : action.payload
        }

    
    }
    return state;
}

export default reducer; 