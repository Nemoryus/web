import React, { memo, useRef, useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom'

import { Box, Button, Grid } from '@material-ui/core';
import HomePagePerformances from "../components/HomePagePerformances"
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import HomePerformances from "../components/HomePerformances"
import SocialIcons from '../components/SocialIcons';

import PlayButtonImg from '../picture/video-play.svg';
import StopButtonImg from '../picture/video-stop.svg';
import NewsImg from '../picture/carmen_0.jpg';
import BallerinaVideo from '../video/introVideo.mp4'

function HomePage({ setHeaderType, selectedPerformance, setSelectedPerformance }) {
    // const history = useHistory()
    const [videoHover, setVideoHover] = useState(false);
    const [videoIsPlayed, setVideoIsPlayed] = useState(false);
    const [showNews, setShowNews] = useState(false);
    const vidRef = useRef(null);

    useEffect(() => {
        setHeaderType(-1)
    }, [])

    // useEffect(() => {
    //     if(selectedPerformance != null) {
    //         history.push("/production");
    //     }
    // }, [history, selectedPerformance])

    const toggleShowNews = () => {
        setShowNews((showNews) => !showNews); 
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
            <Box className="intro-section-wrapper overflow pos-rel">
                <Box>
                    <HomePagePerformances />
                </Box>
                <Box className={`pos-abs news-section-wrapper fullSize ${showNews ? "active" : ""}`}>
                    <Box className="fullSize news-img pos-abs">
                        <Box className="overlay pos-abs"/>
                        <img className="fullSize" src={NewsImg}/>
                    </Box>
                    <Box className="pos-rel fullSize">
                        <Grid container className="news-container pos-rel" justify="center">
                            <Grid item xs={1}>
                                <Box className="news-btn-wrapper t-red fullSize">
                                    <span className="intro-vertical-line push-btm"></span>
                                    <Box className="pos-rel t-bold">
                                        <span className="news-btn t-white">News</span>
                                        <Box className="news-btn-arrow pos-abs">
                                            {showNews ? 
                                                <IconButton className="t-red no-padd" onClick={toggleShowNews}>
                                                    <SvgIcon style={{ fontSize: 70 }}>
                                                        <ArrowLeftIcon />
                                                    </SvgIcon>
                                                </IconButton>
                                                :
                                                <IconButton className="t-red no-padd" onClick={toggleShowNews}>
                                                    <SvgIcon style={{ fontSize: 70 }}>
                                                        <ArrowRightIcon />
                                                    </SvgIcon>
                                                </IconButton>
                                            }
                                        </Box>
                                    </Box>
                                    <span className="intro-vertical-line push-top"></span>
                                </Box>
                            </Grid>
                            <Grid item xs={11} className="overflow fullHeight pos-rel">
                                <Box className="pos-abs news-content push-btm-dbl">
                                    <h3 className="news-header">CARMEN</h3>
                                    <p className="push-btm">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eros purus, ornare eget leo nec, ultrices sagittis velit. Donec ut dolor urna. Etiam dapibus ipsum et ante sollicitudin, at porta ligula tempor. Mauris sed elit sem. Ut leo ante, vehicula in semper nec, facilisis ac massa. Vivamus sit amet imperdiet diam, vitae eleifend est. Maecenas tincidunt lacus sit amet dolor tempus, vitae volutpat sapien tempor.
                                    </p>
                                </Box>
                                <Box className="pos-abs news-follow-us-wrapper t-red fullHeight">
                                    <Box className="news-follow-us t-bold t-white">
                                        Follow us
                                    </Box>
                                    <span className="intro-vertical-line push-top-hlf push-btm-hlf"></span>
                                    <SocialIcons />
                                </Box>
                            </Grid>
                        </Grid>    
                    </Box>
                </Box>
            </Box>
            {/* <Box className="pos-abs news-wrapper">
                <img className="production-section-img" src={BallerinaImg}/>
                <Box className="pos-abs production-section content-padd-top fullSize">
                    <Box className="pos-rel fullSize">
                        <Grid container className="padd-btm production-wrapper pos-rel" justify="center">
                            <Grid item xs={1} className="production-side-wrapper">
                                <Box className="production-btn-wrapper padd-btm t-red fullSize">
                                    <span className="production-line push-btm"></span>
                                    <Box className="pos-rel t-bold">
                                        <span className="production-btn">Production</span>
                                        <Box className="production-btn-arrow pos-abs">
                                            {showNews ? 
                                                <IconButton className="t-red no-padd" onClick={toggleShowNews}>
                                                    <SvgIcon style={{ fontSize: 70 }}>
                                                        <ArrowLeftIcon />
                                                    </SvgIcon>
                                                </IconButton>
                                                :
                                                <IconButton className="t-red no-padd" onClick={toggleShowNews}>
                                                    <SvgIcon style={{ fontSize: 70 }}>
                                                        <ArrowRightIcon />
                                                    </SvgIcon>
                                                </IconButton>
                                            }
                                        </Box>
                                    </Box>
                                    <span className="production-line push-top"></span>
                                </Box>
                            </Grid>
                            <Grid item xs={10} className="overflow fullHeight">
                                <Box className={`pos-rel production-performances-wrapper ${showPerformances ? "active" : ""}`}>
                                    <HomePerformances performances={performances} setSelectedPerformance={setSelectedPerformance} />
                                    <Box className='t-center push-top'>
                                        <Button className='btn btn-3' component={NavLink} to='/production'>view all</Button>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={1} className="production-side-wrapper">
                                <Box className="production-follow-us-wrapper padd-btm t-red fullSize">
                                    <Box className="production-follow-us t-bold">
                                        Follow us
                                    </Box>
                                    <span className="production-line push-top-hlf push-btm-hlf"></span>
                                    <SocialIcons />
                                </Box>
                            </Grid>
                        </Grid>    
                    </Box>
                </Box>
            </Box> */}
            <Box className="page-content padd-top">
                <h4 className="page-title padd-top-dbl">About us</h4>
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
                <div className="video-container pos-rel padd-btm push-btm" onClick={toggleVideoPlay} onMouseEnter={toggleVideoHover} onMouseLeave={toggleVideoHover}>
                    {!videoIsPlayed && 
                        <>
                            <div className='overlay pos-abs'/>
                            <img className="middle button-icon play-button" src={PlayButtonImg} />
                        </>
                    }
                    {videoHover && videoIsPlayed && <img className="middle button-icon stop-button" src={StopButtonImg} />}
                    <video className="fullSize" ref={vidRef} onEnded={() => toggleVideoPlay()}>
                        <source src={BallerinaVideo} type="video/mp4" />
                    </video>
                </div>
            </Box>
        </div>
    );
}

export default memo(HomePage);
