import React from 'react';
// import { NavLink } from 'react-router-dom'  

import { NavLink } from 'react-router-dom'
import { makeStyles, createStyles, styled } from '@material-ui/styles';

import TmavaModra from "../picture/modratmava.jpg"
import MainGridLayout from "../components/MainGridLayout"
import BaletkaVideo from '../video/introVideo.mp4'

const useStyles = makeStyles((theme) => ({
    list: {
        '*::-webkit-scrollbar': {
            width: '0.4em'
        },
        '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)',
            outline: '1px solid slategrey'
        }
    }
}));

function MainPage() {
    const classes = useStyles();
    return (
        <div className='container-main' style={{ backgroundImage: `url(${TmavaModra})` }}>

            <MainGridLayout></MainGridLayout>
          
            <NavLink className='nav-link-button firs' to='/production'>view all</NavLink>
            <marquee > "Preparation of The eight continent inspired by La Dame aux Camélias has started" / NEWS / "Gala Chorea 2019 sucessful for us "/ NEWS / "Gala Chorea 2019 sucessful for us</marquee>
            <h4>ABOUT US</h4>

            <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                quis nostrud exerci tation ullamcorper suscipit lobortis
                nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
                dolor in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                et iusto odio dignissim qui blandit praesent luptatum zzril delenit
                augue duis dolore te
            </p>

            <NavLink className='nav-link-button second' to='/about-us'>read more</NavLink>

            <video className="video" autoPlay loop muted >
                <source src={BaletkaVideo} type="video/mp4" />
            </video>
        </div>
    );
}

export default MainPage;
