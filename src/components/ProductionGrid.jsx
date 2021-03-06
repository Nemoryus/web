import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";

import Performance from './Performance'

export default function ProductionGrid({ performances, setSelectedPerformance }) {

    return (
        <Grid container spacing={3} className="performances">
            {performances.length === 1 &&
                <Fragment>
                    <Grid item xs={4} className="no-padd-btm fullHeight"></Grid>
                    <Grid item xs={4} className="no-padd-btm fullHeight">
                        <Grid container direction='column' spacing={3} className="fullHeight">
                            <Grid item xs={4}>
                                <Performance boxType="3" performance={performances[0]} setSelectedPerformance={setSelectedPerformance}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} className="no-padd-btm fullHeight"></Grid>
                </Fragment>
            }
            {performances.length === 2 &&
                <Fragment>
                    <Grid item xs={4} className="no-padd-btm fullHeight"></Grid>
                    <Grid item xs={4} className="no-padd-btm fullHeight">
                        <Grid container direction='column' spacing={3} className="fullHeight">
                            <Grid item xs={4}>
                                <Grid container spacing={3} className="fullHeight">
                                    <Grid item xs={6} className="no-padd-btm">
                                        <Performance boxType="4" performance={performances[0]} setSelectedPerformance={setSelectedPerformance}/>
                                    </Grid>
                                    <Grid item xs={6} className="no-padd-btm">
                                        <Performance boxType="4" performance={performances[1]} setSelectedPerformance={setSelectedPerformance}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} className="no-padd-btm fullHeight"></Grid>
                </Fragment>
            }
            {performances.length === 3 &&
                <Fragment>
                    <Grid item xs={4} className="no-padd-btm fullHeight">
                        <Grid container direction='column' spacing={3} className="fullHeight">
                                <Grid item xs={4}>
                                    <Performance boxType="3" performance={performances[0]} setSelectedPerformance={setSelectedPerformance}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    <Grid item xs={4} className="no-padd-btm fullHeight">
                        <Grid container direction='column' spacing={3} className="fullHeight">
                            <Grid item xs={8}>
                                <Performance boxType="2" performance={performances[2]} setSelectedPerformance={setSelectedPerformance}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} className="no-padd-btm fullHeight">
                        <Grid container direction='column' spacing={3} className="fullHeight">
                            <Grid item xs={4}>
                                <Performance boxType="3" performance={performances[2]} setSelectedPerformance={setSelectedPerformance}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Fragment>
            }
            {performances.length === 4 &&
                <Fragment>
                    <Grid item xs={4} className="no-padd-btm fullHeight">
                        <Grid container direction='column' spacing={3} className="fullHeight">
                            <Grid item xs={4}>
                                <Performance boxType="3" performance={performances[0]} setSelectedPerformance={setSelectedPerformance}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} className="no-padd-btm fullHeight">
                        <Grid container direction='column' spacing={3} className="fullHeight">
                            <Grid item xs={8}>
                                <Performance boxType="2" performance={performances[1]} setSelectedPerformance={setSelectedPerformance}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} className="no-padd-btm fullHeight">
                        <Grid container direction='column' spacing={3} className="fullHeight">
                            <Grid item xs={4}>
                                <Grid container spacing={3} className="fullHeight">
                                    <Grid item xs={6} className="no-padd-btm">
                                        <Performance boxType="4" performance={performances[2]} setSelectedPerformance={setSelectedPerformance}/>
                                    </Grid>
                                    <Grid item xs={6} className="no-padd-btm">
                                        <Performance boxType="4" performance={performances[3]} setSelectedPerformance={setSelectedPerformance}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Fragment>
            }
            {performances.length === 5 &&
                <Fragment>
                    <Grid item xs={4} className="no-padd-btm fullHeight">
                        <Grid container direction='column' spacing={3} className="fullHeight">
                            <Grid item xs={4}>
                                <Performance boxType="3" performance={performances[0]} setSelectedPerformance={setSelectedPerformance}/>
                            </Grid>
                            <Grid item xs={4} className="no-padd-btm">
                                <Grid container spacing={3} className="fullHeight">
                                    <Grid item xs={6} className="no-padd-btm">
                                        <Performance boxType="4" performance={performances[1]} setSelectedPerformance={setSelectedPerformance}/>
                                    </Grid>
                                    <Grid item xs={6} className="no-padd-btm">
                                        <Performance boxType="4" performance={performances[2]} setSelectedPerformance={setSelectedPerformance}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} className="no-padd-btm fullHeight">
                        <Grid container direction='column' spacing={3} className="fullHeight">
                            <Grid item xs={12}>
                                <Performance boxType="1" performance={performances[3]} setSelectedPerformance={setSelectedPerformance}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} className="no-padd-btm fullHeight">
                        <Grid container direction='column' spacing={3} className="fullHeight">
                            <Grid item xs={8}>
                                <Performance boxType="2" performance={performances[4]} setSelectedPerformance={setSelectedPerformance}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Fragment>
            }
        </Grid>
    );
}