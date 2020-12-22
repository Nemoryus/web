import React from 'react'
import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

function HomePagePerformancesItem({ performance, setSelectedPerformance, useAnimation }) {

    return (
        <div key={performance.id} className={`pos-abs performances-item ${useAnimation ? "use-animation" : ""}`}>
            <Box className="pos-rel fullSize">
                <img className="fullSize" src={require(`../picture/${performance.images[0]}`)}/>
                <Box className="overlay pos-abs"></Box>
                <Box className="image-content pos-abs">
                    <Box className="image-content-category">
                        {performance.category}
                    </Box>
                    <Box className="image-content-name t-fancy push-btm">
                        {performance.name}
                    </Box>
                    <Box className="image-content-addinfo">
                        {performance.additional_info.map((theater, index) => {
                            return (
                                <span key={index}>
                                {theater}
                                <br></br>
                            </span>
                            )
                        })}
                    </Box>
                    <Box className="push-top">
                        <Button className="no-padd t-red t-bold" endIcon={<ArrowRightIcon/>} onClick={() => setSelectedPerformance(performance)}>
                            more info
                        </Button>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default HomePagePerformancesItem
