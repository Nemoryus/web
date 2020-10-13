import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

export default function ProductionSecondGrid({ params, handleSelectedPredstavenie}) {
    const lenghtOfArray = Object.keys(params).length;

    const handleOnClickSelectPredstavenie = (indexPredstavenia) => {
        handleSelectedPredstavenie(params[indexPredstavenia].category,indexPredstavenia)
    }

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper className='paperGrid middlePaper'>
                            {(() => {
                                    if (lenghtOfArray >= 1) {
                                        return (
                                            <div className='paperGridContainer' onClick={() => handleOnClickSelectPredstavenie(0)}>
                                                <img className='paperGridImage' src={require(`../picture/${params[0].img.firstPatch}`)} ></img>
                                                <div className='filter'>
                                                </div>
                                                <div className='filter-text'>
                                                    {params[0].name}
                                                </div>
                                            </div>)
                                    }
                                })()}
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper className='paperGrid middlePaper'>
                            {(() => {
                                    if (lenghtOfArray >= 2) {
                                        return (
                                            <div className='paperGridContainer'onClick={() => handleOnClickSelectPredstavenie(1)}>
                                                <img className='paperGridImage' src={require(`../picture/${params[1].img.firstPatch}`)} ></img>
                                                <div className='filter'>
                                                </div>
                                                <div className='filter-text'>
                                                    {params[1].name}
                                                </div>
                                            </div>)
                                    }
                                })()}
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className='paperGrid middlePaper'>
                            {(() => {
                                    if (lenghtOfArray >= 3) {
                                        return (
                                            <div className='paperGridContainer' onClick={() => handleOnClickSelectPredstavenie(2)}>
                                                <img className='paperGridImage' src={require(`../picture/${params[2].img.firstPatch}`)} ></img>
                                                <div className='filter'>
                                                </div>
                                                <div className='filter-text'>
                                                    {params[2].name}
                                                </div>
                                            </div>)
                                    }
                                })()}
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper className='paperGrid middlePaper'>
                            {(() => {
                                    if (lenghtOfArray >= 4) {
                                        return (
                                            <div className='paperGridContainer' onClick={() => handleOnClickSelectPredstavenie(3)}>
                                                <img className='paperGridImage' src={require(`../picture/${params[3].img.firstPatch}`)} ></img>
                                                <div className='filter'>
                                                </div>
                                                <div className='filter-text'>
                                                    {params[3].name}
                                                </div>
                                            </div>)
                                    }
                                })()}
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className='paperGrid middlePaper'>
                            {(() => {
                                    if (lenghtOfArray >= 5) {
                                        return (
                                            <div className='paperGridContainer' onClick={() => handleOnClickSelectPredstavenie(4)}>
                                                <img className='paperGridImage' src={require(`../picture/${params[4].img.firstPatch}`)} ></img>
                                                <div className='filter'>
                                                </div>
                                                <div className='filter-text'>
                                                    {params[4].name}
                                                </div>
                                            </div>)
                                    }
                                })()}
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className='paperGrid middlePaper'>
                            {(() => {
                                    if (lenghtOfArray === 6) {
                                        return (
                                            <div className='paperGridContainer' onClick={() => handleOnClickSelectPredstavenie(5)}>
                                                <img className='paperGridImage' src={require(`../picture/${params[5].img.firstPatch}`)} ></img>
                                                <div className='filter'>
                                                </div>
                                                <div className='filter-text'>
                                                    {params[5].name}
                                                </div>
                                            </div>)
                                    }
                                })()}
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}