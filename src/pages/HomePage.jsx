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


import { getPerformances } from '../data/constans'
import { MUSICALS } from '../data/data';

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
        arrowRotate0: {
            transform: 'rotate(0deg)'
        },
        arrowRotate180: {
            transform: 'rotate(180deg)'
        },
        show: {
            zIndex: 0,
            transform: 'translate(30%)'
        },
        hiden: {
            zIndex: -200,
            transform: 'translate(30%)'
        },

    }

    const toggleShowGrid = () => {
        setShow((show) => !show);
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
                        <div className='inner-container-home-first  pos-rel padd-btm-dbl' style={styles.backGroundWithBlurEfect}>
                            <img className={'baletka-img pos-abs-00 ' + (show ? "whitBlur" : "whithoutBlur")} width='100%' max-height='100%' src={BaletkaImg}></img>
                            <Box className="main-grid-wrapper pos-rel" display="flex" justifyContent="space-between" >
                                <Box className='width-small flex-row'>
                                    <Box className="fullHeight flex-column">
                                        <Box className='vertical-line-red hight-25 center' />
                                        <Box className='center hight-50' >
                                            <Box className='rotated-270 flex-column center' >
                                                <span className='home-page-span font-size-20 letter-s t-red'>PRODUCTION</span>
                                            </Box>
                                        </Box>
                                        <Box className='vertical-line-red hight-25 center' />
                                    </Box>
                                    <Box className='pos-rel fullHeight'>
                                        <Box className={'pos-abs arrow-img-wrapper' + (show ? "-leftBorder" : "-rightBorder")} onClick={toggleShowGrid}>
                                        {show ? <Box className='arrow arrow-left'/> : <Box className='arrow arrow-right'/>}
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className='grid-section pos-rel fullHeight width-bigg ' >
                                    <Box className='grid-wraper pos-abs fullWidth fullHeight push-top' style={show ? styles.showGrid : styles.hidenGrid}>
                                        <HomePerformances performances={performances} setSelectedPerformance={setSelectedPerformance} />
                                    </Box>
                                </Box>
                                <Box className='width-small fullHeight flex-column'>
                                    <Box className='follow-us-wrapper hight-33'>
                                        <p className="vericaltext t-red center bold">
                                            FOLLOW US
                                        </p>
                                    </Box>
                                    <Box className='vertical-line-wrapper hight-33 padd-top'>
                                        <Box className='vertical-line-red fullHeight fullWidth' />
                                    </Box>
                                    <Box className='home-social-icon-wrapper hight-33 fullWidth padd-top-dbl'>
                                        <SocialIcons />
                                    </Box>
                                </Box>
                            </Box>
                            <Box className='home-button-view-all t-center push-top push-btm'>
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
                            <Box className='t-center push-top push-btm-dbl'>
                                <Button className='btn btn-2 center' component={NavLink} to='/about-us'>enter</Button>
                            </Box>
                            <div className="video-cointainer pos-rel" onClick={toggleVideoPlay} onMouseEnter={toggleVideoHover} onMouseLeave={toggleVideoHover}>
                                {!videoIsPlayed && 
                                    <div className='overlay pos-abs'>
                                        <img className="button-icon play-button" src={PlayButtonImg} />
                                    </div>
                                }
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
                        <CategoryPage selectedPerformance={selectedPerformance} setSelectedPerformance={setSelectedPerformance} />
                    )
            }
        </Fragment>
    );
}

export default HomePage;
