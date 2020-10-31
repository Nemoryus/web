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

import { getPerformances } from '../data/constans'

export default function ProductionPage() {
  const gridSize = 6; // count of performances in a grid 
  const [selectedPerformance, setSelectedPerformance] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [performances, setPerformances] = useState(getPerformances('ALL')); // set all performances as default

  useEffect(() => {
    window.scrollTo(0, 0) // on change go back to top
  }, [selectedPerformance])

  useEffect(() => {
    setPerformances(getPerformances(selectedCategory))
  }, [selectedCategory])

  function ProductionGridLayout() {
    let arrayOfGrids = [];
    let tmpPerformances = [];
    let isFirst = false;
    performances.map((performance, index) => {
      if(index != 0) {
        if(index % (gridSize * 2) == 0) {
          arrayOfGrids.push(<ProductionSecondGrid key={index} performances={tmpPerformances} setSelectedPerformance={setSelectedPerformance} />);
          isFirst = false;
          tmpPerformances = []
        } else if(index % gridSize == 0) {
          arrayOfGrids.push(<ProductionFirstGrid key={index} performances={tmpPerformances} setSelectedPerformance={setSelectedPerformance} />);
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
              <ProductionPerformanceMenu selectedCategory={selectedCategory} setSelectedPerformance={setSelectedPerformance} />
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
          <CategoryPage selectedPerformance={selectedPerformance} setSelectedPerformance={setSelectedPerformance} />
        )
      }
    </Fragment>
  );
}
