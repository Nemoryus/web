import React from "react";
import { NavLink } from 'react-router-dom'

import SocialIcons from '../components/SocialIcons'
import Logo from '../picture/logo.png';
import BaletkaVideo from '../video/introVideo.mp4';


function WelcomePage() {
  return (
    <div className="container-baletka">
      <div className="overlay"/>
      
      <NavLink className="wrapper-logo" to='/home'>
        <img className="logo" src={Logo}/>
      </NavLink>

      <video className="video" autoPlay loop muted >
        <source src={BaletkaVideo} type="video/mp4"/>
      </video>

      <SocialIcons/>
    </div>
  );
}
export default WelcomePage;