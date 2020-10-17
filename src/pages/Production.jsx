import React, { useState } from "react";
import { Text } from '../containers/Language';

// import 'react-awesome-slider/dist/styles.css';


import UnderPage from "./UnderPage"
//components
import CategoryMenu from '../components/CategoryMenu';
import AllPerformaceMenu from '../components/AllPerformanceMenu';
import ProductionFirstGrid from '../components/ProductionFirstGrid'
import ProductionSecondGrid from '../components/ProductionSecondGrid'


import ScrollBar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
//data
import { MUSICALS, BALLET_OPERA, SHOW, DANCE_THEATER } from '../data/data';
// console.log("Prvy pokus: "+MUSICALS.length);


export default function ProductionPage() {
  const musicals = MUSICALS;



  //const musicals = MUSICALS;
  const balletOpera = BALLET_OPERA;
  const show = SHOW;
  const danceTheater = DANCE_THEATER;

  let firstGrid = true;
  let [arrayOfGrid, setArrayOfGrid] = useState([]);

  let currentlyData;
  let lengthOfArray;
  let rest;
  let startFromPosition;
  let endPosition;
  let dataArray = [];
  let repeatCycle;
  let countOfRemainingObjects;
  let arrayOfAllData = [musicals, balletOpera, show, danceTheater]
  let count = 0;
  let isNotLastVariable = true;
  const numberOfLastDataArray = Object.keys(arrayOfAllData).length - 1;
  const numberOfLastVariableInDataArray = Object.keys(arrayOfAllData[numberOfLastDataArray]).length;



  function CreateAllGrid(handleSelectedPredstavenie) {
    currentlyData = arrayOfAllData[count];
    lengthOfArray = Object.keys(currentlyData).length;
    rest = lengthOfArray % 6;
    startFromPosition = 0;
    dataArray = [];
    repeatCycle = lengthOfArray / 6;
    repeatCycle = Math.floor(repeatCycle);
    countOfRemainingObjects = 0;

    while (isNotLastVariable) {
      if (lengthOfArray >= 6) {
        GridOfSixObject(handleSelectedPredstavenie);
        if (rest != 0) {
          GridOfMixedSixOjects(handleSelectedPredstavenie);
        } else {
          startFromPosition = 0;
          count = count + 1;
          currentlyData = arrayOfAllData[count]
          lengthOfArray = currentlyData.length;
        }
      } else {
        GridOfMixedSixOjects(handleSelectedPredstavenie);
      }
    }
    // setArrayOfGrid(arrayOfGrid);
  }

  function GridOfSixObject(handleSelectedPredstavenie) {
    lengthOfArray = Object.keys(currentlyData).length;
    repeatCycle = lengthOfArray / 6;
    repeatCycle = Math.floor(repeatCycle);

    for (let i = 0; i < repeatCycle; i++) {
      endPosition = startFromPosition + 6;
      for (startFromPosition; startFromPosition < endPosition; startFromPosition++) {
        dataArray.push(currentlyData[startFromPosition]);
      }
      ChangeGrid(firstGrid, dataArray, handleSelectedPredstavenie);
      dataArray = [];
      if (count === numberOfLastDataArray && endPosition === numberOfLastVariableInDataArray) {
        ChangeGrid(firstGrid, dataArray, handleSelectedPredstavenie);
        dataArray = [];
        isNotLastVariable = false;
        return;

      }
      startFromPosition = endPosition;
    }
    return;
  }

  function GridOfMixedSixOjects(handleSelectedPredstavenie) {
    if (lengthOfArray > 6) {
      countOfRemainingObjects = lengthOfArray - startFromPosition;
      endPosition = startFromPosition + countOfRemainingObjects;
    } else {
      countOfRemainingObjects = Object.keys(currentlyData).length - startFromPosition;
      endPosition = startFromPosition + countOfRemainingObjects;
    }

    for (startFromPosition; startFromPosition < endPosition; startFromPosition++) {
      dataArray.push(currentlyData[startFromPosition]);
    }

    if (count === numberOfLastDataArray && endPosition === numberOfLastVariableInDataArray) {
      isNotLastVariable = false;
      ChangeGrid(firstGrid, dataArray, handleSelectedPredstavenie);
      dataArray = [];
      return;
    }

    count = count + 1;
    currentlyData = arrayOfAllData[count];
    lengthOfArray = Object.keys(currentlyData).length;
    startFromPosition = 0;
    let frreSpaceInGrid = 6 - countOfRemainingObjects;

    if (frreSpaceInGrid >= lengthOfArray) {
      endPosition = startFromPosition + lengthOfArray;
      for (startFromPosition; startFromPosition < endPosition; startFromPosition++) {
        dataArray.push(currentlyData[startFromPosition]);
      }
      ChangeGrid(firstGrid, dataArray, handleSelectedPredstavenie);
      dataArray = [];
      isNotLastVariable = false;
    } else {
      endPosition = startFromPosition + (6 - countOfRemainingObjects);
      for (startFromPosition; startFromPosition < endPosition; startFromPosition++) {
        dataArray.push(currentlyData[startFromPosition]);
      }
      ChangeGrid(firstGrid, dataArray, handleSelectedPredstavenie);
      dataArray = [];
      startFromPosition = endPosition;
      lengthOfArray = lengthOfArray - frreSpaceInGrid;
    }
  }

  function CreateGrid(aParams, handleSelectedPredstavenie) {
    let lengthOfArray = Object.keys(aParams).length;
    let repeatCycle = lengthOfArray / 6;
    repeatCycle = Math.floor(repeatCycle);
    const rest = lengthOfArray % 6;

    let dataArray = [];

    if (repeatCycle > 0) {
      for (let i = 0; i < repeatCycle; i++) {
        for (let index = 0; index < 6; index++) {
          dataArray.push(aParams[index]);
        }
        ChangeGrid(firstGrid, dataArray, handleSelectedPredstavenie);
        dataArray = [];
      }
    }

    console.log("rest je: " + rest);
    if (rest != 0) {
      let newIndex = repeatCycle * 6;
      for (let index = newIndex; index < lengthOfArray; index++) {
        dataArray.push(aParams[index]);
      }
      ChangeGrid(firstGrid, dataArray, handleSelectedPredstavenie);
      dataArray = [];
    }
    setArrayOfGrid(arrayOfGrid);
  }

  function ChangeGrid(isFirst, arrayData, handleSelectedPredstavenie) {
    if (isFirst) {
      arrayOfGrid.push(<ProductionFirstGrid key = {arrayOfGrid.length} params={arrayData} handleSelectedPredstavenie={handleSelectedPredstavenie} />)
      firstGrid = false;
    } else {
      arrayOfGrid.push(<ProductionSecondGrid key = {arrayOfGrid.length} params={arrayData} handleSelectedPredstavenie={handleSelectedPredstavenie} />)
      firstGrid = true;
    }
  }

  const [indexSelectedPredstavenie, setIndexSelectedPredstavenie] = useState(-1);
  const [categoryItems, setCategoryItems] = useState([]);
  const [firstTime, setFirstTime] = useState(true);

  const handleSelectedCategory = (category) => {
    arrayOfGrid = [];
    setFirstTime(false);
    if (category === 'MUSICAL') {
      CreateGrid(MUSICALS, handleSelectedPredstavenie);
    } else if (category === 'BALLET_OPERA') {
      CreateGrid(BALLET_OPERA, handleSelectedPredstavenie);
    } else if (category === 'DANCE_THEATER') {
      CreateGrid(DANCE_THEATER, handleSelectedPredstavenie);
    } else if (category === 'SHOW') {
      CreateGrid(SHOW, handleSelectedPredstavenie)
    } else {
      CreateAllGrid(handleSelectedPredstavenie);
    }

  }

  const handleSelectedPredstavenie = (category, newIndexSelectedPredstavenie) => {
    setIndexSelectedPredstavenie(newIndexSelectedPredstavenie)
    if (category === 'MUSICALS') {
      setCategoryItems(MUSICALS)
    } else if (category === 'BALLET_OPERA') {
      setCategoryItems(BALLET_OPERA)
    } else if (category === 'SHOW') {
      setCategoryItems(SHOW)
    } else {
      setCategoryItems(DANCE_THEATER)
    }

  }

  return (
    <div >
      {indexSelectedPredstavenie == -1 ? (
        <div className='container-production'>
          {firstTime && CreateAllGrid(handleSelectedPredstavenie)}
          <h1><Text tid="production" /></h1>
          <CategoryMenu handleSelectedCategory={handleSelectedCategory} />
          <AllPerformaceMenu handleSelectedPredstavenie={handleSelectedPredstavenie} />
          <div className='scroleArea'>
            <ScrollBar>
              <div>
                {arrayOfGrid}
              </div>
            </ScrollBar>
          </div>
        </div>
      ) : (
          <div>
            <UnderPage categoryItems={categoryItems} indexSelectedPredstavenie={indexSelectedPredstavenie} />
          </div>
        )
      }
    </div>
  );
}
