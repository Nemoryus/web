import React from "react";
import { NavLink } from 'react-router-dom'
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Logo from '../picture/logo.png';
//import components
import MainNavigation from "../components/MainNavigation"
import DropMenu from "../components/DropMenu"
import Hidden from '@material-ui/core/Hidden';
import LanguageSelect from '../components/LanguageSelect';


export default function Header(props) {
    return (
        <div className='header'>
            <Grid container>
                <Grid item xs={6} md={3}>
                    <Paper className='header-paperGrid'>
                        <NavLink className='navlink-image' to="/main">
                            <img className="header-logo" src={Logo} alt="Logo" />
                        </NavLink>
                    </Paper>
                </Grid>
                <Hidden  smDown>
                    <Grid  item md={8}>
                        <Paper className ='header-navigation-cointainer' >
                            <MainNavigation />
                        </Paper>
                    </Grid>
                </Hidden>
                <Hidden mdUp>
                    <Grid item xs={6}>
                        <Paper>
                            <DropMenu />
                        </Paper>
                    </Grid>
                </Hidden>
                <Hidden smDown>
                    <Grid item md={1}>
                        <Paper className='header-paper-language'>
                            <LanguageSelect className='header-selector' />
                        </Paper>
                    </Grid>
                </Hidden>
            </Grid>
        </div>
    );
}
