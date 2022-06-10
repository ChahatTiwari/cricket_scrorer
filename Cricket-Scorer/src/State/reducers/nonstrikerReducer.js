const reducer = (state='Nonstriker',action) =>{
    if (action.type==='Nonstriker'){
        return state = action.payload
    }
    else{
        return state;
    }
}
export default reducer;