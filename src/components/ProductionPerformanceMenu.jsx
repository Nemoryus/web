import React from 'react';
import Box from "@material-ui/core/Box";

import { getPerformances } from '../data/constans'

export default function ProductionPerformanceMenu({ selectedCategory, setSelectedPerformance }) {
    const menuItems = [];
    
    function PerformanceList() {
        let performances = getPerformances(selectedCategory)
        performances.map((performance, index) => {
            menuItems.push(
                <span key={menuItems.length} className="production-performance-btn-wrapper" >
                    <span className={`production-performance-btn ${index % 2 != 0 ? "t-red" : ""}`} onClick={() => setSelectedPerformance(performance)}>{performance.name}</span>
                </span>
            );
        })
        return <Box className="production-performencas-menu padd-btm push-btm-hlf padd-top push-top-hlf">{menuItems}</Box>;
    }

    return (
        <PerformanceList/>
    );
}