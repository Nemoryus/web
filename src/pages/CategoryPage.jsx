import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import CategoryMenu from '../components/CategoryMenu';

import { getPerformances } from '../data/constans'

// Slider
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
const AutoplaySlider = withAutoplay(AwesomeSlider);

function SliderImages({ images }) {

  useEffect(() => {
    document.getElementsByClassName('awssld__bullets')[0].firstChild.click()
  }, [images])
  
  return (
    <div>
      <AutoplaySlider
        fillParent={true}
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={5000}
        bullets={true}
        organicArrows={false}
      >
        {images.map((image, index) => {
          return (
            <div key={index} data-src={require(`../picture/${image}`)}>
              <div className="slider-content">sss</div>
            </div>
          )
        })}
      </AutoplaySlider>
    </div>
  )
};

function CategoryPage({ selectedPerformance, setSelectedPerformance }) {
  const performances = getPerformances(selectedPerformance.category)
  const showProductionPage = () => {
    setSelectedPerformance(null)
  }

  return (
    <Box id="category-page">
      <div className="slider-wrapper__lettering">
        <SliderImages images={selectedPerformance.img}/>
        <div className="category-menu-wrapper">
          <CategoryMenu performances={performances} selectedPerformance={selectedPerformance} setSelectedPerformance={setSelectedPerformance}/>
        </div>
      </div>

      <Box className="page-content content-light padd-top padd-btm t-center">
        <p className="bold push-btm-dbl">{selectedPerformance.additionalData.info}<br></br>{selectedPerformance.additionalData.note}</p>
        {selectedPerformance.img[0] != '' &&
          <img className="push-btm-hlf" src={require(`../picture/${selectedPerformance.img[0]}`)}/>
        }
        <span>(official poster)</span>
        <h3 className='page-title padd-top-dbl'>Review</h3>
        <p className="quote-block t-center push-btm-dbl">
          <q>... I´ve seen the best soloists in my life ever. Better than in America, Australia or any where else in Europe.</q>
          <span className="bold push-top-hlf blc">Ronald S. Taft, owner of musical rights</span>
        </p>
        <p className="quote-block t-center push-btm-dbl">
          <q>... I´ve seen the best soloists in my life ever. Better than in America, Australia or any where else in Europe.</q>
          <span className="bold push-top-hlf blc">Ronald S. Taft, owner of musical rights</span>
        </p>
        <p className="quote-block t-center push-btm-dbl">
          <q>... I´ve seen the best soloists in my life ever. Better than in America, Australia or any where else in Europe.</q>
          <span className="bold push-top-hlf blc">Ronald S. Taft, owner of musical rights</span>
        </p>
        <p className="quote-block t-center push-btm-dbl">
          <q>... I´ve seen the best soloists in my life ever. Better than in America, Australia or any where else in Europe.</q>
          <span className="bold push-top-hlf blc">Ronald S. Taft, owner of musical rights</span>
        </p>
        <Box className='t-center padd-btm-dbl push-btm push-top-dbl'>
            <Button onClick={() => showProductionPage()} className='btn btn-1'>back</Button>
        </Box>
      </Box>
    </Box>
  );
}
export default CategoryPage;