
// const initialstate(){

// }

const reducer= (state=0,action) =>{
    if(action.type === 'ball'){
        return state + action.payload;
    }
    else{
        return state;
    }
}
export default reducer;