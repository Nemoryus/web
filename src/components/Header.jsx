import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import Grid from "@material-ui/core/Grid";
import Logo from '../picture/logo.png';

//import components
import MainNavigation from "../components/MainNavigation"
import DropMenu from "../components/DropMenu"
import Hidden from '@material-ui/core/Hidden';
import LanguageSelect from '../components/LanguageSelect';

export default function Header({headerType}) {
    const [headerActive, setHeaderActive] = useState(false)

    const handleHeaderActive = () => {
        if(window.scrollY >= 1) {
            setHeaderActive(true)
        } else {
            setHeaderActive(false)
        }
    }

    window.addEventListener('scroll', handleHeaderActive)

    return(
        <header className={`header-wrapper ${headerType == -1 ? "header-wrapper--trans" : headerType == 0 ? "header-wrapper--grad" : ""} ${headerActive ? "active" : ""}`}>
            <Grid className="header" container justify="center" alignItems="center">
                <Grid item xs={6} md={2}>
                    <NavLink to="/home">
                        <img className="logo" src={Logo}/>
                    </NavLink>
                </Grid>
                <Hidden mdUp>
                    <Grid className='drop-menu-container' item xs={6}>
                        <DropMenu />
                    </Grid>
                </Hidden>
                <Hidden smDown>
                    <Grid item md={8}>
                        <MainNavigation from='Header' />
                    </Grid>
                    <Grid item md={2}>
                        <LanguageSelect />
                    </Grid>
                </Hidden>
            </Grid>
        </header>
    );
}
