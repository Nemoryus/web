import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import Performance from './Performance'

export default function ProductionGridB({ performances, setSelectedPerformance}) {

    return (
        <Grid container spacing={3} className="performances">
            <Grid item xs={4} className="no-padd-btm">
                <Grid container direction='column' spacing={3} className="fullHeight">
                    <Grid item xs={12}>
                        <Performance boxType="1" performance={performances[0]} setSelectedPerformance={setSelectedPerformance}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={4} className="no-padd-btm">
                <Grid container direction='column' spacing={3} className="fullHeight">
                    <Grid item xs={4}>
                        <Performance boxType="3" performance={performances[1]} setSelectedPerformance={setSelectedPerformance}/>
                    </Grid>
                    <Grid item xs={8}>
                        <Performance boxType="2" performance={performances[2]} setSelectedPerformance={setSelectedPerformance}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={4} className="no-padd-btm">
                <Grid container direction='column' spacing={3} className="fullHeight">
                    <Grid item xs={8}>
                        <Performance boxType="2" performance={performances[3]} setSelectedPerformance={setSelectedPerformance}/>
                    </Grid>
                    <Grid item xs={4} className="no-padd-btm">
                        <Grid container spacing={3} className="fullHeight">
                            <Grid item xs={6} className="no-padd-btm">
                                <Performance boxType="4" performance={performances[4]} setSelectedPerformance={setSelectedPerformance}/>
                            </Grid>
                            <Grid item xs={6} className="no-padd-btm">
                                <Performance boxType="4" performance={performances[5]} setSelectedPerformance={setSelectedPerformance}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}