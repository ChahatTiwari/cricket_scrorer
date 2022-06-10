import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./LiveMatch.css";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';

import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@mui/material/styles";

import React, { useState, useRef } from "react";
import Header from "./Header";
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import { Link } from "react-router-dom";
// import Paper from '@mui/material/Paper';


export default function LiveMatchs() {
    const [currentRunRate, setCurrentRunRate] = useState();
    const [totalruns, setTotalruns] = useState(0);
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState([])
    const [wide, setWide] = useState(false );
    const [noball, setNoball] = useState(false);
    const [legbyes, setLegbyes] = useState(false);
    const [wicket, setWicket] = useState(false);
    const [byes, setByes] = useState(false);
    const [extrarun, setExtrarun] = useState(0);
    const [balls, setBalls] = useState(0);
    const [over, setOver] = useState(0)


    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();
    const inputRef = useRef()



    //  const ballss=()=>{
    //     setNum1({...num1})
    //  }

    function createData(name, calories, fat, carbs, protein, sixs, SR) {
        return { name, calories, fat, carbs, protein, sixs, SR };
    }
    const increaseOf1 = (e) => {
        e.preventDefault();
        var valu = Number(e.target.value);
        setNum1(valu)
        setNum2([...num2, num1])
        setTotalruns(totalruns + extrarun + num1)
        // console.log("totalruns",totalruns,"extrarun",  extrarun ,"num1" ,num1)
        console.log("toalruns", totalruns, typeof (totalruns))



        if (wide === true) {
            setBalls(balls)
        }
        else if (noball === true) {
            setBalls(balls)
            console.log("ball is noball", balls)
        }
        else if (wicket === true) {
            setBalls(balls + 1)
            console.log("ball is noball", balls)
        }
        else if (num1 === 1 || 2 || 3 || 4 || 5 || 6) {
            setBalls(balls + 1)
            console.log("1 run", balls)
        }
        else {
            setBalls(balls);
            console.log("balls in else")
        }

        if (balls === 5) {
            setBalls(0)
            setOver(over + 1)
            console.log("balls over :", balls, over)
        }
        else {
            setOver(over)
            console.log("over :", over)
        }
        setExtrarun(0)
        setWicket(false)
        setLegbyes(false)
        setByes(false)
        setNoball(false)
        setWide(false)
        console.log("run", num2)

    }

    const rows = [
        createData("Batsman", num1),
        createData("Ice cream sandwich", num1)

    ];
    const handleExtras = (e) => {
        var name = e.target.name;
        var values = Number(e.target.value)
        setExtrarun(values)

        console.log("handleExtras clicked name :", name, "value :", values, "extrarun :", extrarun)
        if (name === "wide") {
            setWide(wide);
            setNoball(false);
            // console.log("noballfalse")
        }
        else if (name === "noball") {
            setNoball(!noball);
            setWide(false)
            // setWide(true)
            // console.log("noballfalse")
        }
        else if (name === "legbyes") {
            setLegbyes(!legbyes);
            setWide(false)
            setByes(false)
            // console.log("noballfalse")
        }
        else if (name === "byes") {
            setByes(!byes);
            setLegbyes(false)
            // console.log("noballfalse")
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

    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };
    return (
        <div>
            {/* <Header /> */}
            <Box className="scorecard">
                <Box className="teamname">
                    <Typography variant="h5">Nitin, ist inning</Typography>
                    <Typography variant="h5">CRR</Typography>
                </Box>
                <Box className="score">
                    <Box className="score_runs">
                        <Typography variant="h3">
                            {/* {totalruns.length > 0 ? totalruns : "0-0"} */}
                            {totalruns}
                        </Typography>
                        <br />
                        <Typography variant="h6" sx={{ px: 3, display: "flex", alignItems: "flex-end" }}>
                            ({over}.{balls})
                        </Typography>
                    </Box>
                    <Box className="score_runs">
                        <Typography variant="h5">
                            {currentRunRate > 0 ? currentRunRate : "00.00"}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box className="scoretable">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="h6">Batsman</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="h6">Run</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="h6">Ball</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="h6">Calories</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="h6">4s</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="h6">6s</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="h6">SR</Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                    <TableCell align="right">{row.sixs}</TableCell>
                                    <TableCell align="right">{row.SR}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Box className="this_balls">
                <Typography variant="h6">This balls:</Typography>
                {/* {num2.map((item, index) => (
                    <div key={index}>
                        <Typography variant="h6" sx={{ mx: 2 }} className="ballsruns">
                            {item}
                        </Typography>
                    </div>
                ))} */}

            </Box>
            <Box className="this_balls_extras">
                <FormGroup name="use-checkbox-group">
                    <Box className="extraoptions">
                        <Box>
                            <FormControlLabel
                                checked={wide}
                                name="wide"
                                onClick={handleExtras}
                                label="Wide"
                                value="1"
                                control={<Checkbox />}
                            />
                        </Box>
                        <Box>
                            <FormControlLabel
                                name="noball"
                                checked={noball}
                                onClick={handleExtras}
                                label="No Ball"
                                value="1"
                                control={<Checkbox />}
                            />
                        </Box>
                        <Box>
                            <FormControlLabel
                                name="byes"
                                checked={byes}
                                onClick={handleExtras}
                                label="Byes"
                                value="1" ref={inputRef}
                                control={<Checkbox />}
                            />
                        </Box>
                        <Box>
                            <FormControlLabel
                                name="legbyes"
                                value="1" ref={inputRef}
                                checked={legbyes}
                                onClick={handleExtras}
                                label="Leg Byes"
                                control={<Checkbox />}
                            />
                        </Box>
                        <Box>
                            <FormControlLabel
                                name="wicket"
                                value="9"
                                checked={wicket}
                                onClick={handleExtras}
                                label="Wicket"
                                control={<Checkbox />}
                            />
                        </Box>
                        {/* <Box><FormControlLabel className="check"  control={<Checkbox />} label="Wicket" /></Box> */}
                        <Box>
                            <Link to='/retire'><Button variant="contained" sx={{ mx: 3 }}>
                                Retire
                            </Button></Link>
                        </Box>
                        <Box>
                            <Button variant="contained" sx={{ mx: 3 }}>
                                Swap Batsman
                            </Button>
                        </Box>
                    </Box>
                </FormGroup>
            </Box>
            <Box className="buttons_runs_box">
                <Box className="buttons">
                    <Button
                        variant="contained"
                        sx={{ width: "100%", borderRadius: "10px", my: 1 }}
                    >
                        Undo
                    </Button>
                    <br />
                    <Button
                        variant="contained"
                        sx={{ width: "100%", borderRadius: "10px" }}
                    >
                        Partnerships
                    </Button>
                    <br />
                    <Button
                        variant="contained"
                        sx={{ width: "100%", borderRadius: "10px", my: 1 }}
                        onClick={handleClick('bottom')}
                    >
                        Extras
                    </Button>
                    <Popper open={open} anchorEl={anchorEl} placement={placement} transition >
                        {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={350} >
                                <Paper >
                                    <Typography className='popup' sx={{ p: 2 }}>Extras:0B,0LB,0WD,0NB,0P</Typography>
                                </Paper>
                            </Fade>
                        )}
                    </Popper>
                </Box>
                <Box className="runs">
                    <Box className="runset">
                        <Button id="zero" value="0" onClick={increaseOf1} className="onerun">
                            0
                        </Button>
                        <Button id="one" value="1" onClick={increaseOf1} className="onerun">
                            1
                        </Button>
                        <Button id="two" value="2" onClick={increaseOf1} className="onerun">
                            2
                        </Button>
                        <Button
                            id="three"
                            value="3"
                            onClick={increaseOf1}
                            className="onerun"
                        >
                            3
                        </Button>
                    </Box>
                    <Box className="runset">
                        <Button value="4" onClick={increaseOf1} className="onerun">
                            4
                        </Button>
                        <Button value="5" onClick={increaseOf1} className="onerun">
                            5
                        </Button>
                        <Button value="6" onClick={increaseOf1} className="onerun">
                            6
                        </Button>
                        <Button value="..." className="onerun">
                            ...
                        </Button>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}


