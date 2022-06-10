import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';

export default function Fallofwicket() {
    const [wicket, setWicket] = React.useState('');

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        // const values = e.target.value;
        // const names = e.target.name
        console.log("handleSubmit clicked");
        navigate("/livematch");
    }
    const handleChange = (event) => {
        setWicket(event.target.value);
    };

    return (
        <div className='retireMain'>
            <Typography variant='h5'>How wicket fall?</Typography>
            <form sx={{ m: 1, minWidth: 120 }} onSubmit={handleSubmit}>
                <InputLabel id="demo-simple-select-standard-label">wicket</InputLabel>
                <Select sx={{ m: 1, minWidth: 120 }}
                    type='standard'
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={wicket}
                    onChange={handleChange}
                    label="Wicket"
                    required
                >
                    <MenuItem name="bowled" value='bowled'>Bowled</MenuItem>
                    <MenuItem name='catch' value="catch">Catch</MenuItem>
                    <MenuItem name='lbw' value='lbw'>LBW</MenuItem>
                </Select>
                <Typography variant='h5'>New Batsman</Typography>
                <TextField
                    name='newplayer'
                    className='retirInput'
                    id="standard-number"
                    //   label="Number"
                    type="text"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="standard"
                    required
                />
                <br /><br />
                <Button variant='contained' type='submit'>Done</Button>
            </form>
        </div>
    )
}
