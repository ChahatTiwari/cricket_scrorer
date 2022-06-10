const reducer = (state='bowler',action) =>{
    if (action.type==='Bowler'){
        return state + action.payload
    }
    else{
        return state;
    }
}
export default reducer;