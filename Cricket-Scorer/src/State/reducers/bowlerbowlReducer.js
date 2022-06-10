// var a = 0;
// const initialstate=() =>{
//      a : 0,

// }
const reducer= (state=0,action) =>{
    if(action.type==='bowlerbowl'){
        return state + action.payload;
    }
    else{
        return state;
    }
}
export default reducer;