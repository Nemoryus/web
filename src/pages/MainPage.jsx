import React, { useRef, useEffect } from 'react';
// import { NavLink } from 'react-router-dom'  

import { NavLink } from 'react-router-dom'
import { makeStyles, createStyles, styled } from '@material-ui/styles';

import TmavaModra from "../picture/modratmava.jpg"
import MainGridLayout from "../components/MainGridLayout"
import BaletkaVideo from '../video/introVideo.mp4'
// import YoutubeIcon from '../picture/video-play.svg';
import { render } from '@testing-library/react';









function MainPage() {
    const vidRef = useRef(null);

    const playVideo = () => {
        vidRef.current.play();
    }

    const stopVideo = () => {
        vidRef.current.stop();
    }

    return (
        <div className='container-main' >
            <div className='inner-container-main-first'>
                <MainGridLayout></MainGridLayout>

                <NavLink className='nav-link-button firs' to='/production'><strong>view all</strong></NavLink>
                <marquee ><strong> "Preparation of The eight continent inspired by La Dame aux Camélias has started" / NEWS / "Gala Chorea 2019 sucessful for us "/ NEWS / "Gala Chorea 2019 sucessful for us</strong></marquee>
            </div>
            <div className='inner-container-main-second'>
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

                <NavLink className='nav-link-button second' to='/about-us'><strong>read more</strong></NavLink>
                <div className="video-cointainer">
                    <div className="main-overview" />
                    <img className="instagram-icon" onClick={playVideo}  alt="Instagram icon" />
                    <video className="video" ref={vidRef} >
                        <source src={BaletkaVideo} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
