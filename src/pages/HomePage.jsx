import React, { useRef, useState, Fragment } from 'react';

import { NavLink } from 'react-router-dom'

import HomePerformances from "../components/HomePerformances"
import UnderPage from "./UnderPage"
import BaletkaVideo from '../video/introVideo.mp4'
import PlayButtonImg from '../picture/video-play.svg';
import StopButtonImg from '../picture/video-stop.svg';

import { MUSICALS, BALLET_OPERA, SHOW, DANCE_THEATER } from '../data/data';

function HomePage() {
    const vidRef = useRef(null);
    let [videoHover, setVideoHover] = useState(false);
    let [videoIsPlayed, setVideoIsPlayed] = useState(false);
    
    const [selectedPerformance, setSelectedPerformance] = useState(null);
    const [performances, setPerformances] = useState([
        MUSICALS[0], MUSICALS[1], MUSICALS[2], MUSICALS[3], MUSICALS[4], MUSICALS[5], MUSICALS[6], MUSICALS[7], MUSICALS[8]
    ]);

    const handleSelectedPerformance = (performance) => {
        handleSetPerformances(performance.category)
        setSelectedPerformance(performance)
    }

    const handleSetPerformances = (categoryName) => {
        if (categoryName === 'MUSICAL') {
            setPerformances(MUSICALS)
        } else if (categoryName === 'BALLET_OPERA') {
            setPerformances(BALLET_OPERA)
        } else if (categoryName === 'SHOW') {
            setPerformances(SHOW)
        } else if (categoryName === 'DANCE_THEATER'){
            setPerformances(DANCE_THEATER)
        }
    }

    const toggleVideoHover = () => {
        setVideoHover((videoHover) => !videoHover);
    }

    const toggleVideoPlay = () => {
        if(videoIsPlayed) {
            vidRef.current.pause();
            setVideoIsPlayed(false);
        } else {
            vidRef.current.play();
            setVideoIsPlayed(true);
        }
    }

    return (
        <Fragment>
          {
            selectedPerformance == null ? (
                <div className='container-main'>
                    <div className='inner-container-main-first'>
                        <HomePerformances performances={performances} handleSelectedPerformance={handleSelectedPerformance}/>
                        <NavLink className='nav-link-button first' to='/production'><strong>view all</strong></NavLink>
                    </div>
                    <div className="container">
                        <div className="scrolling">On Monday (September 28, 2020) we started preparation for Stravinsky's evening which will combine two well-known works - Petrushka and The Firebird from the work of a Russian composer named Igor Fiodorovich Stravinsky. It is an interesting combination of modern ballet - dance, music and design. <strong style={{ color: 'red' }}> /NEWS/</strong></div>
                        <div className="scrolling">On Monday (September 28, 2020) we started preparation for Stravinsky's evening which will combine two well-known works - Petrushka and The Firebird from the work of a Russian composer named Igor Fiodorovich Stravinsky. It is an interesting combination of modern ballet - dance, music and design. <strong style={{ color: 'red' }}> /NEWS/</strong></div>
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
                        <div className="video-cointainer" onClick={toggleVideoPlay} onMouseEnter={toggleVideoHover} onMouseLeave={toggleVideoHover}>
                            {videoHover && !videoIsPlayed && <img className="button-icon play-button" src={PlayButtonImg}/>}
                            {videoHover && videoIsPlayed && <img className="button-icon stop-button" src={StopButtonImg}/>}
                            <video className="video" ref={vidRef} onEnded={() => toggleVideoPlay()}>
                                <source src={BaletkaVideo} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
                ) 
            : 
                (
                <div className='production-under-page-cointainer'>
                    <UnderPage performances={performances} indexSelectedPredstavenie={1} />
                </div>
                )
            }
        </Fragment>
    );
}

export default HomePage;
