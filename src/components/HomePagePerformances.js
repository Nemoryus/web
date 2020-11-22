import React, { memo, useState, useEffect, useContext } from 'react'
import { Box } from '@material-ui/core';

import { PerformancesCtx } from "../pages/Main";

function HomePagePerformances() {
    const { getPerformances } = useContext(PerformancesCtx);
    const performances = [...getPerformances('MUSICALS')];
    const [activePerformance, setActivePerformance] = useState(performances[2]);

    useEffect(() => {
        const autoplayTimer = setTimeout(() => { 
            if(activePerformance.id === performances.length) {
                setActivePerformance(performances[0])
            } else {
                setActivePerformance(performances[activePerformance.id])
            }
        }, 3000);
        return () => clearTimeout(autoplayTimer);
    }, [performances, activePerformance])

    return (
        performances.map((performance) => {
            return(
                <Box key={performance.id} className={`intro-performance-item pos-abs fullSize ${activePerformance.id === performance.id ? "active" : ""}`}>
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

export default memo(HomePagePerformances)
