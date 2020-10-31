import React from 'react'
import Box from "@material-ui/core/Box";

function Performance({performance, setSelectedPerformance}) {
    return (
        <Box className='performance-item-wrapper overflow pos-rel fullHeight hand'>
            <Box className='performance-item' onClick={() => setSelectedPerformance(performance)}>
                {performance.images.length > 0 &&
                    <img className='performance-image' src={require(`../picture/${performance.images[0]}`)} />
                }
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
