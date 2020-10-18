import React,{useState}from "react";

import MainNavigation from "../components/MainNavigation"
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Hidden from '@material-ui/core/Hidden';

import LanguageSelect from '../components/LanguageSelect';
import FacebookIcomHover from '../picture/facebookHover.svg';
import FacebookIcom from '../picture/facebook.svg';
import InstagramIcon from '../picture/instagram.svg';
import InstagramIconHover from '../picture/instagramHover.svg';
import YoutubeIconHover from '../picture/yotubeHover.svg';
import YoutubeIcon from '../picture/youtube.svg';
import Logo from '../picture/logo.png';

export default function Footer() {
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
        <div className='footer'>
            <Grid className='footer-grid-cointainer' container>
                <Grid item xs={4} md={1}>
                    <Paper className='footer-paperGrid-logo'>
                        <img className="footer-logo" src={Logo} alt="Logo" />
                    </Paper>
                </Grid>
                <Grid item xs={4} md={2}>
                    <Paper className='footer-paperGrid-navigation'>
                        <MainNavigation />
                    </Paper>
                </Grid>
                <Hidden mdUp>
                    <Grid item xs={4} md={7}>
                        <Paper className='footer-paper-language'>
                            <LanguageSelect className='footer-selector' />
                        </Paper>
                    </Grid>
                </Hidden>
                <Grid item xs={6} md={6}>
                    <Paper className='footer-jan'>
                        <p>Copyright © 2020 Jan Entertainment</p>
                    </Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper className='footer-paper-socialIcon'>
                        <a href="https://www.facebook.com/durovcikjan"> <img className="socialIcon facebook" src={facebookIcon.img} alt="Facebook icon"
                            onMouseEnter={MouseEnterEventFacebook}
                            onMouseOut={MouseOutEventFacebook} />
                        </a>
                        <a> <img className="socialIcon instagram" src={instagramIcon.img} alt="Instagram icon"
                            onMouseEnter={MouseEnterEventInstagram}
                            onMouseOut={MouseOutEventInstagram} />
                        </a>
                        <a> <img className="socialIcon youtube" src={youtubeIcon.img} alt="Youtube icon"
                            onMouseEnter={MouseEnterEventYotube}
                            onMouseOut={MouseOutEventYotube} />
                        </a>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
