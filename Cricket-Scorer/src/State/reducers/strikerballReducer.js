
const reducer= (state=0,action) =>{
    if(action.type==='strikerball'){
        return state + action.payload;
    }
    else{
        return state;
    }
}

export default reducer;