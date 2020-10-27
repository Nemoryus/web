import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import Performance from '../components/Performance'

export default function ProductionFirstGrid({ performances, handleSelectedPerformance }) {

    return (
        <Grid container spacing={3} className="production-performances">
            <Grid item xs={4} className="no-padd-btm fullHeight">
                <Grid container direction='column' spacing={3} className="fullHeight">
                    <Grid item xs={8}>
                        <Performance performance={performances[0]} handleSelectedPerformance={handleSelectedPerformance}/>
                    </Grid>
                    <Grid item xs={4} className="no-padd-btm">
                        <Grid container spacing={3} className="fullHeight">
                            <Grid item xs={6} className="no-padd-btm">
                                <Performance performance={performances[1]} handleSelectedPerformance={handleSelectedPerformance}/>
                            </Grid>
                            <Grid item xs={6} className="no-padd-btm">
                                <Performance performance={performances[2]} handleSelectedPerformance={handleSelectedPerformance}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={4} className="no-padd-btm fullHeight">
                <Grid container direction='column' spacing={3} className="fullHeight">
                    <Grid item xs={12}>
                        <Performance performance={performances[3]} handleSelectedPerformance={handleSelectedPerformance}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={4} className="no-padd-btm fullHeight">
                <Grid container direction='column' spacing={3} className="fullHeight">
                    <Grid item xs={4}>
                        <Performance performance={performances[4]} handleSelectedPerformance={handleSelectedPerformance}/>
                    </Grid>
                    <Grid item xs={8}>
                        <Performance performance={performances[5]} handleSelectedPerformance={handleSelectedPerformance}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}