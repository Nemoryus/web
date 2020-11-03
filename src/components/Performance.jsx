import React, { useEffect } from 'react'
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Textfit } from 'react-textfit';

function Performance({performance, setSelectedPerformance}) {
    const maxFontSizeName = 50;

    return (
        <Box className='performance-item-wrapper bold t-white overflow pos-rel fullHeight hand'>
            <Box className='performance-item' onClick={() => setSelectedPerformance(performance)}>
                {performance.images.length > 0 &&
                    <img className='performance-image' src={require(`../picture/${performance.images[0]}`)} />
                }
                <Box className='overlay performance-overlay t-center'>
                    <Box className="performance-name fullHeight padd text-fit">
                        <Textfit max={maxFontSizeName}>
                            {performance.name}
                        </Textfit>
                    </Box>
                    <Box className='middle performance-overlay-text'>
                        <Box className='performance-overlay-title t-red push-btm-hlf'>
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
