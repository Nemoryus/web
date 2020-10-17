import React from "react";

import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import Grid from "@material-ui/core/Grid";

import FacebookIcom from '../picture/facebookIcon.svg';
import InstagramIcon from '../picture/instagramIcon.svg';
import YoutubeIcon from '../picture/youtubeIcon.svg';
import Logo from '../picture/logo.png';
import BaletkaVideo from '../video/introVideo.mp4';
import { NavLink } from 'react-router-dom'

function BaletkaPage() {
  return (
    <div className="container-baletka">
      <div className="overview" />
      <video className="video" autoPlay loop muted >
        <source src={BaletkaVideo} type="video/mp4" />
      </video>
      
      <div className='inner-container-baletka-first'/>
      <div className='inner-container-baletka-second'>
        <div className='logo-container-baletka'>
          <img className="logo" src={Logo} alt="Logo" />
        </div>
        <Grid container className='grid-container-baletka'>
          <Hidden smDown>
            <Grid item md={4} />
          </Hidden>
          <Grid item xs={12} md={4} className='baletka-grid-socialIcon-nav-link-button'>
            <Paper className='baletka-paper-button'>
              <NavLink className='nav-link-button baletka-button' to='/main'>enter</NavLink>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} className='baletka-grid-socialIcon'>
            <Paper className='baletka-paper-socialIcon'>
              <div className='cointainer-socialIcon'>
                <a href="https://www.facebook.com/durovcikjan">
                  <img className="socialIcon facebook" src={FacebookIcom} alt="Facebook icon" />
                </a>

                <a href="https://www.facebook.com/durovcikjan">
                <img className="socialIcon instagram" src={InstagramIcon} alt="Instagram icon" />
                </a>

                <a href="https://www.facebook.com/durovcikjan">
                <img className="socialIcon youtube" src={YoutubeIcon} alt="Youtube icon" />
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