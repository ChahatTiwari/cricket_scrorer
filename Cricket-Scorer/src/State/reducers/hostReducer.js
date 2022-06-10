
const  reducer = (state='host',action) =>{
    if(action.type==='HostTeam'){
        return state = action.payload
    }
    else {
        return state;
    }
}

export default reducer;