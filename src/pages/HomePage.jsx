import React, { memo, useRef, useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom'

import { Box, Button } from '@material-ui/core';
import HomePagePerformances from "../components/HomePagePerformances"
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import SocialIcons from '../components/SocialIcons';

import PlayButtonImg from '../picture/video-play.svg';
import StopButtonImg from '../picture/video-stop.svg';
import NewsImg from '../picture/carmen_0.jpg';
import BallerinaVideo from '../video/introVideo.mp4'

const iconSizeNews = 70;

function HomePage({ setHeaderType, selectedPerformance, setSelectedPerformance }) {
    const history = useHistory()
    const [videoHover, setVideoHover] = useState(false);
    const [videoIsPlayed, setVideoIsPlayed] = useState(false);
    const [showNews, setShowNews] = useState(false);
    const vidRef = useRef(null);

    useEffect(() => {
        setHeaderType(-1)
        setSelectedPerformance(null)
    }, [])

    useEffect(() => {
        if(selectedPerformance != null) {
            history.push("/production");
        }
    }, [history, selectedPerformance])

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
                <HomePagePerformances setSelectedPerformance={setSelectedPerformance}/>
                <Box className={`pos-abs news-section-wrapper fullHeight ${showNews ? "active" : ""}`}>
                    <Box className="fullSize news-img pos-abs">
                        <img className="fullSize" src={NewsImg}/>
                        <Box className="overlay pos-abs"/>
                    </Box>
                    <Box className="pos-rel fullHeight news-container-wrapper">
                        <Box className="news-btn-wrapper pos-abs news-container">
                            <span className="news-vertical-line t-red"></span>
                            <Box className="pos-abs t-bold news-btn">
                                <Box className="pos-rel flex-row">
                                    <span className="news-btn-text t-white">News</span>
                                    <Box className="news-btn-arrow" onClick={toggleShowNews}>
                                        {showNews ? 
                                            <IconButton className="t-red no-padd">
                                                <SvgIcon style={{ fontSize: iconSizeNews }}>
                                                    <ArrowLeftIcon />
                                                </SvgIcon>
                                            </IconButton>
                                            :
                                            <IconButton className="t-red no-padd">
                                                <SvgIcon style={{ fontSize: iconSizeNews }}>
                                                    <ArrowRightIcon />
                                                </SvgIcon>
                                            </IconButton>
                                        }
                                    </Box>
                                    <Button className="btn btn-2 news-btn-name" onClick={toggleShowNews}><span className="t-fancy">Monte Christo</span></Button>
                                </Box>
                            </Box>
                        </Box>
                        <Box className="news-container news-content-wrapper overflow pos-rel">
                            <Box className="news-content pos-abs push-btm-dbl">
                                <h3 className="news-header">CARMEN</h3>
                                <p className="push-btm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eros purus, ornare eget leo nec, ultrices sagittis velit. Donec ut dolor urna. Etiam dapibus ipsum et ante sollicitudin, at porta ligula tempor. Mauris sed elit sem. Ut leo ante, vehicula in semper nec, facilisis ac massa. Vivamus sit amet imperdiet diam, vitae eleifend est. Maecenas tincidunt lacus sit amet dolor tempus, vitae volutpat sapien tempor.
                                </p>
                            </Box>
                            <Box className="pos-abs news-follow-us-wrapper t-red fullHeight">
                                <Box className="news-follow-us t-bold t-white">
                                    Follow us
                                </Box>
                                <span className="news-vertical-line push-top-hlf push-btm-hlf"></span>
                                <SocialIcons />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
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
