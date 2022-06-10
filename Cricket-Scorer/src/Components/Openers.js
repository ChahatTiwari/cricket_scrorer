import React from 'react'
import './Openers.css';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { Button, Typography } from '@mui/material';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux'
import { actionCreators } from '../State'
import { bindActionCreators } from 'redux'
import Header from './Header';



// const mapStateToProps = state => ({
//     striker: state.striker,
//     nonstriker: state.nonstriker,
//     bowler: state.bowler,
// });
// const mapDispatchToProps = (dispatch) => ({
//     action: bindActionCreators(actionCreators, dispatch)
// })


const Openers = (props) => {
    let navigate = useNavigate()
    // const striker = props.striker;
    // const nonstriker = props.nonstriker;
    // const bowler = props.bowler;

    const dispatch = useDispatch();
    const name = useSelector(state => state.bat);
    const {handleStriker,handleNonstriker,handleBowler} = bindActionCreators(actionCreators,dispatch);  
    // const [userName,setUsername] = useState(name);



    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/livematch")
        console.log("handlesumbit clicked openers")
    }
    return (
        <div>
            <Header openersHeading={props.data.openersHeading}/>
            <form onSubmit={handleSubmit}>
                <Box className="newmatchbox">
                    <Typography variant="h5" >Striker</Typography>
                    <br />
                    <TextField required id="standard-basic host" onChange={(e) => handleStriker(e.target.value)} placeholder="Player name" variant="standard" sx={{ width: "100%" }} />
                    <br />
                </Box>
                <Box className="newmatchbox">
                    <Typography variant="h5" >Non-Striker</Typography>
                    <br />
                    <TextField required id="standard-basic host" onChange={(e) => handleNonstriker(e.target.value)} placeholder="Player name" variant="standard" sx={{ width: "100%" }} />
                    <br />
                </Box>
                <Box className="newmatchbox">
                    <Typography variant="h5" >Opening bowler</Typography>
                    <br />
                    <TextField required id="standard-basic host" onChange={(e) => handleBowler(e.target.value)} placeholder="Player name" variant="standard" sx={{ width: "100%" }} />
                </Box>
                <Box className="startbtn">
                    <Button type="submit" variant="contained" className="btn">Start match</Button>
                </Box>
            </form>
        </div>
    )
}
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Openers);
export default Openers;