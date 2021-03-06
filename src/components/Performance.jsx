import React from 'react'
import Box from "@material-ui/core/Box";
import { Textfit } from 'react-textfit';

// box has 4 types:
//     - 1: large box
//     - 2: medium box
//     - 3: small box
//     - 4: extra small box
function Performance({ performance, setSelectedPerformance, boxType}) {
    const maxFS = 50; // maximal font size

    return (
        <Box className='performance-item-wrapper t-bold t-white overflow pos-rel fullHeight hand'>
            <Box className={`performance-item performance-item-${boxType} fullSize`} onClick={() => setSelectedPerformance(performance)}>
                {performance.images.length > 0 &&
                    <img className='performance-image fullSize' src={require(`../picture/${performance.images[0]}`)} />
                }
                <Box className='overlay'/>
                <Box className="pos-abs fullSize performance-name t-center padd text-fit">
                    <Textfit max={maxFS}>
                        {performance.name}
                    </Textfit>
                </Box>
                <Box className='pos-abs fullSize performance-overlay t-center'>
                    <Box className='overlay'/>
                    <Box className='middle overlay-text-wrapper'>
                        <Box className='overlay-title t-red push-btm-hlf'>
                            {performance.name}
                        </Box>
                        {performance.additional_info.map((theater, index) => {
                            return (
                                <Box key={index} className='overlay-info'>
                                    {theater}
                                </Box>
                            )
                        })}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Performance
