import React, { useState } from "react";
import { NavLink } from "react-router-dom"
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
// import 'react-awesome-slider/dist/styles.css';

import Picture from '../picture/gasp.jpg';
import Picture1 from '../picture/voda.jpg';
import Picture2 from '../picture/westside.jpg';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';

//components
import UnderPageMenu from '../components/UnderPageMenu';



const AutoplaySlider = withAutoplay(AwesomeSlider);

const slider = (
  <AutoplaySlider 
    className = "under-page-slider"
    animation="foldOutAnimation"
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={3000}
    organicArrows={false}
    bullets={false}
    cssModule={[CoreStyles, AnimationStyles]}
  >
    <div data-src={Picture} />
    <div data-src={Picture1} />
    <div data-src={Picture2} />
  </AutoplaySlider>
);


function CategoryPage({ performances, selectedPerformance }) {
  const [isOpened, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };


  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <Box id="category-page">
      <div className='under-page-slider-container'>
      {slider}
      {/* {isOpened &&
        <div className="under-page-overview"/>
          <div className='under-page-video-cointainer'>
            
            <div className='donttouchme'>
              <ClickAwayListener onClickAway={handleClickAway}>
                <iframe className='video-under-page' width="560" height="315" src="https://www.youtube.com/embed/nO8KpzeTbMg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </ClickAwayListener>
            </div>
          </div>
      } */}
        <IconButton className='button-underpage' onClick={handleClick}>
          <span className= 'button-underpage-text'>Trailer</span>
          <SvgIcon>
            <ArrowDropDownIcon />
          </SvgIcon>
        </IconButton>
      </div>
     
      <div className='menu-under-page'>
        {/* <UnderPageMenu performances={performances} indexSelectedPredstavenie={indexSelectedPredstavenie} /> */}
      </div>


      <Box className="page-content content-light padd-top padd-btm t-center">
        <p className="bold push-btm-dbl">{selectedPerformance.additionalData.info}<br></br>{selectedPerformance.additionalData.note}</p>
        <img className="push-btm-hlf" src={require(`../picture/${selectedPerformance.img.firstPatch}`)}/>
        <span>(official poster)</span>
        <h3 className='page-title padd-top-dbl'>Review</h3>
        <p className="quote-block t-center push-btm-dbl">
          <q>... I´ve seen the best soloists in my life ever. Better than in America, Australia or any where else in Europe.</q>
          <div className="bold push-top-hlf">Ronald S. Taft, owner of musical rights</div>
        </p>
        <p className="quote-block t-center push-btm-dbl">
          <q>... I´ve seen the best soloists in my life ever. Better than in America, Australia or any where else in Europe.</q>
          <div className="bold push-top-hlf">Ronald S. Taft, owner of musical rights</div>
        </p>
        <p className="quote-block t-center push-btm-dbl">
          <q>... I´ve seen the best soloists in my life ever. Better than in America, Australia or any where else in Europe.</q>
          <div className="bold push-top-hlf">Ronald S. Taft, owner of musical rights</div>
        </p>
        <p className="quote-block t-center push-btm-dbl">
          <q>... I´ve seen the best soloists in my life ever. Better than in America, Australia or any where else in Europe.</q>
          <div className="bold push-top-hlf">Ronald S. Taft, owner of musical rights</div>
        </p>
        <Box className='t-center padd-btm-dbl push-btm push-top-dbl'>
            <Button component={NavLink} className='btn btn-1' to='/'>back</Button>
        </Box>
      </Box>

    </Box>
  );
}
export default CategoryPage;