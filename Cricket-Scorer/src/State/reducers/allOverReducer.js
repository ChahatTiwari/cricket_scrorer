const reducer = (state=0,action) =>{
    if (action.type==='totalover'){
        return state = action.payload
    }
    else{
        return state;
    }
}
export default reducer;