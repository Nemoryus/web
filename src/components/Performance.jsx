import React, { useEffect } from 'react'
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Textfit } from 'react-textfit';

function Performance({performance, setSelectedPerformance}) {
    const maxFontSizeName = 50;
    const maxFontSizeTitle = 40;
    const maxFontSizeInfo = 20;

    return (
        <Box className='performance-item-wrapper bold t-white overflow pos-rel fullHeight hand'>
            <Box className='performance-item' onClick={() => setSelectedPerformance(performance)}>
                {performance.images.length > 0 &&
                    <img className='performance-image' src={require(`../picture/${performance.images[0]}`)} />
                }
                <Box className='overlay performance-overlay pos-abs t-center'>
                    <Box className="performance-name fullHeight padd text-fit">
                        <Textfit max={maxFontSizeName}>
                            {performance.name}
                        </Textfit>
                    </Box>
                    <Box className='performance-overlay-text fullWidth fullHeight padd text-fit'>
                        <Grid container direction='column' justify="center" alignItems="center">
                            <Grid item xs={7} className="fullWidth">
                                <Box className="fullHeight text-fit performance-overlay-title t-red">
                                    <Textfit max={maxFontSizeTitle}>
                                        {performance.additionalData.title}
                                    </Textfit>
                                </Box>
                            </Grid>
                            <Grid item xs={5} className="fullWidth">
                                <Box className="fullHeight text-fit performance-overlay-info">
                                    <Textfit max={maxFontSizeInfo}>
                                        {performance.additionalData.info}<br></br>
                                        {performance.additionalData.note}
                                    </Textfit>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Performance
