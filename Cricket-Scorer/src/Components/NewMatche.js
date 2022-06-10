import { Button, Typography } from '@mui/material'
import './NewMatche.css'
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import Checkbox from '@mui/material/Checkbox';
import { Link, useNavigate } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import { connect } from 'react-redux'
import { actionCreators } from '../State'
import { bindActionCreators } from 'redux'
import Header from './Header';


const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(
    ({ theme, checked }) => ({
        '.MuiFormControlLabel-label': checked && {
            color: theme.palette.primary.main,
        },
    }),
);
const mapStateToProps = state => ({
    host: state.host,
    visitor: state.visitor,
    over: state.over,
    toss: state.toss
});
const mapDispatchToProps = (dispatch) => ({
    action: bindActionCreators(actionCreators, dispatch)
})

const NewMatche = (props) => {
    let navigate = useNavigate();
    const host = props.host
    const visitor = props.visitor
    const over = props.over
    const toss = props.toss

    function MyFormControlLabel(props) {
        const radioGroup = useRadioGroup();

        let checked = false;

        if (radioGroup) {
            checked = radioGroup.value === props.value;
        }

        return <StyledFormControlLabel checked={checked} {...props} />;
    }

    const handleSubmit= (e) =>{
        e.preventDefault()
        // if (host.length < 1 || visitor.length < 1 || over.lenth < 1){
        //     alert("please fill proper field")
        // }
        // else{
            navigate("/openers")
        // }
        console.log("clicked")
    }
    return (
        <div>
            <Header home={props.data} />
            <form onSubmit={handleSubmit} >
                <Box className="newmatchbox">
                    <Typography variant="h5" >Teams</Typography>
                    <br />
                    <TextField required id="standard-basic host" onChange={(e) => props.action.handleOnHostTeam(e.target.value)} placeholder="Host" variant="standard" sx={{ width: "100%" }} />
                    <br /><br />
                    <TextField required id="standard-basic visitorteam" onChange={(e) => props.action.handleOnVisitorTeam(e.target.value)} placeholder="Visitor Team" variant="standard" sx={{ width: "100%" }} />
                </Box>
                <Box className="newmatchbox">
                    <Typography variant="h5" >Toss won by?</Typography>
                    <br />
                    <RadioGroup name="use-radio-group" defaultValue="host" className="opte">
                        <Box> <MyFormControlLabel value="host" label={host.length > 0 ? host : "Host"} control={<Radio />} /></Box>
                        <Box><MyFormControlLabel value="visitor" label={visitor.length > 0 ? visitor : "Visitor team"} control={<Radio />} /></Box>
                    </RadioGroup>

                </Box>
                <Box className="newmatchbox">
                    <Typography variant="h5" >Opted to?</Typography>
                    <br />
                    <RadioGroup name="use-radio-group" defaultValue="BAT" className="opte" >
                        <Box><MyFormControlLabel value="BAT" label="Bat" onClick={() => props.action.handelBat("BAT")} control={<Radio />} /></Box>
                        <Box><MyFormControlLabel value="BOWL" label="Bowl" onClick={() => props.action.handelBowl("BOWL")} control={<Radio />} /></Box>
                    </RadioGroup>
                </Box>
                <Box className="newmatchbox">
                    <Typography variant="h5" >Over</Typography>
                    <br />
                    <TextField required
                        id="standard-number"
                        placeholder="16"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="standard"
                        sx={{ width: "100%" }}
                        onChange={(e) => props.action.handleAllOver(e.target.value)}
                    />
                    {/* <p>{over}</p> */}
                </Box>
                <Box className="startmatch">
                    <Typography variant="h5">
                        Advance settings
                    </Typography>
                    {/* <Link to="/openers"> <Button type="submit" variant="contained" sx={{ mx: 3 }}>Start Match</Button></Link> */}
                <Button  type="submit" variant="contained" sx={{ mx: 3 }}>Start Match</Button>
                </Box>
            </form>
        </div>
    )
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewMatche);