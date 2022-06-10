const reducer = (state='',action) =>{
    if (action.type==='Bat'){
        return state = action.payload
    }
    else if (action.type==='Bowl'){
        return state = action.payload
    }
    else{
        return state;
    }
}
export default reducer;