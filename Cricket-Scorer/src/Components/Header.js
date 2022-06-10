import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

const data = {
    "homeHeading" : "Cricket",
    "homeSubheading" : "scrorer",
    "openersHeading":"Select Openers",
    "graph":"Analysis",
    
}
export default function Header(props) {
    console.log("props:",props);
    return (
        <div className='headermain'>
            <div className='header'>
                <IconButton aria-label="back">
                    <ArrowBackIcon className="iconbuttonretire" />
                </IconButton>
                {/* <h6>{props.home.homeHeading}</h6>
                <p>{props.home.homeSubheading}</p> */}
                <div className='headerteams'>
                    name v/s surname
                </div>
                {/* <div>{props.openersHeading}</div> */}
            </div>
            <div className='rightIcons'>
                <IconButton aria-label="back" className='iconsrightleft'>
                    <AutoGraphIcon className="headerteams" />
                </IconButton>
                <IconButton aria-label="back">
                    <SportsScoreIcon className="iconbuttonretire" />
                </IconButton>   
            </div>
        </div>
    )
}
