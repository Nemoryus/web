import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

//import picture
import GaspPicture from "../picture/gasp.jpg"
import CameliasPicture from "../picture/camelias.jpg"
import DuchonsPicture from "../picture/duchons.jpg"
import PomadaPicture from "../picture/pomada.jpg"
import SuperstarPicture from "../picture/superstar.jpg"
import VodaPicture from "../picture/voda.jpg"
import WestsidePicture from "../picture/westside.jpg"
import SchoolOfRockPicture from "../picture/schoolOfRock.jpg"
import CarmenPicture from "../picture/carmen.jpg"

export default function MainGridLayout() {
    return (
        <div className='main-grid'>      
            <Grid className='main-contianer' square={false} container spacing={2}>
            <div className='background-shadow'/>
                <Grid className= 'main-grid-first-cointainer' item sm={12} md={6}>
                    <Grid  container spacing={2}>
                        <Grid  item xs={6} sm={6}>
                            <Grid  container spacing={2}>
                                <Grid className='aaa' item xs={12} sm={12}>
                                    <Paper square={false} className='paperGrid middlePaper'>
                                        <div className='paperGridContainer'>
                                            <img className='paperGridImage ' src={GaspPicture} alt="Youtube icon" ></img>
                                            <div className='filter' />
                                            <div className='filter-text'>
                                                <div style={{ letterSpacing: 5,color: 'red',fontSize:'25px',textTransform:'uppercase',textAlign:'center' }}> <strong>Gasp</strong></div>
                                                <div style={{ fontSize:'16px',marginTop:'10px'}}>Premiere 2013 </div>
                                                <div style={{ fontSize:'16px' }}>Aréna Theater</div>
                                                <div style={{ fontSize:'16px' }}>Tower Stage Theater</div>
                                            </div>
                                        </div>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <Paper className='paperGrid smallPaper'>
                                        <div className='paperGridContainer'>
                                            <img className='paperGridImage' src={CarmenPicture} alt="Youtube icon" ></img>
                                            <div className='filter'>
                                            </div>
                                            <div className='filter-text'>
                                                Hano je uzasny.
                                            </div>
                                        </div>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <Grid container spacing={2}>
                                <Grid item xs={6} sm={6}>
                                    <Paper className='paperGrid smallPaper'>
                                        <div className='paperGridContainer'>
                                            <img className='paperGridImage' src={DuchonsPicture} alt="Youtube icon" ></img>
                                            <div className='filter'>
                                            </div>
                                            <div className='filter-text'>
                                                Hano je uzasny.
                                            </div>
                                        </div>
                                    </Paper>
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <Paper className='paperGrid smallPaper'>
                                        <div className='paperGridContainer'>
                                            <img className='paperGridImage' src={SchoolOfRockPicture} alt="Youtube icon" ></img>
                                            <div className='filter'>
                                            </div>
                                            <div className='filter-text'>
                                                Hano je uzasny.
                                            </div>
                                        </div>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <Paper className='paperGrid middlePaper'>
                                        <div className='paperGridContainer'>
                                            <img className='paperGridImage' src={PomadaPicture} alt="Youtube icon" ></img>
                                            <div className='filter'>
                                            </div>
                                            <div className='filter-text'>
                                                Hano je uzasny.
                                            </div>
                                        </div>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className= 'main-grid-second-cointainer' item xs={12} sm={12} md={6}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} sm={6}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <Paper className='paperGrid bigPaper'>
                                        <div className='paperGridContainer'>
                                            <img className='paperGridImage' src={SuperstarPicture} alt="Youtube icon" ></img>
                                            <div className='filter'>
                                            </div>
                                            <div className='filter-text'>
                                                Hano je uzasny.
                                            </div>
                                        </div>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <Paper className='paperGrid middlePaper'>
                                        <div className='paperGridContainer'>
                                            <img className='paperGridImage' src={WestsidePicture} alt="Youtube icon" ></img>
                                            <div className='filter'>
                                            </div>
                                            <div className='filter-text'>
                                                Hano je uzasny.
                                            </div>
                                        </div>
                                    </Paper>
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <Paper className=' paperGrid smalPaper'>
                                        <div className='paperGridContainer'>
                                            <img className='paperGridImage' src={VodaPicture} alt="Youtube icon" ></img>
                                            <div className='filter'>
                                            </div>
                                            <div className='filter-text'>
                                                Hano je uzasny.
                                            </div>
                                        </div>
                                    </Paper>
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <Paper className='paperGrid smalPaper'>
                                        <div className='paperGridContainer'>
                                            <img className='paperGridImage' src={CameliasPicture} alt="Youtube icon" ></img>
                                            <div className='filter'>
                                            </div>
                                            <div className='filter-text'>
                                                Hano je uzasny.
                                            </div>
                                        </div>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
