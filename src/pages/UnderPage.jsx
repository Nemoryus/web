import React, { useState } from "react";
import { NavLink } from "react-router-dom"
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';
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


function UnderPage({ performances, indexSelectedPredstavenie }) {
  const [isOpened, setOpen] = React.useState(false);

  const styles = {
    show: {
        display: 'block'
    },
    hiden: {
        display: 'none'
    }
};


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
      <div className="under-page-overview" style= {isOpened? styles.show:styles.hiden} onClick = {overflowNone}/>
        {slider}
        {isOpened &&
        
          <div className='under-page-video-cointainer'>
            
            <div className='donttouchme'>
              <ClickAwayListener onClickAway={handleClickAway}>
                {/* <video className='video-under-page' autoPlay loop muted >
                  <source src={BaletkaVideo} type="video/mp4" />
                </video> */}
                <iframe className='video-under-page' width="560" height="315" src="https://www.youtube.com/embed/nO8KpzeTbMg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </ClickAwayListener>
            </div>
          </div>}
        <IconButton className='button-underpage' onClick={handleClick}>
          <span className= 'button-underpage-text'>Trailer</span>
          <SvgIcon className= 'button-underpage-icon'>
            <ArrowDropDownIcon />
          </SvgIcon>
        </IconButton>
      </div>
     
      <div className='menu-under-page'>
        <UnderPageMenu handleSelectedNewIdexPredstavenie={handleSelectedPredstavenie} performances={performances} indexSelectedPredstavenie={indexSelectedPredstavenie} />
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