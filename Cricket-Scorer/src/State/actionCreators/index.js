// export const depositMoney = (amount) => {
//     return (dispatch) => {
//         dispatch({
//             type: 'deposit',
//             payload: amount
//         })
//     }
// }
// export const withdrawMoney = (amount) => {
//     return (dispatch) => {
//         dispatch({
//             type: 'withdraw',
//             payload: amount
//         })
//         console.log("amount", amount)
//     }
// }
export const handleOnHostTeam = (host) => {
    return (dispatch) => {
        dispatch({
            type: 'HostTeam',
            payload: host
        })
        console.log("Host team", host)
    }
}
export const handleOnVisitorTeam = (visitor) => {
    return (dispatch) => {
        dispatch({
            type: "VisiorTeam",
            payload: visitor
        })
        console.log("handlevisitor team")
    }
}
export const handelBat = (toss) => {
    return (dispatch) => {
        dispatch({
            type: 'Bat',
            payload: toss
        })
        console.log("Bat", toss)
    }
}
export const handelBowl = (toss) => {
    return (dispatch) => {
        dispatch({
            type: 'Bowl',
            payload: toss
        })
        console.log("bowl", toss)
    }
}
export const handleAllOver = (totalover) => {
    return (dispatch) => {
        dispatch({
            type: 'totalover',
            payload: totalover
        })
    }
}
// first page compleate here// 

export const handleStriker = (striker) => {
    // var nitin = setHostvalue(event.target.value);
    // console.log(nitin);
    return (dispatch) => {
        dispatch({
            type: 'Striker',
            payload: striker
        })
        // console.log("Host striker", striker)
    }
}
export const handleNonstriker = (nonstriker) => {
    // var nitin = setHostvalue(event.target.value);
    // console.log(nitin);
    return (dispatch) => {
        dispatch({
            type: 'Nonstriker',
            payload: nonstriker
        })
        // console.log("Host nonstriker", nonstriker)
    }
}
export const handleBowler = (bowler) => {
    // var nitin = setHostvalue(event.target.value);
    // console.log(nitin);
    return (dispatch) => {
        dispatch({
            type: 'Bowler',
            payload: bowler
        })
        // console.log("Host bowler", bowler)
    }
}
export const handleBowlerRun = (bowlerrun) => {
    return (dispatch) => {
        dispatch({
            type: 'Bowlerrun',
            payload: bowlerrun
        })
        // console.log("Host bowler", bowler)
    }
}
export const handleBowlerbowl = (bowlerbowl) => {
    return (dispatch) => {
        dispatch({
            type: 'bowlerbowl',
            payload: bowlerbowl
        })
        // console.log("Host bowler", bowler)
    }
}
//second page compleate here//

export const handleAllRuns = (totalruns) => {
    return (dispatch) => {
        dispatch({
            type: "totalruns",
            payload: totalruns
        })
        // console.log("totalruns:",totalruns);
    }
}
export const handleOver = (over) => {
    return (dispatch) => {
        dispatch({
            type: "over",
            payload: over
        })
        console.log("over :", over);
    }
}
export const handleBalls = (ball) => {
    return (dispatch) => {
        dispatch({
            type: "ball",
            payload: ball
        })
        // console.log("balls :",ball);
    }
}
export const handleStrikerballs = (strikerball) => {
    return (dispatch) => {
        dispatch({
            type: "strikerball",
            payload: strikerball
        })
        // console.log("strikerballs :",strikerball);
    }
}
export const handleNonstrikerballs = (nonstrikerball) => {
    return (dispatch) => {
        dispatch({
            type: "nonstrikerball",
            payload: nonstrikerball
        })
        // console.log("nonstrikerballs :",nonstrikerball);
    }
}

export const handleStrikerRun = (strikerRun) => {
    return (dispatch) => {
        dispatch({
            type: 'strikerrun',
            payload: strikerRun
        })
        // console.log("run", strikerRun)
    }
}
export const handleNonstrikerRun = (nonstrikerRun) => {
    return (dispatch) => {
        dispatch({
            type: 'nonstrikerrun',
            payload: nonstrikerRun
        })
        // console.log("run", nonstrikerRun)
    }
}
// export const handleTwo = (run) => {
//     return (dispatch) => {
//         dispatch({
//             type: 'two',
//             payload: run
//         })
//         console.log("run", run)
//     }
// }
// export const handleThree = (run) => {
//     return (dispatch) => {
//         dispatch({
//             type: 'three',
//             payload: run
//         })
//         console.log("run", run)
//     }
// }
// export const handleFour = (run) => {
//     return (dispatch) => {
//         dispatch({
//             type: 'four',
//             payload: run
//         })
//         console.log("run", run)
//     }
// }
// export const handleFive = (run) => {
//     return (dispatch) => {
//         dispatch({
//             type: 'five',
//             payload: run
//         })
//         console.log("run", run)
//     }
// }
// export const handleSix = (run) => {
//     return (dispatch) => {
//         dispatch({
//             type: 'six',
//             payload: run
//         })
//         console.log("run", run)
//     }
// }
// export const handleZero = (run) => {
//     return (dispatch) => {
//         dispatch({
//             type: 'zero',
//             payload: run
//         })
//         console.log("run", run)
//     }
// }
export const handlestrikerFours = (sfours) => {
    return (dispatch) => {
        dispatch({
            type: 'sfours',
            payload: sfours
        })
        // console.log("fours:",fours)
    }
}
export const handlenonstrikerFours = (nsfours) => {
    return (dispatch) => {
        dispatch({
            type: 'nsfours',
            payload: nsfours
        })
        // console.log("fours:",fours)
    }
}
export const handlestrikerSix = (ssix) => {
    return (dispatch) => {
        dispatch({
            type: 'ssix',
            payload: ssix
        })
        // console.log("six:",six)
    }
}
export const handlenonstrikerSix = (nssix) => {
    return (dispatch) => {
        dispatch({
            type: 'nssix',
            payload: nssix
        })
        // console.log("six:",nssix)
    }
}
export const handleWide = (wides) => {
    return (dispatch) => {
        dispatch({
            type: "wides",
            payload: wides   
        })
        console.log("wides",wides);
    }
}
export const handleByes = (byes) => {
    return (dispatch) => {
        dispatch({
            type: "byes",
            payload: byes
        })
    }
}
export const handleCurrentrunrate= (currentrunrate) =>{
    return(dispatch) =>{
        dispatch({
            type:'currentrunrate',
            payload:currentrunrate
        })
        console.log("handleCurrentrunrate clicked",currentrunrate)
    }
}