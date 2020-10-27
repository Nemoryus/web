import React, { useState } from "react";

import Box from "@material-ui/core/Box";

import FacebookIcomHover from '../picture/facebookHover.svg';
import FacebookIcom from '../picture/facebook.svg';
import InstagramIcon from '../picture/instagram.svg';
import InstagramIconHover from '../picture/instagramHover.svg';
import YoutubeIconHover from '../picture/yotubeHover.svg';
import YoutubeIcon from '../picture/youtube.svg';

export default function SocialIcons(props) {
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
        <Box className='wrapper-social-icons'>
            <a href="https://www.facebook.com/durovcikjan">
                <img className="socialIcon facebook" src={facebookIcon.img} alt="Facebook icon"
                    onMouseEnter={MouseEnterEventFacebook}
                    onMouseOut={MouseOutEventFacebook} 
                />
            </a>
            <a href="https://www.facebook.com/durovcikjan">
                <img className="socialIcon instagram" src={instagramIcon.img} alt="Instagram icon"
                    onMouseEnter={MouseEnterEventInstagram}
                    onMouseOut={MouseOutEventInstagram}
                />
            </a>
            <a href="https://www.facebook.com/durovcikjan">
                <img className="socialIcon youtube" src={youtubeIcon.img} alt="Youtube icon"
                    onMouseEnter={MouseEnterEventYotube}
                    onMouseOut={MouseOutEventYotube}
                />
            </a>
        </Box>
    );
}