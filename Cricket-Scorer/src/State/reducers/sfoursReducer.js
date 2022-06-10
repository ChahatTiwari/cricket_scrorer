const reducer= (state=0,action) =>{
    if (action.type==='sfours'){
        return state + action.payload;
    }
    else{
        return state;
    }
}

export default reducer;