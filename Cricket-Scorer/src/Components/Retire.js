import React, { useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import { Button, Grid, IconButton, Typography } from '@mui/material';
import Header from './Header';
import { useNavigate } from 'react-router-dom';


export default function Retire() {
    const [value, setValue] = React.useState('female');

    const navigate = useNavigate();
    const handleChange = (e) => {
        const names = e.target.name;
        const values = e.target.value;
        console.log(names,":",values);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const names = e.target.name;
        const values = e.target.value;
        console.log(names,":",values);
        navigate("/livematch")
    }
    return (
        <div>
            <Header />
            <div className='retireMain'>
                <form onSubmit={handleSubmit}>
                    <Typography variant="h6" >Select Player to Retire</Typography>
                    <RadioGroup
                        required
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                        className="retirradio"
                    >
                        <FormControlLabel name='striker' checked value="striker" control={<Radio />} label="striker" />
                        <FormControlLabel name='nonstriker' value="nonstriker" control={<Radio />} label="nonstriker" />
                    </RadioGroup>
                    <br />
                    <Typography variant='h6'>Replaced By?</Typography>
                    {/* <br/> */}
                    <TextField
                        required
                        name='newbatsman'
                        className='retirInput'
                        id="standard-number"
                        //   label="Number"
                        type="text"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="standard"
                    />
                    <br />
                    <br />
                    <Button variant='contained' type='submit' >Done</Button>
                </form>
            </div>

        </div>
    )
}
