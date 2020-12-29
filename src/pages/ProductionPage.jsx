import React, { memo, useEffect, useState, useContext } from "react";
import { Text } from '../containers/Language';

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box"; 

import CategoryPage from "./CategoryPage"
import ProductionCategoryMenu from '../components/ProductionCategoryMenu';
import ProductionGrid from '../components/ProductionGrid'
import ProductionGridA from '../components/ProductionGridA'
import ProductionGridB from '../components/ProductionGridB'

import { PerformancesCtx } from "./Main";

function ProductionPage({ setHeaderType, selectedPerformance, setSelectedPerformance }) {
  const { getPerformances } = useContext(PerformancesCtx);
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [performances, setPerformances] = useState(getPerformances(selectedCategory)); // set all performances as default
  const gridSize = 6; // count of performances in a grid 

  useEffect(() => {
    if(selectedPerformance != null) {
      setHeaderType(0)
    } else {
      setHeaderType(1)
    }
  }, [selectedPerformance])

  useEffect(() => {
    setPerformances(getPerformances(selectedCategory))
  }, [selectedCategory])

  function ProductionGridLayout() {
    let arrayOfGrids = [];
    let tmpPerformances = [];
    let countOfGrid = 0
    performances.map((performance, index) => {
      if(index !== 0) {
        if(index % (gridSize * 2) === 0) {
          arrayOfGrids.push(<ProductionGridB key={countOfGrid} performances={tmpPerformances} setSelectedPerformance={setSelectedPerformance} />);
          tmpPerformances = []
          countOfGrid++;
        } else if(index % gridSize === 0) {
          arrayOfGrids.push(<ProductionGridA key={countOfGrid} performances={tmpPerformances} setSelectedPerformance={setSelectedPerformance} />);
          tmpPerformances = []
          countOfGrid++;
        }
      }
      tmpPerformances.push(performance);
    })

    if(tmpPerformances.length !== 0) {
      arrayOfGrids.push(<ProductionGrid key={countOfGrid} performances={tmpPerformances} setSelectedPerformance={setSelectedPerformance} />);
    }
    return (
      <Box className="padd-btm push-btm-hlf padd-top push-top-hlf">{arrayOfGrids}</Box>
    )
  }

  return (
    <>
      {selectedPerformance == null ? (
        <Grid container id="production-page" justify="center" className="content-light content-padd-top padd-btm">
          <Grid item xs={9}>
            <h3 className='page-title push-top-dbl padd-top-dbl'><span className='hand' onClick={() => setSelectedCategory('ALL')}><Text tid="production"/></span></h3>
            <Grid container justify="center" className="padd-btm push-btm-hlf">
              <Grid item xs={8}>
                <ProductionCategoryMenu selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
              </Grid>
            </Grid>
            {/* PERFORMANCE LIST IN PERFORMANCE PAGE  
            <ProductionPerformanceMenu performances={performances} setSelectedPerformance={setSelectedPerformance} /> */}
            <ProductionGridLayout/>
          </Grid>
        </Grid>
      ) : (
        <CategoryPage selectedPerformance={selectedPerformance} setSelectedPerformance={setSelectedPerformance} />
      )}
    </>
  );
}
export default memo(ProductionPage);