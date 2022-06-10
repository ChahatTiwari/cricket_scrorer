const reducer = (state='striker',action) =>{
    if (action.type==='Striker'){
        return state = action.payload
    }
    else{
        return state;
    }
}
export default reducer;

// const reducer = (state=['striker'],action) =>{
//     if (action.type==='Striker'){
//         return state = action.payload
//     }
//     else{
//         return state;
//     }
// }
// export default reducer;