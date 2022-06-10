import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system'
import './LiveMatch.css';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import Header from './Header';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useEffect, useRef, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { actionCreators } from '../State'
import { bindActionCreators } from 'redux'
import { CollectionsBookmarkRounded } from '@mui/icons-material';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import { Link, useNavigate } from "react-router-dom";
import { handleWide } from '../State/actionCreators';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';

// const mapStateToProps = state => ({
//     host: state.host,
//     visitor: state.visitor,
//     over: state.over,
//     toss: state.toss,
//     striker: state.striker,
//     nonstriker: state.nonstriker,
//     bowler: state.bowler,
//     run: state.run,
// });
// const mapDispatchToProps = (dispatch) => ({
//     action: bindActionCreators(actionCreators, dispatch)
// })
const LiveMatch = (props) => {
    // const host = props.host
    // const visitor = props.visitor
    // const striker = props.striker;
    // const nonstriker = props.nonstriker;
    // const bowler = props.bowler;
    // const run = props.run
    // console.log("host:", run)

    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const {run,striker,nonstriker,host,visitor} = useSelector(state => {state.striker,
    // state.run,state.nonstriker,state.host,state.visitor});

    const striker = useSelector(state => state.striker);
    const nonstriker = useSelector(state => state.nonstriker);
    const strikerRun = useSelector(state => state.strikerRun);
    const nonstrikerRun = useSelector(state => state.nonstrikerRun);
    const host = useSelector(state => state.host);
    const totalruns = useSelector(state => state.totalruns);
    const visitor = useSelector(state => state.visitor);
    const over = useSelector(state => state.over);
    const ball = useSelector(state => state.ball);
    const strikerball = useSelector(state => state.strikerball);
    const nonstrikerball = useSelector(state => state.nonstrikerball);
    const sfourss = useSelector(state => state.sfours);
    const ssixs = useSelector(state => state.ssix);
    const nsfourss = useSelector(state => state.nsfours);
    const nssixs = useSelector(state => state.nssix);
    const wides = useSelector(state => state.wides);
    const currentrunrate = useSelector(state => state.currentrunrate);
    const byess = useSelector(state => state.byes);
    const bowler = useSelector(state => state.bowler);
    const bowlerrun = useSelector(state => state.bowlerrun);
    const bowlerbowl = useSelector(state => state.bowlerbowl);
    const { handleStrikerRun, handleAllRuns, handleNonstrikerRun, handleBalls, handleStrikerballs, handleNonstrikerballs, handleOver, handlestrikerFours, handlenonstrikerFours, handlestrikerSix, handlenonstrikerSix, handleWide, handleByes, handleCurrentrunrate, handleBowler, handleBowlerRun, handleBowlerbowl } = bindActionCreators(actionCreators, dispatch);

    // const [totalRuns, setTotalRuns] = useState(0)
    // const [currentRunRate, setCurrentRunRate] = useState();
    const [balls, setBalls] = useState(0);
    const [wide, setWide] = useState(false);
    const [noball, setNoball] = useState(false);
    const [legbyes, setLegbyes] = useState(false);
    const [wicket, setWicket] = useState(false);
    const [byes, setByes] = useState(false);
    const [extrarun, setExtrarun] = useState(0);
    const [runs, setRuns] = useState([]);
    const [run, setrun] = useState(0);
    const [changestriker, setChangestriker] = useState(false);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [openpartnership, setOpenpartnership] = React.useState(false);
    const [placement, setPlacement] = React.useState();
    const [strikers,setStrikers] = useState(["striker"])
    // const [transition, setTransition] = React.useState({
    //     openu: false,
    //     vertical: 'top',
    //     horizontal: 'center'
    // });
    const inputRef = useRef();

    // console.log("runs :", runs);
    // const [totalruns, setTotalruns] = useState(extrarun + runs);

    const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(
        ({ theme, checked }) => ({
            '.MuiFormControlLabel-label': checked && {
                color: theme.palette.primary.main,
            },
        }),
    );

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    function createData(
        Batsman,
        R,
        B,
        Four,
        Six,
        SR,
    ) {
        return { Batsman, R, B, Four, Six, SR };
    }

    const rows = [
        createData(striker, strikerRun, strikerball, sfourss, ssixs, 300),
        createData(nonstriker, nonstrikerRun, nonstrikerball, nsfourss, nssixs, 250),
    ];

    const handleExtras = (e) => {
        var name = e.target.name;
        var values = Number(e.target.value);
        setExtrarun(values);
        console.log("handleExtras clicked name :", name, "value :", values);
        if (name === "wide") {
            setWide(!wide);
            setNoball(false);
            // console.log("!wide")
        }
        else if (name === "noball") {
            setNoball(!noball);
            setWide(false)
            // setWide(true)
            console.log("noballfalse")
        }
        else if (name === "legbyes") {
            setLegbyes(!legbyes);
            setWide(false)
            setByes(false)
            console.log("noballfalse")
        }
        else if (name === "byes") {
            setByes(!byes);
            setLegbyes(false)
            console.log("noballfalse")
        }
        else if (name === "wicket") {
            setWicket(!wicket);
            // setWide(false)
            // setByes(false)
            // console.log("noballfalse")
        }
        else {
            console.log("error")
        }
    }
    const handleruns = (e) => {
        e.preventDefault();
        var name = e.target.name;
        var value = Number(e.target.value);
        setrun(value);
        var ballnumber = Number(balls);
        console.log("balls outside:", ballnumber, "balls/6", balls / 6);
        if (ballnumber % 6 === 0) {
            setBalls(0);
            setRuns([]);
            handleOver(1)
            console.log("balls outside enter:", ballnumber, balls)
        }
        if(wicket === true){
            navigate("/fallofwicket")
        }
        // else if (ballnumber%6 === 6) {
        //     // handleOver(1)
        //     setRuns([]);    
        // }

        function currentRun(e) {
            // e.preventDefault();
            if (changestriker === false) {
                console.log("changestriker is false")
                // if(wide===true && value === 0||2||4||6){
                //     handleStrikerRun(value)
                //     // var joined = runs.concat(value);
                //     handleBalls(0);
                //     setBalls(balls + 0);
                //     handleStrikerballs(1)
                //     setRuns(runs => [...runs, value])
                //     console.log("wide true with run:", runs)
                //     handleAllRuns(value + extrarun)
                // }
                // else if(noball===true && value === 0||1||2||3||4||5||6){
                //     handleStrikerRun(value)
                //     // var joined = runs.concat(value);
                //     handleBalls(0);
                //     setBalls(balls + 0);
                //     handleStrikerballs(1)
                //     setRuns(runs => [...runs, value])
                //     console.log("wide true with run:", runs)
                //     handleAllRuns(value + extrarun)
                // }
                if (name === "zero") {
                    handleStrikerRun(value)
                    // var joined = runs.concat(value);
                    handleBalls(1);
                    handleBowlerRun(0);
                    handleBowlerbowl(1);
                    setBalls(balls + 1);
                    handleStrikerballs(1)
                    setRuns(runs => [...runs, value])
                    console.log("runs:", runs)
                    handleAllRuns(value + extrarun)
                }
                else if (name === "one") {
                    handleStrikerRun(value)
                    handleBalls(1);
                    handleBowlerRun(1);
                    handleBowlerbowl(1);
                    setBalls(balls + 1);
                    handleStrikerballs(1)
                    setRuns(runs => [...runs, value])
                    handleAllRuns(value + extrarun)
                    setChangestriker(!changestriker)
                }
                else if (name === "two") {
                    handleStrikerRun(value)
                    handleBalls(1)
                    handleBowlerRun(2);
                    handleBowlerbowl(1);
                    setBalls(balls + 1);
                    handleStrikerballs(1)
                    setRuns(runs => [...runs, value])
                    handleAllRuns(value + extrarun)
                }
                else if (name === "three") {
                    handleStrikerRun(value)
                    handleBalls(1);
                    handleBowlerRun(3);
                    handleBowlerbowl(1);
                    setBalls(balls + 1);
                    handleStrikerballs(1)
                    setRuns(runs => [...runs, value])
                    handleAllRuns(value + extrarun)
                    setChangestriker(!changestriker)

                }
                else if (name === "four") {
                    handleStrikerRun(value)
                    handleBalls(1);
                    handleBowlerRun(4);
                    handleBowlerbowl(1);
                    setBalls(balls + 1);
                    handleStrikerballs(1)
                    setRuns(runs => [...runs, value])
                    handlestrikerFours(1);
                    handleAllRuns(value + extrarun)
                }
                else if (name === "five") {
                    handleStrikerRun(value)
                    handleBalls(1)
                    handleBowlerRun(5);
                    handleBowlerbowl(1);
                    setBalls(balls + 1);
                    handleStrikerballs(1)
                    setRuns(runs => [...runs, value])
                    handleAllRuns(value + extrarun)
                    setChangestriker(!changestriker)
                }
                else {
                    handleStrikerRun(value)
                    handleBalls(1);
                    handleBowlerRun(6);
                    handleBowlerbowl(1);
                    setBalls(balls + 1);
                    handleStrikerballs(1)
                    setRuns(runs => [...runs, value])
                    handlestrikerSix(1);
                    handleAllRuns(value + extrarun)
                }
            }
            else {
                console.log("changestriker is true")
                if (name === "zero") {
                    handleNonstrikerRun(value)
                    handleBalls(0);
                    handleBowlerRun(0);
                    handleBowlerbowl(1);
                    setBalls(balls + 1);
                    handleNonstrikerballs(0)
                    // var joined = runs.concat(value);
                    setRuns(runs => [...runs, value])
                    console.log("runs:", runs)
                    handleAllRuns(value + extrarun)
                }
                else if (name === "one") {
                    setChangestriker(!changestriker)
                    handleNonstrikerRun(value)
                    handleBalls(1);
                    handleBowlerRun(1);
                    handleBowlerbowl(1);
                    setBalls(balls + 1);
                    handleNonstrikerballs(1)
                    setRuns(runs => [...runs, value])
                    handleAllRuns(value + extrarun)
                }
                else if (name === "two") {
                    handleNonstrikerRun(value)
                    handleBalls(1);
                    handleBowlerRun(2);
                    handleBowlerbowl(1);
                    setBalls(balls + 1);
                    handleNonstrikerballs(1)
                    setRuns(runs => [...runs, value])
                    handleAllRuns(value + extrarun)
                }
                else if (name === "three") {
                    setChangestriker(!changestriker)
                    handleNonstrikerRun(value)
                    handleBalls(1);
                    handleBowlerRun(3);
                    handleBowlerbowl(1);
                    setBalls(balls + 1);
                    handleNonstrikerballs(1)
                    setRuns(runs => [...runs, value])
                    handleAllRuns(value + extrarun)
                }
                else if (name === "four") {
                    handleNonstrikerRun(value)
                    handleBalls(1);
                    handleBowlerRun(4);
                    handleBowlerbowl(1);
                    setBalls(balls + 1);
                    handleNonstrikerballs(1)
                    setRuns(runs => [...runs, value])
                    handlenonstrikerFours(1);
                    handleAllRuns(value + extrarun)
                }
                else if (name === "five") {
                    setChangestriker(!changestriker)
                    handleNonstrikerRun(value)
                    setRuns(runs => [...runs, value])
                    handleAllRuns(value + extrarun)
                    handleBalls(1);
                    handleBowlerRun(5);
                    handleBowlerbowl(1);
                    setBalls(balls + 1);
                    handleNonstrikerballs(1)
                }
                else {
                    handleNonstrikerRun(value)
                    handleBalls(1);
                    handleBowlerRun(6);
                    handleBowlerbowl(1);
                    setBalls(balls + 1);
                    handleNonstrikerballs(1)
                    setRuns(runs => [...runs, value])
                    handlenonstrikerSix(1);
                    handleAllRuns(value + extrarun)
                }
            }
        }
        var b = balls / 6
        var c = totalruns / b
        var a = c.toFixed(2);
        handleCurrentrunrate(a)
        console.log("currentrunrate", a)
        currentRun()
        if (wide === true) {
            handleWide(1);
        }
        else if (byes === true) {
            console.log("lastvalue :", value);
            handleByes(value);
        }
        if (wide === true || noball === true) {
            handleBalls(0);
            console.log("wide noball true")
        }
        setExtrarun(0)
        setWicket(false)
        setLegbyes(false)
        setByes(false)
        setNoball(false)
        setWide(false)
        // if(ball === 0){
        //     handleOver(0);
        //     handleBalls(0);  
        // }
        // else if(ball/6 === 0){
        //     handleOver(1);
        //     handleBalls(0);
        //     console.log(`balls is ${ball} and over is compleate`)
        // }
        // else{
        //     console.log("errror")
        // }
        console.log("handleruns clicked", name, value)

    }
    const handleSwap = () => {
        setChangestriker(!changestriker)
    }
    const handleClickextra = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };
    const handlepartnership = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpenpartnership((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };
    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });

    const { vertical, horizontal, openu } = state;

    const handleClicku = (newState) => () => {
        setState({ openu: true, ...newState });
    };

    const handleCloseu = () => {
        setState({ ...state, openu: false });
    };



    return (
        <div >
            <Header />
            <h1>nitin</h1>
            {strikers.map((s,index)=>{
                <div key={index}>
                    <p>{s}</p>
                </div>
            })}
            {/* <Box className="TeamsHeader">
                <h4>{host} v/s {visitor}</h4>
            </Box>  */}
            {/* <button value='1' onClick={() => setBalls(0)}>handleBallss{balls}</button> */}
            <Box className="scorecard">
                <Box className="teamname">
                    <Typography variant="h5">{host}, ist inning </Typography>
                    <Typography variant="h5">CRR</Typography>
                </Box>
                <Box className="score">
                    <Box className="score_runs">
                        <Typography variant="h4">{totalruns > 0 ? totalruns : "00"}-0</Typography>
                        <Typography variant='h6' sx={{ alignSelf: "flex-end", mx: 3 }}>{over}.{balls}</Typography>
                        <br />
                        {/* <Typography variant="h4" sx={{ px: 3 }}>0-0</Typography>
                        <Typography variant="h6" sx={{ px: 0, alignSelf: "end" }}>(0.0)</Typography> */}
                    </Box>
                    <Box className="score_runs">
                        <Typography variant="h5">{currentrunrate}</Typography>
                    </Box>
                </Box>
            </Box>
            <Box className="scoretable">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Batsman</StyledTableCell>
                                <StyledTableCell align="right">R</StyledTableCell>
                                <StyledTableCell align="right">B&nbsp;</StyledTableCell>
                                <StyledTableCell align="right">4s&nbsp;</StyledTableCell>
                                <StyledTableCell align="right">6s&nbsp;</StyledTableCell>
                                <StyledTableCell align="right">SR&nbsp;</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.Batsman}  {setChangestriker ? '*' : ""}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.R}</StyledTableCell>
                                    <StyledTableCell align="right">{row.B}</StyledTableCell>
                                    <StyledTableCell align="right">{row.Four}</StyledTableCell>
                                    <StyledTableCell align="right">{row.Six}</StyledTableCell>
                                    <StyledTableCell align="right">{row.SR}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                            <hr width="100%" />
                            {/* {rows.map((row) => ( */}
                            <StyledTableRow >
                                <StyledTableCell component="th" scope="row">
                                    {bowler}
                                </StyledTableCell>
                                <StyledTableCell align="right">{bowlerrun}</StyledTableCell>
                                <StyledTableCell align="right">{bowlerbowl}</StyledTableCell>
                                <StyledTableCell align="right">four</StyledTableCell>
                                <StyledTableCell align="right">six</StyledTableCell>
                                <StyledTableCell align="right">sr</StyledTableCell>
                            </StyledTableRow>
                            {/* ))} */}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Box className="this_over">
                <Typography variant="h6">This over:</Typography>
                {/* <Typography variant="h6" sx={{ mx: 2 }} className="overruns">{run.map=(runs =><p>{runs.value}</p>)}</Typography> */}
                {runs.map((item, index) => (
                    <Box key={index} className="overruns">
                        <Typography variant="h6" sx={{ mx: 2 }} >{item}</Typography>
                    </Box>
                ))}
            </Box>
            <Box className="this_over_extras">
                <FormGroup>
                    <Box className="extraoptions">
                        <Box><FormControlLabel name="wide" value="1" control={<Checkbox checked={wide} onClick={handleExtras} />} label="Wide" /></Box>
                        <Box><FormControlLabel name="noball" value="1" control={<Checkbox checked={noball} onClick={handleExtras} />} label="Noball" /></Box>
                        <Box><FormControlLabel name="legbyes" value="0" control={<Checkbox checked={legbyes} onClick={handleExtras} />} label="Leg Byes" /></Box>
                        <Box><FormControlLabel name="byes" value="0" control={<Checkbox checked={byes} onClick={handleExtras} />} label="Byes" /></Box>
                        <Box><FormControlLabel name="wicket" value="0" control={<Checkbox checked={wicket} onClick={handleExtras} />} label="Wicket" /></Box>
                        <Box><Link to="/retire"><Button variant="contained" sx={{ mx: 3 }} >Retire</Button></Link></Box>
                        <Box><Button variant="contained" sx={{ mx: 3 }} onClick={handleSwap}>Swap Batsman</Button></Box>
                    </Box>
                </FormGroup>
            </Box>
            <Box className="buttons_runs_box">
                <Box className="buttons">
                    <Button onClick={handleClicku({
                        vertical: 'top',
                        horizontal: 'center',
                    })} variant="contained" sx={{ width: "100%", borderRadius: "10px", my: 1 }}>Undo</Button>
                    <Snackbar
                        anchorOrigin={{ vertical, horizontal }}
                        open={openu}
                        onClose={handleCloseu}
                        // message="I love snacks"
                        key={vertical + horizontal}
                    ><Box sx={{ background: 'silver', width: '50vw', padding: '30px' }}>
                            <Typography variant='h4'>Undo</Typography>
                            <Typography>Are You sure?</Typography>
                            <Box sx={{float:'right',marginTop:'10%'}}>
                                <Button sx={{mx:4}} variant='contained' onClick={handleCloseu}>CANCEL</Button>
                                <Button align='right' variant='contained'>OK</Button>
                            </Box>
                        </Box>
                    </Snackbar>
                    <br />
                    <Button variant="contained" sx={{ width: "100%", borderRadius: "10px" }} onClick={handlepartnership('top')}>Partnerships</Button>
                    <Popper  open={openpartnership} anchorEl={anchorEl} placement={placement} transition >
                        {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={350}  >
                                <Paper className='fadepopup' sx={{width:'94vw',mx:4}}>
                                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <Typography className='popup' sx={{ p: 2 }}>
                                            {striker}
                                        </Typography>
                                        <Typography className='popup' sx={{ p: 2 }}>
                                            {nonstriker}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <Typography className='popup' sx={{ p: 2 }}>
                                            {strikerRun}
                                        </Typography>
                                        <Typography className='popup'>{strikerRun + nonstrikerRun}<br />({balls})</Typography>
                                        <Typography className='popup' sx={{ p: 2 }}>
                                            {nonstrikerRun}
                                        </Typography>
                                    </Box>
                                    <Box className='popup'>Extras:{wides + byess}</Box>
                                </Paper>
                            </Fade>
                        )}
                    </Popper>
                    <br />
                    <Button variant="contained" sx={{ width: "100%", borderRadius: "10px", my: 1 }} onClick={handleClickextra('bottom')}>Extras</Button>
                    <Popper open={open} anchorEl={anchorEl} placement={placement} transition >
                        {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={350} >
                                <Paper >
                                    <Typography className='popup' sx={{ p: 2 }}>Extras:{byess}B,0LB,{wides}WD,0NB,0P</Typography>
                                </Paper>
                            </Fade>
                        )}
                    </Popper>
                </Box>
                <Box className="runs">
                    <Box className="runset">
                        <Button id="zero" name="zero" value='0' onClick={handleruns} className="onerun">0</Button>
                        <Button id="one" name="one" value="1" onClick={handleruns} className="onerun">1</Button>
                        <Button id="two" name="two" value="2" onClick={handleruns} className="onerun">2</Button>
                        <Button id="three" name="three" value="3" onClick={handleruns} className="onerun">3</Button>
                    </Box>
                    <Box className="runset">
                        <Button value="4" name="four" onClick={handleruns} className="onerun">4</Button>
                        <Button value="5" name="five" onClick={handleruns} className="onerun">5</Button>
                        <Button value="6" name="six" onClick={handleruns} className="onerun">6</Button>
                        <Button value="..." className="onerun">...</Button>
                    </Box>
                </Box>
            </Box>
        </div >
    )
}


// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(LiveMatch);
export default LiveMatch;