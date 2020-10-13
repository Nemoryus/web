import React from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

export default function CategoryMenu({handleSelectedCategory}) {
    const handleOnClickSelectPredstavenie = (selectedCategory) => {
        handleSelectedCategory(selectedCategory)
    }

    return (
        <div className='container-category-menu'>
            <Grid container spacing={3} >
                <Grid item xs={3}>
                    <Paper onClick={() => handleOnClickSelectPredstavenie("MUSICAL")}>
                        <span >MUSICAL</span>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper onClick={() => handleOnClickSelectPredstavenie("BALLET_OPERA")}>
                        <span>BALET & OPERA</span>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper onClick={() => handleOnClickSelectPredstavenie("SHOW")}>
                        <span>SHOW</span>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper onClick={() => handleOnClickSelectPredstavenie("DANCE_THEATER")}>
                        <span>DANCE THEATER</span>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}