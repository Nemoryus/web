import React from "react";

import ProductionFirstGrid from '../components/ProductionFirstGrid'
import ProductionSecondGrid from '../components/ProductionSecondGrid'

import { MUSICALS } from '../data/data';
import { BALLET_OPERA } from '../data/data';
import { SHOW } from '../data/data';
import { DANCE_THEATER } from '../data/data';

const musicals = Object.keys(MUSICALS).length;
const balletOpera = BALLET_OPERA;
const show = SHOW;
const danceTheater = DANCE_THEATER;

// console.log("Musiacal dlzka pola aaa: "+ MUSICALS.lenght);
// console.log("Musiacal dlzka pola aaa: "+ musicals[0].img.firstPatch);

const arrayOfGrid = [];

function CreateGrid(aParams) {
    console.log("Dlzka musical ako parameter: " +  Object.keys(aParams).length);
    const a = Object.keys(aParams).length;
    console.log("a: " +  a);
    const repeatCycle = a / 6;
    console.log("RepeatCycle: " +  repeatCycle);
    const firstGrid = true;
    const dataArray = [];
    
  
    if (repeatCycle >= 1) {
      for (let index = 0; index < repeatCycle; index++) {
        for (let index = 1; index < 6; index++) {
          dataArray.push(aParams[index]);
        }
        ChangeGrid(firstGrid, dataArray);
      }   
    }

    for (let index = 1; index < aParams.lenght; index++) {
      dataArray.push(aParams[index]);
    }
    ChangeGrid(firstGrid, dataArray);
  
  }
  
  function ChangeGrid(isFirst, pole) {
      console.log("First: " +isFirst);
    if (isFirst) {
      arrayOfGrid.push(<ProductionFirstGrid params={pole} />)
      isFirst = false;
    } else {
      arrayOfGrid.push(<ProductionSecondGrid params={pole} />)
      isFirst = true;
    }
  }
  
  
export default function  testComponent() {

    console.log("Musiacal dlzka pola aaa: "+ musicals);
    // console.log("Musiacal dlzka pola aaa: "+ musicals[0].img.firstPatch);
  
    return (
      <div className='container-production'>
        {CreateGrid(MUSICALS)}
        <h1>Auto</h1>

        <div className = 'containerGrid'>
          {arrayOfGrid}
        </div>
      </div>
    );
  }