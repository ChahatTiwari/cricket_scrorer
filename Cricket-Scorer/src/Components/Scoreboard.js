import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import Header from './Header';

export default function Scoreboard() {
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue((event.target.value));
    };
    return (
        <div>
            <Header />
            <FormControl>
                <Typography variant="h6" >Select Player to Retire</Typography>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>
            </FormControl>
            <br />
            <Typography variant='h6'>Replaced By?</Typography>
            {/* <br/> */}
            <TextField
                id="standard-number"
                //   label="Number"
                type="text"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="standard"
            />
            <br />
            <br/>
            <Button variant='contained'>Done</Button>
        </div>
    )
}
