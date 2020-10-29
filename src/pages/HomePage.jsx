import React, { useRef, useState, Fragment } from 'react';
import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom'

import HomePerformances from "../components/HomePerformances"
import CategoryPage from "./CategoryPage"
import BaletkaVideo from '../video/introVideo.mp4'
//img
import PlayButtonImg from '../picture/video-play.svg';
import StopButtonImg from '../picture/video-stop.svg';
import SipkaImg from '../picture/sipka.svg';
import SocialIcons from '../components/SocialIcons';
import BaletkaImg from '../picture/baletka.jpg';


import { MUSICALS, BALLET_OPERA, SHOW, DANCE_THEATER } from '../data/data';

function HomePage() {
    const vidRef = useRef(null);
    let [videoHover, setVideoHover] = useState(false);
    let [videoIsPlayed, setVideoIsPlayed] = useState(false);
    let [show, setShow] = useState(false);

    // performances useStates
    const [selectedPerformance, setSelectedPerformance] = useState(null);
    const [performances, setPerformances] = useState([
        MUSICALS[0], MUSICALS[1], MUSICALS[2], MUSICALS[3], MUSICALS[4], MUSICALS[5], MUSICALS[6], MUSICALS[7], MUSICALS[8]
    ]);

    const styles = {
        showGrid: {
            left: '0%'
        },
        hidenGrid: {
            left: '-120%'
        },
        show: {
            zIndex: 0
        },
        hiden: {
            zIndex: -200
        },

        backGroundWithBlurEfect: {
            // filter:'blur(40px)',
            // backgroundImage: `url(${BaletkaImg})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        },
        backGroundWithoutBlurEfect: {
            // backgroundImage: filter(largeimg.jpg), blur(20px));
            filter: 'none',
            // backgroundImage: `url(${BaletkaImg})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        },

    }

    const toggleShowGrid = () => {
        setShow((show) => !show);
    }

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
        } else if (categoryName === 'DANCE_THEATER') {
            setPerformances(DANCE_THEATER)
        }
    }

    const toggleVideoHover = () => {
        setVideoHover((videoHover) => !videoHover);
    }

    const toggleVideoPlay = () => {
        if (videoIsPlayed) {
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
                    <div className='container-home'>
                        <div className='inner-container-home-first padd-top pos-rel' style={styles.backGroundWithBlurEfect}>
                            <img className={'baletka-img pos-abs-00 ' + (show ? "whitBlur" : "whithoutBlur")} width='100%' max-height='100%' src={BaletkaImg}></img>
                            <Box className="main-grid-wrapper pos-rel" display="flex" justifyContent="space-between" >
                                <Box className='width-small flex-row' onClick={toggleShowGrid}>
                                    <Box className="fullHeight flex-column">
                                        <Box className='vertical-line-red hight-25 center' />
                                        <Box className='center hight-50' >
                                            <Box className='rotated-270 flex-column center' >
                                                <span className='home-page-span font-size-20'>PRODUCTION</span>
                                            </Box>
                                        </Box>
                                        <Box className='vertical-line-red hight-25 center' />
                                    </Box>
                                    <Box className='pos-rel'>
                                        <img style={show ? styles.hiden : styles.show} className='arrow-image pos-abs' src={SipkaImg} width="40" />
                                    </Box>

                                </Box>
                                <Box className='grid-section pos-rel fullHeight width-bigg ' >
                                    <Box className='grid-wraper pos-abs fullWidth fullHeight push-top' style={show ? styles.showGrid : styles.hidenGrid}>
                                        <HomePerformances performances={performances} handleSelectedPerformance={handleSelectedPerformance} />
                                    </Box>
                                </Box>
                                <Box className='width-small fullHeight flex-column'>
                                    <Box className='hight-33'>
                                        <p className="vericaltext t-red center">
                                            FOLLOW US
                                        </p>
                                    </Box>
                                    <Box className='vertical-line-wrapper hight-33 push-top-hlf'>
                                        <Box className='vertical-line-red fullHeight fullWidth' />
                                    </Box>
                                    <Box className='hight-33 width-45px center padd-top'>
                                        <SocialIcons />
                                    </Box>
                                </Box>
                            </Box>
                            <Box className='home-button-view-all t-center padd-btm-dbl push-btm push-top-dbl'>
                                <Button className='btn btn-3 center' component={NavLink} style={show ? styles.show : styles.hiden} to='/production'>view all</Button>
                            </Box>
                            <div className="container">
                                <div className="scrolling">On Monday (September 28, 2020) we started preparation for Stravinsky's evening which will combine two well-known works - Petrushka and The Firebird from the work of a Russian composer named Igor Fiodorovich Stravinsky. It is an interesting combination of modern ballet - dance, music and design. <strong style={{ color: 'red' }}> /NEWS/</strong></div>
                                <div className="scrolling">On Monday (September 28, 2020) we started preparation for Stravinsky's evening which will combine two well-known works - Petrushka and The Firebird from the work of a Russian composer named Igor Fiodorovich Stravinsky. It is an interesting combination of modern ballet - dance, music and design. <strong style={{ color: 'red' }}> /NEWS/</strong></div>
                            </div>
                        </div>
                        <div className='inner-container-home-second'>
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
                            <Box className='home-button-view-all t-center padd-btm-dbl push-btm push-top-dbl'>
                                <Button className='btn btn-3 center' component={NavLink} style={show ? styles.show : styles.hiden} to='/about-us'>view all</Button>
                            </Box>
                            <div className="video-cointainer" onClick={toggleVideoPlay} onMouseEnter={toggleVideoHover} onMouseLeave={toggleVideoHover}>
                                {videoHover && !videoIsPlayed && <img className="button-icon play-button" src={PlayButtonImg} />}
                                {videoHover && videoIsPlayed && <img className="button-icon stop-button" src={StopButtonImg} />}
                                <video className="video" ref={vidRef} onEnded={() => toggleVideoPlay()}>
                                    <source src={BaletkaVideo} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                )
            :
                (
                    <CategoryPage performances={performances} indexSelectedPredstavenie={1} />
                )
            }
        </Fragment>
    );
}

export default HomePage;
