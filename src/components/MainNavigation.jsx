import React from "react";
import {NavLink} from "react-router-dom"

export default function MainNavigation(props) {
   return(
        <nav className='navigation'>
            <NavLink className='navlink about-us' to="/about-us" exact><strong>ABOUT US</strong></NavLink>
            <NavLink className='navlink contact' to="/contact"><strong>CONTACT</strong></NavLink>
            <NavLink className='navlink production' to="/production"><strong>PRODUCTION</strong></NavLink>
        </nav>
    );   
}
