import React from "react";
import Grid from "@material-ui/core/Grid";
import Performance from './Performance'

export default function HomePerformances({ performances, setSelectedPerformance }) {
    return (
        <Grid container spacing={3} className="homepage-performances fullHeight">
            <Grid item xs={3} className="fullHeight">
                <Grid container direction='column' spacing={3} className="fullHeight">
                    <Grid item xs={8}>
                        <Performance performance={performances[0]} setSelectedPerformance={setSelectedPerformance}/>
                    </Grid>
                    <Grid item xs={4} className="no-padd-btm">
                        <Performance performance={performances[1]} setSelectedPerformance={setSelectedPerformance}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3} className="fullHeight">
                <Grid container direction='column' spacing={3} className="fullHeight">
                    <Grid item xs={4} className="no-padd-btm">
                        <Grid container spacing={3} className="fullHeight">
                            <Grid item xs={6} className="no-padd-btm">
                                <Performance performance={performances[2]} setSelectedPerformance={setSelectedPerformance}/>
                            </Grid>
                            <Grid item xs={6} className="no-padd-btm">
                                <Performance performance={performances[3]} setSelectedPerformance={setSelectedPerformance}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={8} className="no-padd-btm">
                        <Performance performance={performances[4]} setSelectedPerformance={setSelectedPerformance}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3} className="fullHeight">
                <Grid container direction='column' spacing={3} className="fullHeight">
                    <Grid item xs={12} className="no-padd-btm">
                        <Performance performance={performances[5]} setSelectedPerformance={setSelectedPerformance}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3} className="no-padd-btm fullHeight">
                <Grid container direction='column' spacing={3} className="fullHeight">
                    <Grid item xs={8}>
                        <Performance performance={performances[6]} setSelectedPerformance={setSelectedPerformance}/>
                    </Grid>
                    <Grid item xs={4} className="no-padd-btm">
                        <Grid container spacing={3} className="fullHeight">
                            <Grid item xs={6} className="no-padd-btm change-fs">
                                <Performance performance={performances[7]} setSelectedPerformance={setSelectedPerformance}/>
                            </Grid>
                            <Grid item xs={6} className="no-padd-btm change-fs">
                                <Performance performance={performances[8]} setSelectedPerformance={setSelectedPerformance}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
