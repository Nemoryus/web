import React from "react";

import MainNavigation from "../components/MainNavigation"
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Hidden from '@material-ui/core/Hidden';

import LanguageSelect from '../components/LanguageSelect';
import FacebookIcom from '../picture/facebookIcon.svg';
import InstagramIcon from '../picture/instagramIcon.svg';
import YoutubeIcon from '../picture/youtubeIcon.svg';
import Logo from '../picture/logo.png';

export default function Footer(props) {
    return (
        <div className='footer'>
            <Grid  className = 'footer-grid-cointainer' container>
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
                            <LanguageSelect className='footer-selector'/>
                        </Paper>
                    </Grid>
                </Hidden>
                <Grid item xs={6} md={7}>
                    <Paper className='footer-jan'>
                        <p>Copyright © 2020 Jan Entertainment</p>
                    </Paper>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Paper className='footer-paper-socialIcon'>
                        <a href="https://www.facebook.com/durovcikjan"> <img className="socialIcon facebook" src={FacebookIcom} alt="Facebook icon" /> </a>
                        <a> <img className="socialIcon instagram" src={InstagramIcon} alt="Instagram icon" /></a>
                        <a> <img className="socialIcon youtube" src={YoutubeIcon} alt="Youtube icon" /></a>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
