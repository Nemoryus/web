import React, { useContext } from 'react';
import Box from "@material-ui/core/Box";

export default function ProductionPerformanceMenu({ performances, setSelectedPerformance }) {
    const menuItems = [];
    
    function PerformanceList() {
        performances.map((performance, index) => {
            menuItems.push(
                <span key={menuItems.length} className="production-performance-btn-wrapper" >
                    <span className={`production-performance-btn hand ${index % 2 != 0 ? "t-red" : ""}`} onClick={() => setSelectedPerformance(performance)}>{performance.name}</span>
                </span>
            );
        })
        return <Box className="production-performencas-menu padd-btm push-btm-hlf padd-top push-top-hlf">{menuItems}</Box>;
    }

    return (
        <PerformanceList/>
    );
}