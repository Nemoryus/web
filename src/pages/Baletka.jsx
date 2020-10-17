import React, { useState } from "react";

import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import Grid from "@material-ui/core/Grid";

import FacebookIcom from '../picture/facebookIcon.svg';
import InstagramIcon from '../picture/instagramIcon.svg';
import InstagramIcon2 from '../picture/instagramIcon2.svg';
import YoutubeIcon from '../picture/youtubeIcon.svg';
import YoutubeIcon2 from '../picture/youtubeIcon2.svg';
import Logo from '../picture/logo.png';
import BaletkaVideo from '../video/introVideo.mp4';
import { NavLink } from 'react-router-dom'

function BaletkaPage(props) {
  const [youtubeIcon, setYoutubeIcon] = useState({ img: YoutubeIcon });
  const [instagramIcon, setInstagramIcon] = useState({ img: InstagramIcon });
  const [facebookIcon, setFacebookIcon] = useState({ img: FacebookIcom });


  const MouseEnterEvent = () => {
    setYoutubeIcon({
      img: YoutubeIcon2,
    })
    setInstagramIcon({
      img: InstagramIcon2,
    })
    setFacebookIcon({
      img: FacebookIcom,
    })

  }

  const MouseOutEvent = () => {
    setYoutubeIcon({
      img: YoutubeIcon,
    })
    setInstagramIcon({
      img: InstagramIcon,
    })
    setFacebookIcon({
      img: FacebookIcom,
    })

  }

  return (
    <div className="container-baletka">
      <div className="overview" />
      <video className="video" autoPlay loop muted >
        <source src={BaletkaVideo} type="video/mp4" />
      </video>

      <div className='inner-container-baletka-first' />
      <div className='inner-container-baletka-second'>
        <div className='logo-container-baletka'>
          <NavLink to='/main'>
            <img className="logo" src={Logo} alt="Logo" />
          </NavLink>
        </div>
        <Grid container className='grid-container-baletka'>
          <Hidden smDown>
            <Grid item md={4} />
          </Hidden>
          <Grid item xs={12} md={4} className='baletka-grid-socialIcon-nav-link-button'>
            <Paper className='baletka-paper-button'>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} className='baletka-grid-socialIcon'>
            <Paper className='baletka-paper-socialIcon'>
              <div className='cointainer-socialIcon'>
                <a href="https://www.facebook.com/durovcikjan">
                  <img className="socialIcon facebook" src={facebookIcon.img} alt="Facebook icon"
                  onMouseEnter={MouseEnterEvent}
                  onMouseOut={MouseOutEvent} />
                </a>

                <a href="https://www.facebook.com/durovcikjan">
                  <img className="socialIcon instagram" src={instagramIcon.img} alt="Instagram icon" 
                  onMouseEnter={MouseEnterEvent}
                  onMouseOut={MouseOutEvent} />
                </a>
                {/* {console.log("image2: " + image.img)} */}
                <a href="https://www.facebook.com/durovcikjan">
                  <img className="socialIcon youtube" src={youtubeIcon.img} alt="Youtube icon"
                    onMouseEnter={MouseEnterEvent}
                    onMouseOut={MouseOutEvent} />
                </a>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default BaletkaPage;