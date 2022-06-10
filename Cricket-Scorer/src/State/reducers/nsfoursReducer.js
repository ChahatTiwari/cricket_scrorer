

const reducer= (state=0,action) =>{
    if (action.type==='nsfours'){
        return state + action.payload;
    }
    else{
        return state;
    }
}

export default reducer;