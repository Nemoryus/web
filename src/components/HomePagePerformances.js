import React from 'react'
import { Box } from '@material-ui/core';

function HomePagePerformances({ performances, activePerformance, nextActivePerformance }) {
    return (
        performances.map((performance) => {
            return(
                <Box key={performance.id} className={`intro-performance-item pos-abs fullSize ${activePerformance.id == performance.id ? "active" : nextActivePerformance.id == performance.id && "next-active"}`}>
                    <Box className="fullSize intro-performance-image-wrapper">
                        <img className="fullSize" src={require(`../picture/${performance.images[0]}`)}/>
                    </Box>
                    <Box className="overlay pos-abs"/>
                    <Box className="t-bold pos-abs fullSize intro-performance-title-wrapper">
                        <span className="pos-abs intro-performance-title">
                            {performance.name}
                        </span>
                    </Box>
                </Box>
            )
        })
    )
}

export default HomePagePerformances
