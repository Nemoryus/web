import React from "react";
import { NavLink } from "react-router-dom"
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import Button from '@material-ui/core/Button';
// import 'react-awesome-slider/dist/styles.css';

import BaletkaVideo from '../video/introVideo.mp4';
import Picture from '../picture/gasp.jpg';
import Picture1 from '../picture/voda.jpg';
import Picture2 from '../picture/westside.jpg';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';



const AutoplaySlider = withAutoplay(AwesomeSlider);





export default function NewUnderPage({  }) {
    const [isOpened, setOpen] = React.useState(false);


    const handleClick = () => {
        console.log("aaaaa");
        setOpen(true);
    };




    return (
        <div >
            {/* <ClickAwayListener onClickAway={skuska}> */}
                <div className='under-page-button-cointainer'>
                    {/* <Button onClick={handleClick}  >contact form</Button> */}
                    <div className='viedo-cointainer-under-page'>
                        {isOpened &&
                            <div className='donttouchme'>
                                <div className="overview" />
                                <video className='viedo-under-page' autoPlay loop muted >
                                    <source src={BaletkaVideo} type="video/mp4" />
                                </video>
                            </div>}
                    </div>
                </div>
                
            {/* </ClickAwayListener> */}
            <Button onClick={handleClick} >contact form</Button>
            <div className='menu-under-page'>
                {/* <UnderPageMenu categoryItems={categoryItems, indexSelectedPredstavenie} /> */}
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
