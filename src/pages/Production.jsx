import React, { Fragment, useEffect, useState } from "react";
import { Text } from '../containers/Language';

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import UnderPage from "./UnderPage"
import CategoryMenu from '../components/CategoryMenu';
import AllPerformaceMenu from '../components/AllPerformanceMenu';
import ProductionFirstGrid from '../components/ProductionFirstGrid'
import ProductionSecondGrid from '../components/ProductionSecondGrid'


import ScrollBar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { MUSICALS, BALLET_OPERA, SHOW, DANCE_THEATER } from '../data/data';

export default function ProductionPage() {
  const gridSize = 6; // count of performances in a grid 
  const [selectedPerformance, setSelectedPerformance] = useState(null);
  const [categoryItems, setCategoryItems] = useState([...MUSICALS, ...BALLET_OPERA, ...SHOW, ...DANCE_THEATER]); // set all performances as default

  const handleChangeCategory = (categoryName) => {
    if (categoryName === 'MUSICAL') {
      setCategoryItems(MUSICALS)
    } else if (categoryName === 'BALLET_OPERA') {
      setCategoryItems(BALLET_OPERA)
    } else if (categoryName === 'SHOW') {
      setCategoryItems(SHOW)
    } else if (categoryName === 'DANCE_THEATER'){
      setCategoryItems(DANCE_THEATER)
    } else {
      // all performances
      setCategoryItems([...MUSICALS, ...BALLET_OPERA, ...SHOW, ...DANCE_THEATER])
    }
  }

  const handleSelectedPerformance = (performance) => {
    handleChangeCategory(performance.category)
    setSelectedPerformance(performance)
  }

  function ProductionGridLayout() {
    let arrayOfGrids = [];
    let performances = [];
    let isFirst = false;
    categoryItems.map((performance, index) => {
      if(index != 0) {
        if(index % (gridSize * 2) == 0) {
          arrayOfGrids.push(<ProductionSecondGrid key={index} performances={performances} handleSelectedPerformance={handleSelectedPerformance} />);
          isFirst = false;
          performances = []
        } else if(index % gridSize == 0) {
          arrayOfGrids.push(<ProductionFirstGrid key={index} performances={performances} handleSelectedPerformance={handleSelectedPerformance} />);
          isFirst = true;
          performances = []
        }
      }
      performances.push(performance);
    })

    if(performances.length != 0) {
      // if(!isFirst) {
      //   arrayOfGrids.push(<ProductionFirstGrid key={categoryItems.length} performances={performances} handleSelectedPerformance={handleSelectedPerformance} />);
      // } else {
      //   arrayOfGrids.push(<ProductionSecondGrid key={categoryItems.length} performances={performances} handleSelectedPerformance={handleSelectedPerformance} />);
      // }
    }
    return (
      <Box className="padd-btm push-btm-hlf padd-top push-top-hlf">{arrayOfGrids}</Box>
    )
  }

  return (
    <Fragment>
      {
        selectedPerformance == null ? (
          <Grid container id="production-page" justify="center" className="content-light padd-top padd-btm">
            <Grid item xs={9}>
              <h3 className='page-title padd-top-dbl'><Text tid="production"/></h3>
              <Grid container justify="center" className="padd-btm push-btm-hlf">
                <Grid item xs={8}>
                  <CategoryMenu handleChangeCategory={handleChangeCategory} />
                </Grid>
              </Grid>
              <AllPerformaceMenu handleSelectedPerformance={handleSelectedPerformance} />
              <ProductionGridLayout/>
              {/*{firstTime && CreateAllGrid(handleSelectedPredstavenie)}
              <div className='scroleArea'>
              <ScrollBar>
              <div>
              {arrayOfGrid}
              </div>
              </ScrollBar>
            </div> */}
            </Grid>
          </Grid>
        ) 
      : 
        (
          <div className='production-under-page-cointainer'>
            <UnderPage categoryItems={categoryItems} indexSelectedPredstavenie={1} />
          </div>
        )
      }
    </Fragment>
  );
}
