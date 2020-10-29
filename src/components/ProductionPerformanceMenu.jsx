import React from 'react';
import Box from "@material-ui/core/Box";

import { MUSICALS } from '../data/data';
import { BALLET_OPERA } from '../data/data';
import { SHOW } from '../data/data';
import { DANCE_THEATER } from '../data/data';

export default function ProductionPerformanceMenu({ selectedCategory, handleSelectedPerformance }) {
    const menuItems = [];
    
    function PerformanceList() {
        if (selectedCategory === 'MUSICALS') {
            getPerformances(MUSICALS);
        } else if (selectedCategory === 'BALLET_OPERA') {
            getPerformances(BALLET_OPERA);
        } else if (selectedCategory === 'SHOW') {
            getPerformances(SHOW);
        } else if (selectedCategory === 'DANCE_THEATER'){
            getPerformances(DANCE_THEATER);
        } else {
            // all performances
            getPerformances(MUSICALS)
            getPerformances(BALLET_OPERA)
            getPerformances(SHOW);
            getPerformances(DANCE_THEATER);
        }
        return <Box className="production-performencas-menu padd-btm push-btm-hlf padd-top push-top-hlf">{menuItems}</Box>;
    }

    function getPerformances(category) {
        category.map((performance, index) => {
            menuItems.push(
                <span key={menuItems.length} className="production-performance-btn-wrapper" >
                    <span className={`production-performance-btn ${index % 2 != 0 ? "t-red" : ""}`} onClick={() => handleSelectedPerformance(performance)}>{performance.name}</span>
                </span>
            );
        })
    }

    return (
        <PerformanceList/>
    );
}