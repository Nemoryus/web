import React from 'react'
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

function Performance({performance, handleSelectedPerformance}) {
    return (
        <Box className='performance-item-wrapper overflow pos-rel fullHeight hand'>
            <Box className='performance-item' onClick={() => handleSelectedPerformance(performance)}>
                {/* {performance.img.firstPatch != '' &&
                    <img className='performance-image' src={require(`../picture/${performance.img.firstPatch}`)} />
                } */}
                <Box className='overlay performance-overlay'>
                    <Box className="performance-name middle fullWidth">
                        {performance.name}
                    </Box>
                    <Box className='middle performance-overlay-text'>
                        <Box className='performance-overlay-title push-btm-hlf'>
                            {performance.additionalData.title}
                        </Box>
                        <Box className='performance-overlay-info'>
                            {performance.additionalData.info}
                        </Box>
                        <Box className='performance-overlay-info'>
                            {performance.additionalData.note}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Performance
