import React, { Fragment, useEffect, useState } from "react";
import { Text } from '../containers/Language';

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import CategoryPage from "./CategoryPage"
import ProductionMenu from '../components/ProductionMenu';
import ProductionPerformanceMenu from '../components/ProductionPerformanceMenu';
import ProductionFirstGrid from '../components/ProductionFirstGrid'
import ProductionSecondGrid from '../components/ProductionSecondGrid'


import ScrollBar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { MUSICALS, BALLET_OPERA, SHOW, DANCE_THEATER } from '../data/data';

export default function ProductionPage() {
  const gridSize = 6; // count of performances in a grid 
  const [selectedPerformance, setSelectedPerformance] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [performances, setPerformances] = useState([...MUSICALS, ...BALLET_OPERA, ...SHOW, ...DANCE_THEATER]); // set all performances as default

  useEffect(() => {
    if (selectedCategory === 'MUSICALS') {
      setPerformances(MUSICALS)
    } else if (selectedCategory === 'BALLET_OPERA') {
      setPerformances(BALLET_OPERA)
    } else if (selectedCategory === 'SHOW') {
      setPerformances(SHOW)
    } else if (selectedCategory === 'DANCE_THEATER'){
      setPerformances(DANCE_THEATER)
    } else {
      // all performances
      setPerformances([...MUSICALS, ...BALLET_OPERA, ...SHOW, ...DANCE_THEATER])
    }
  }, [selectedCategory])

  const handleSelectedPerformance = (performance) => {
    setSelectedCategory(performance.category)
    setSelectedPerformance(performance)
  }

  function ProductionGridLayout() {
    let arrayOfGrids = [];
    let tmpPerformances = [];
    let isFirst = false;
    performances.map((performance, index) => {
      if(index != 0) {
        if(index % (gridSize * 2) == 0) {
          arrayOfGrids.push(<ProductionSecondGrid key={index} performances={tmpPerformances} handleSelectedPerformance={handleSelectedPerformance} />);
          isFirst = false;
          tmpPerformances = []
        } else if(index % gridSize == 0) {
          arrayOfGrids.push(<ProductionFirstGrid key={index} performances={tmpPerformances} handleSelectedPerformance={handleSelectedPerformance} />);
          isFirst = true;
          tmpPerformances = []
        }
      }
      tmpPerformances.push(performance);
    })

    if(tmpPerformances.length != 0) {
      // if(!isFirst) {
      //   arrayOfGrids.push(<ProductionFirstGrid key={tmpPerformances.length} performances={tmpPerformances} handleSelectedPerformance={handleSelectedPerformance} />);
      // } else {
      //   arrayOfGrids.push(<ProductionSecondGrid key={tmpPerformances.length} performances={tmpPerformances} handleSelectedPerformance={handleSelectedPerformance} />);
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
              <h3 className='page-title padd-top-dbl'><span className='hand' onClick={() => setSelectedCategory('ALL')}><Text tid="production"/></span></h3>
              <Grid container justify="center" className="padd-btm push-btm-hlf">
                <Grid item xs={8}>
                  <ProductionMenu selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                </Grid>
              </Grid>
              <ProductionPerformanceMenu selectedCategory={selectedCategory} handleSelectedPerformance={handleSelectedPerformance} />
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
          <CategoryPage performances={performances} selectedPerformance={selectedPerformance} />
        )
      }
    </Fragment>
  );
}
