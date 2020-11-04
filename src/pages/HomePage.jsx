import React, { useRef, useEffect, useState, useContext, Fragment } from 'react';
import { NavLink, useHistory } from 'react-router-dom'
import { Box, Button } from '@material-ui/core';

import HomePerformances from "../components/HomePerformances"
import BaletkaVideo from '../video/introVideo.mp4'

import PlayButtonImg from '../picture/video-play.svg';
import StopButtonImg from '../picture/video-stop.svg';
import SocialIcons from '../components/SocialIcons';
import BaletkaImg from '../picture/baletka.jpg';

import { PerformancesCtx } from "./Main";

function HomePage({ setHeaderType, selectedPerformance, setSelectedPerformance }) {
    const history = useHistory()
    const { getPerformances } = useContext(PerformancesCtx);
    const [videoHover, setVideoHover] = useState(false);
    const [videoIsPlayed, setVideoIsPlayed] = useState(false);
    const [show, setShow] = useState(false);
    const vidRef = useRef(null);

    // performances useStates
    const performances = [...getPerformances('MUSICALS')];

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
        },
        hiden: {
            zIndex: -200,
        },
    }

    useEffect(() => {
        setHeaderType(-1)
    }, [])

    useEffect(() => {
        if(selectedPerformance != null) {
            history.push("/production");
        }
    }, [selectedPerformance])

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
        <div id="home-page" className='content-dark padd-btm-dbl'>
            <div className='content-padd-top pos-rel padd-btm-dbl' style={styles.backGroundWithBlurEfect}>
                <img className={'baletka-img pos-abs-00 ' + (show ? "whitBlur" : "whithoutBlur")} width='100%' max-height='100%' src={BaletkaImg}></img>
                <Box className="main-grid-wrapper pos-rel" display="flex" justifyContent="space-between">
                    <Box className='width-small flex-row'>
                        <Box className="fullHeight flex-column">
                            <Box className='vertical-line-red hight-25 center'/>
                            <Box className='center hight-50'>
                                <Box className='rotated-270 flex-column center'>
                                    <span className='home-page-span font-size-20 letter-s t-red'>PRODUCTION</span>
                                </Box>
                            </Box>
                            <Box className='vertical-line-red hight-25 center'/>
                        </Box>
                        <Box className='pos-rel fullHeight'>
                            <Box className={'pos-abs arrow-img-wrapper'+(show ? "-leftBorder" : "-rightBorder")} onClick={toggleShowGrid}>
                            {show ? <Box className='arrow arrow-left'/> : <Box className='arrow arrow-right'/>}
                            </Box>
                        </Box>
                    </Box>
                    <Box className='grid-section pos-rel fullHeight width-big'>
                        <Box className='grid-wraper pos-abs fullSize push-top' style={show ? styles.showGrid : styles.hidenGrid}>
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
                            <Box className='vertical-line-red fullSize'/>
                        </Box>
                        <Box className='home-social-icon-wrapper hight-33 fullWidth padd-top-dbl'>
                            <SocialIcons />
                        </Box>
                    </Box>
                </Box>
                <Box className='t-center push-top push-btm'>
                    <Button className='btn btn-3' component={NavLink} style={show ? styles.show : styles.hiden} to='/production'>view all</Button>
                </Box>
                <div className="container">
                    <div className="scrolling">On Monday (September 28, 2020) we started preparation for Stravinsky's evening which will combine two well-known works - Petrushka and The Firebird from the work of a Russian composer named Igor Fiodorovich Stravinsky. It is an interesting combination of modern ballet - dance, music and design. <strong style={{ color: 'red' }}> /NEWS/</strong></div>
                    <div className="scrolling">On Monday (September 28, 2020) we started preparation for Stravinsky's evening which will combine two well-known works - Petrushka and The Firebird from the work of a Russian composer named Igor Fiodorovich Stravinsky. It is an interesting combination of modern ballet - dance, music and design. <strong style={{ color: 'red' }}> /NEWS/</strong></div>
                </div>
            </div>
            <Box className="page-content">
                <h4 className="page-title padd-top-dbl">ABOUT US</h4>
                <p className="page-title-text push-btm push-top padd-btm-hlf padd-top-hlf">
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
                <Box className='t-center padd-btm-dbl push-btm push-top-dbl'>
                    <Button component={NavLink} className='btn btn-2' to='/about-us'>enter</Button>
                </Box>
                <div className="video-cointainer pos-rel padd-btm push-btm" onClick={toggleVideoPlay} onMouseEnter={toggleVideoHover} onMouseLeave={toggleVideoHover}>
                    {!videoIsPlayed && 
                        <div className='overlay pos-abs'>
                            <img className="middle button-icon play-button" src={PlayButtonImg} />
                        </div>
                    }
                    {videoHover && videoIsPlayed && <img className="middle button-icon stop-button" src={StopButtonImg} />}
                    <video className="fullSize" ref={vidRef} onEnded={() => toggleVideoPlay()}>
                        <source src={BaletkaVideo} type="video/mp4" />
                    </video>
                </div>
            </Box>
        </div>
    );
}

export default HomePage;
