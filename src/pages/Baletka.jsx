import React, { useState } from "react";

import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import Grid from "@material-ui/core/Grid";

import FacebookIcomHover from '../picture/facebookHover.svg';
import FacebookIcom from '../picture/facebook.svg';
import InstagramIcon from '../picture/instagram.svg';
import InstagramIconHover from '../picture/instagramHover.svg';
import YoutubeIconHover from '../picture/yotubeHover.svg';
import YoutubeIcon from '../picture/youtube.svg';
import Logo from '../picture/logo.png';
import BaletkaVideo from '../video/introVideo.mp4';
import { NavLink } from 'react-router-dom'

function BaletkaPage() {
  const [youtubeIcon, setYoutubeIcon] = useState({ img: YoutubeIcon });
  const [instagramIcon, setInstagramIcon] = useState({ img: InstagramIcon });
  const [facebookIcon, setFacebookIcon] = useState({ img: FacebookIcom });


  const MouseEnterEventYotube = () => {
    setYoutubeIcon({
      img: YoutubeIconHover,
    })
  }

  const MouseEnterEventInstagram = () => {
    setInstagramIcon({
      img: InstagramIconHover,
    })
  }

  const MouseEnterEventFacebook = () => {
    setFacebookIcon({
      img: FacebookIcomHover,
    })
  }

  const MouseOutEventYotube = () => {
        setYoutubeIcon({
          img: YoutubeIcon,
        })
  }

  const MouseOutEventInstagram = () => {
    setInstagramIcon({
      img: InstagramIcon,
    })
}

const MouseOutEventFacebook = () => {
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
                    onMouseEnter={MouseEnterEventFacebook}
                    onMouseOut={MouseOutEventFacebook} />
                </a>

                <a href="https://www.facebook.com/durovcikjan">
                  <img className="socialIcon instagram" src={instagramIcon.img} alt="Instagram icon"
                    onMouseEnter={MouseEnterEventInstagram}
                    onMouseOut={MouseOutEventInstagram} />
                </a>
                {/* {console.log("image2: " + image.img)} */}
                <a href="https://www.facebook.com/durovcikjan">
                  <img className="socialIcon youtube" src={youtubeIcon.img} alt="Youtube icon"
                    onMouseEnter={MouseEnterEventYotube}
                    onMouseOut={MouseOutEventYotube} />
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