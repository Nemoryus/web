import React from 'react';
import Grid from "@material-ui/core/Grid";

export default function ProductionCategoryMenu({selectedCategory, setSelectedCategory}) {

    return (
        <Grid container spacing={3} >
            <Grid item xs={3} className="production-category-btn-wrapper hand underline-effect-wrapper" onClick={() => setSelectedCategory("MUSICALS")}>
                <span className={`underline-effect ${selectedCategory === 'MUSICALS' ? "active" : ""}`}>Musicals</span>
            </Grid>
            <Grid item xs={3} className="production-category-btn-wrapper hand underline-effect-wrapper" onClick={() => setSelectedCategory("BALLET_OPERA")}>
                <span className={`underline-effect ${selectedCategory === 'BALLET_OPERA' ? "active" : ""}`}>Ballet & Opera</span>
            </Grid>
            <Grid item xs={3} className="production-category-btn-wrapper hand underline-effect-wrapper" onClick={() => setSelectedCategory("SHOW")}>
                <span className={`underline-effect ${selectedCategory === 'SHOW' ? "active" : ""}`}>Shows</span>
            </Grid>
            <Grid item xs={3} className="production-category-btn-wrapper hand underline-effect-wrapper" onClick={() => setSelectedCategory("DANCE_THEATER")}>
                <span className={`underline-effect ${selectedCategory === 'DANCE_THEATER' ? "active" : ""}`}>Dance theater</span>
            </Grid>
        </Grid>
    );
}