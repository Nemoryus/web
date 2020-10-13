import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import { MUSICALS } from '../data/data';
import { BALLET_OPERA } from '../data/data';
import { SHOW } from '../data/data';
import { DANCE_THEATER } from '../data/data';


// let currentlyData = [];





// console.log("mainPosition je: " + mainPosition);
// console.log("Curently data name: " + currentlyData[0].name);




export default function UnderPageMenu({handleSelectedNewIdexPredstavenie,categoryItems, indexSelectedPredstavenie}) {
   


    let [mainPosition,setMainPosition] = useState(indexSelectedPredstavenie);
    // let [currentlyData ,setCurrentlyData] = useState(categoryItems);
    
    const GoLeft = () => {
        if (mainPosition != 0) {
            setMainPosition(mainPosition - 1);   
            handleSelectedNewIdexPredstavenie(mainPosition); 
        }
        
    }
    
    const GoRight = () => {
        if (mainPosition != categoryItems.length -1) {
            setMainPosition(mainPosition + 1);
            handleSelectedNewIdexPredstavenie(mainPosition);
        }
    }

    return (
        <div className='conatainer-uder-page-menu'>
            {/* {menuMuvieng("musicals")} */}

            <Grid container spacing={1}>
                <Grid item xs={2}>
                    <Paper>
                        {(() => {  
                            const position = mainPosition + 1;
                            const localPosition = mainPosition - 2;
                            if (position - 2 > 0) {
                                return (
                                    <div >
                                        {categoryItems[localPosition].name}
                                    </div>)
                            }
                        })()}
                    </Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper>
                        {(() => {
                            const position = mainPosition + 1;
                            const localPosition = mainPosition - 1;
                            if (position - 1 > 0) {
                                return (
                                    <div >
                                        {categoryItems[localPosition].name}
                                    </div>)
                            }
                        })()}
                    </Paper>
                </Grid>
                <Grid item xs={1}>
                    <Paper >
                        <IconButton onClick={GoLeft}>
                            <SvgIcon>
                                <ArrowLeftIcon />
                            </SvgIcon>
                        </IconButton>
                    </Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper>
                        {console.log("Main position: "+mainPosition)}
                        {categoryItems[mainPosition].name}
                    </Paper>
                </Grid>
                <Grid item xs={1}>
                    <Paper >
                        <IconButton onClick={GoRight}>
                            <SvgIcon>
                                <ArrowRightIcon fontSize="large" />
                            </SvgIcon>
                        </IconButton>
                    </Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper>
                        {(() => {
                            const position = mainPosition + 1;
                            const localPosition = mainPosition + 1;
                            const lengthOfDataArray = Object.keys(categoryItems).length;
                            if (position + 1 <= lengthOfDataArray) {
                                return (
                                    <div >
                                        {categoryItems[localPosition].name}
                                    </div>)
                            }
                        })()}
                    </Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper>
                        {(() => {
                            const position = mainPosition + 1;
                            const localPosition = mainPosition + 2;
                            const lengthOfDataArray = Object.keys(categoryItems).length;
                            if (position + 2 <= lengthOfDataArray) {
                                return (
                                    <div >
                                        {categoryItems[localPosition].name}
                                    </div>)
                            }
                        })()}
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

