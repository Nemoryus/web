import React from "react";
import {NavLink} from "react-router-dom"
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const navItems = [
    {
        label: 'About us', 
        url: 'about-us'
    },
    {
        label: 'Production', 
        url: 'production'
    },
    {
        label: 'Contact', 
        url: 'contact'
    }
]

export default function MainNavigation({ from }) {
   return(
       <React.Fragment>
            {from == 'Header' ?
                <Grid className="header-navigation" container justify="center">
                    {
                        navItems.map(navItem => {
                            return (
                                <Grid key={navItem.url} item className="t-center" md={3}>
                                    <NavLink className='navlink' to={navItem.url}>{navItem.label}</NavLink>
                                </Grid>
                            ) 
                        })
                    }
                </Grid>
            :
                <Box className="footer-navigation">
                    {
                        navItems.map(navItem => {
                            return (
                                <Box key={navItem.url}>
                                    <NavLink className='navlink' to={navItem.url}>{navItem.label}</NavLink>
                                </Box>
                            )
                        })
                    }
                </Box>
            }
        </React.Fragment>
    );
}