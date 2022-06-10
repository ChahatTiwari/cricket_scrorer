

const reducer= (state=0,action) =>{
    if(action.type==='byes'){
        return state + action.payload;
    }
    else{
        return state;
    }
}

export default reducer;