import { combineReducers } from "redux";
import hostReducer from "./hostReducer";
import visitorReducer from "./visitorReducer";
import allOverReducer from "./allOverReducer";
import tossReducer from "./tossReducer";
import strikerReducer from "./strikerReducer";
import bowlerReducer from "./bowlerReducer";
import nonstrikerReducer from "./nonstrikerReducer";
import runReducer from "./runReducer";
import allrunReducer from "./allrunReducer";
import nonstrikerrunReducer from "./nonstrikerrunReducer";
import overReducer from "./overReducer";
import ballReducer from "./ballReducer";
import strikerballReducer from "./strikerballReducer";
import nonstrikerballReducer from "./nonstrikerballReducer";
import sfoursReducer from "./sfoursReducer";
import nsfoursReducer from "./nsfoursReducer";
import ssixReducer from "./ssixReducer";
import nssixReducer from "./nssixReducer";
import wideReducer from "./wideReducer";
import byesReducer from "./byesReducer";
import currentrunrateReducer from "./currentrunrateReducer";
import bowlerrunReducer from "./bowlerrunReducer";
import bowlerbowlReducer from "./bowlerbowlReducer";

// import paisaReducer from "./paisaReducer";
// import userReducer from "./userReducer";

const reducers = combineReducers({
    host: hostReducer,
    visitor : visitorReducer,
    toss : tossReducer,
    totalover:allOverReducer,
    over:overReducer,
    ball:ballReducer,
    striker:strikerReducer,
    nonstriker:nonstrikerReducer,
    bowler:bowlerReducer,
    strikerRun:runReducer,
    nonstrikerRun:nonstrikerrunReducer,
    totalruns:allrunReducer,
    strikerball:strikerballReducer,
    nonstrikerball:nonstrikerballReducer,
    sfours:sfoursReducer,
    ssix:ssixReducer,
    nsfours:nsfoursReducer,
    nssix:nssixReducer,
    wides:wideReducer,
    byes:byesReducer,
    currentrunrate:currentrunrateReducer,
    bowlerrun:bowlerrunReducer,
    bowlerbowl:bowlerbowlReducer,


    // paisa: paisaReducer,
    // rokda: amountReducer,
    // users: userReducer
    
})


export default reducers;