import React, { useState } from "react";
import { NavLink } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import { Text } from '../containers/Language';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';
// import 'react-awesome-slider/dist/styles.css';

import BaletkaVideo from '../video/introVideo.mp4';
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


function UnderPage({ categoryItems, indexSelectedPredstavenie }) {
  const [isOpened, setOpen] = React.useState(false);

  const [currentlyIndexSelectedPredstavenie, setCurentlyIndexSelectedPredstavenie] = useState(indexSelectedPredstavenie);

  const handleSelectedPredstavenie = (underPageMenuSelectedIndex) => {
    setCurentlyIndexSelectedPredstavenie(underPageMenuSelectedIndex);
  }


  const handleClick = () => {
    setOpen(true);
    // document.getElementById('body').style.overflow = 'hidden';
  };


  const handleClickAway = () => {
    setOpen(false);
    // document.getElementById('body').style.overflow = 'none';
  };

  const overflowNone = () => {
    document.getElementById('body').style.overflow ='none';
  };

  return (
    <div className='under-page-container' onClick = {overflowNone}>
      <div className='under-page-slider-container'>
        {slider}
        <IconButton className='button-underpage' onClick={handleClick}>
          Trailer
          <SvgIcon >
            <ArrowDropDownIcon />
          </SvgIcon>
        </IconButton>
        {/* <Button className='button-underpage' onClick={handleClick} >TRAILER</Button> */}
      </div>

      {console.log("currentlyIndexSelectedPredstavenie: " + currentlyIndexSelectedPredstavenie)}
      {/* {categoryItems[currentlyIndexSelectedPredstavenie].name} */}
      <div>
        {isOpened &&
          <div className='under-page-video-cointainer'>
            <div className="under-page-overview" onClick = {overflowNone}/>
            <div className='donttouchme'>
              <ClickAwayListener onClickAway={handleClickAway}>
                {/* <video className='video-under-page' autoPlay loop muted >
                  <source src={BaletkaVideo} type="video/mp4" />
                </video> */}
                <iframe className='video-under-page' width="560" height="315" src="https://www.youtube.com/embed/nO8KpzeTbMg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </ClickAwayListener>
            </div>
          </div>}
      </div>
      <div className='menu-under-page'>
        <UnderPageMenu handleSelectedNewIdexPredstavenie={handleSelectedPredstavenie} categoryItems={categoryItems} indexSelectedPredstavenie={indexSelectedPredstavenie} />
      </div>


      <div className='contents-under-page'>
        <p>22 .1.1993 </p>
        <h3>Nazov</h3>
        <p>.. I've seen the best soloists in my life ever. Better than in America, Australia or anywhere else in Europe. ”
          Ronald S. Taft, owner of musical rights</p>
        <p>... I've seen the best soloists in my life ever. Better than in America, Australia or anywhere else in Europe. ”
          Ronald S. Taft, owner of musical rights</p>
        <NavLink className='navlink production' to="/production"><strong>back</strong></NavLink>
      </div>

    </div>
  );
}
export default UnderPage;