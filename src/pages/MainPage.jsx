import React, { useRef, useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom'  

import { NavLink } from 'react-router-dom'

import MainGridLayout from "../components/MainGridLayout"
import BaletkaVideo from '../video/introVideo.mp4'
import PlayButtonImg from '../picture/video-play.svg';
import StopButtonImg from '../picture/video-stop.svg';


function MainPage() {
    const vidRef = useRef(null);
    let [hover, setHover] = useState(false);
    let [isPlayed, setIsPlayed] = useState(false);
    const styles = {
        show: {
            display: 'block'
        },
        hiden: {
            display: 'none'
        }
    };

    const hoverEnter = e => {
        if (isPlayed) {
            setHover(true);
        }
    };

    const hoverLeave = e => {
        setHover(false);
    };

    const playVideo = () => {
        vidRef.current.play();
        setIsPlayed(true);
        setHover(true);
    }

    const stopVideo = () => {
        vidRef.current.pause();
        setIsPlayed(false);
        setHover(false)
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
                <div className="video-cointainer" onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
                    <div className="main-overview" style={isPlayed ? styles.hiden : styles.show} />
                    <img className="button-icon play-button" onMouseLeave={hoverLeave} onClick={playVideo} style={isPlayed ? styles.hiden : styles.show} src={PlayButtonImg} alt="Instagram icon" />
                    <img className="button-icon stop-button" onClick={stopVideo} style={hover ? styles.show : styles.hiden} src={StopButtonImg} alt="Instagram icon" />
                    <video className="video" ref={vidRef} >
                        <source src={BaletkaVideo} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
