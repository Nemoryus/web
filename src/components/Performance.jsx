import React from 'react'
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

function Performance({performance, handleSelectedPerformance}) {
    return (
        <Paper className='performance-item-wrapper overflow pos-rel fullHeight hand'>
            <Box className='performance-item' onClick={() => handleSelectedPerformance(performance)}>
                {performance.img.firstPatch != '' &&
                    <img className='performance-image' src={require(`../picture/${performance.img.firstPatch}`)} />
                }
                <Box className="performance-name middle fullWidth">
                    {performance.name}
                </Box>
                <Box className='performance-overlay'>
                    <Box className='middle performance-overlay-text'>
                        <Box className='performance-overlay-title push-btm-hlf'>
                            {performance.overlay.title}
                        </Box>
                        <Box className='performance-overlay-info'>
                            {performance.overlay.info}
                        </Box>
                        <Box className='performance-overlay-info'>
                            {performance.overlay.note}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Paper>
    )
}

export default Performance
