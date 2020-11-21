import React, { memo, useState, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Hidden from '@material-ui/core/Hidden';

import MainNavigation from "../components/MainNavigation"
import DropMenu from "../components/DropMenu"
import LanguageSelect from '../components/LanguageSelect';
import Logo from '../picture/logo.png';

function Header({ headerType, handleLogoClicked }) {
    const [headerActive, setHeaderActive] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', handleHeaderActive)
    }, [])

    const handleHeaderActive = () => {
        if(window.scrollY >= 1) {
            setHeaderActive(true)
        } else {
            setHeaderActive(false)
        }
    }

    return(
        // <header className={`header-wrapper ${headerType == -1 ? "header-wrapper--trans" : headerType == 0 ? "header-wrapper--grad" : ""} ${headerActive ? "active" : ""}`}>
        // COMMENTED FUNCTIONALITY WITH HEADER EFFECT 
        <header className={`header-wrapper ${headerActive ? "active" : ""}`}>
            {headerType === -1 ? (
                <Box className="header-effect header-effect--trans"/>
            ) : headerType === 0 ? (
                <>
                    <Box className="header-effect header-effect--trans"/>
                    <Box className="header-effect header-effect--grad"/>
                </>
            ) : (
                <Box className="header-effect header-effect--full"/>
            )}
            <Grid className="header" container justify="center" alignItems="center">
                <Grid item xs={6} md={2}>
                    <img onClick={() => handleLogoClicked()} className="logo hand" src={Logo}/>
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
export default memo(Header)