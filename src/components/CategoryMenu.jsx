import React from 'react';
import Grid from "@material-ui/core/Grid";

export default function CategoryMenu({handleChangeCategory}) {

    return (
        <Grid container spacing={3} >
            <Grid item xs={3} className="production-category-btn">
                <span className='hand' onClick={() => handleChangeCategory("MUSICAL")}>Musicals</span>
            </Grid>
            <Grid item xs={3} className="production-category-btn">
                <span className='hand' onClick={() => handleChangeCategory("BALLET_OPERA")}>Ballet & Opera</span>
            </Grid>
            <Grid item xs={3} className="production-category-btn">
                <span className='hand' onClick={() => handleChangeCategory("SHOW")}>Shows</span>
            </Grid>
            <Grid item xs={3} className="production-category-btn">
                <span className='hand' onClick={() => handleChangeCategory("DANCE_THEATER")}>Dance theater</span>
            </Grid>
        </Grid>
    );
}