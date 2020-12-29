import React, { memo, useState, useContext, useEffect } from 'react'
import { Box } from '@material-ui/core';
import HomePagePerformancesItem from "./HomePagePerformancesItem";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import { PerformancesCtx } from "../pages/Main";

function PrevArrow({ onClick, enabledButtons, moveBackward }) {

    const handleOnClick = () => {
        if(enabledButtons) {
            onClick()
            moveBackward()
        }
    }

    return (
        <IconButton className={`btn btn-3 no-padd slick-arrow slick-prev-arrow ${enabledButtons ? "" : "disabled"}`} onClick={handleOnClick}>
            <KeyboardArrowRightIcon/>
        </IconButton>
    );
}

function NextArrow({ onClick, enabledButtons, moveForward }) {

    const handleOnClick = () => {
        if(enabledButtons) {
            onClick()
            moveForward()
        }
    }

    return (
        <IconButton className={`btn btn-3 no-padd slick-arrow slick-next-arrow ${enabledButtons ? "" : "disabled"}`} onClick={handleOnClick}>
            <KeyboardArrowRightIcon/>
        </IconButton>
    );
}

function SliderPerformances({ 
        performances, 
        isActivePerformanceA, 
        setUseAnimation, 
        setPerformanceA, 
        setPerformanceB, 
        moveForward, 
        moveBackward,
        setSelectedPerformance 
    }) {
    const [enabledButtons, setEnabledButtons] = useState(true)

    const settings = {
        className: "fullHeight",
        arrows: true,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        pauseOnHover: false,
        nextArrow: <NextArrow enabledButtons={enabledButtons} moveForward={moveForward} />,
        prevArrow: <PrevArrow enabledButtons={enabledButtons} moveBackward={moveBackward} />,
        beforeChange: (current, next) => {
            setEnabledButtons(false)
            if((current === performances.length - 1 && next === 0) || (current < next && (current !== 0 || next !== performances.length - 1))) {
                // hide current performance
                let sliderWrapper = document.getElementsByClassName('slider-performances')[0]
                sliderWrapper.querySelectorAll("[data-index='" +  current + "']")[0].style.opacity = 0;
            }
        },
        afterChange: (current) => {
            setEnabledButtons(true)
            if(document.getElementsByClassName('performances-item').length === 1 || isActivePerformanceA()) {
                setPerformanceB(performances[current])
            } else {
                setUseAnimation(true)
                setPerformanceA(performances[current])
            }

            // show previously hidden performance
            let prevIndex = getIndex(performances.length, current, -1)
            let sliderWrapper = document.getElementsByClassName('slider-performances')[0]
            sliderWrapper.querySelectorAll("[data-index='" +  prevIndex + "']")[0].style.opacity = 1
        }
    };

    return (
        <Slider {...settings}>
            {performances.map((performance) => {
                return (
                    <Box key={performance.name} className="slicker-item pos-rel center hand" onClick={() => setSelectedPerformance(performance)}>
                        <img className="fullWidth" src={require(`../picture/${performance.poster}`)}/>
                        <Box className="slicker-item-name t-center t-bold">
                            {performance.name}
                        </Box>
                    </Box>
                )
            })}
        </Slider>
    )
};

function HomePagePerformances({ setSelectedPerformance }) {
    const { getPerformances } = useContext(PerformancesCtx);
    const performances = [...getPerformances('MUSICALS')];
    const [performanceA, setPerformanceA] = useState(performances[performances.length - 1]);
    const [performanceB, setPerformanceB] = useState(null);
    const [useAnimation, setUseAnimation] = useState(false);

    useEffect(() => {
        const autoplayTimer = setTimeout(() => {
            setPerformanceB(performances[0])
        }, 2000);
        return () => clearTimeout(autoplayTimer);
    }, [])
    
    /*
     * Active performance is performance in forward
     */
    const isActivePerformanceA = () => {
        if(performanceB === null) {
            return true;
        }
        if(performanceA.id === performances.length && performanceB.id === 1) {
            return false
        }
        if(performanceA.id === 1 && performanceB.id === performances.length) {
            return true;
        }
        if(performanceA.id > performanceB.id) {
            return true
        } else {
            return false
        }
    }

    const moveForward = () => {
        setUseAnimation(false)
        let nextPerformanceIndex;
        if(isActivePerformanceA()) {
            nextPerformanceIndex = getIndex(performances.length, performanceA.id, -1)
        } else {
            nextPerformanceIndex = getIndex(performances.length, performanceB.id, -1)
        }
        setPerformanceA(performances[nextPerformanceIndex])
        setPerformanceB(null)
    }

    const moveBackward = () => {
        setUseAnimation(false)
        let prevPerformanceIndex;
        if(isActivePerformanceA()) {
            prevPerformanceIndex = getIndex(performances.length, performanceA.id, -3)
        } else {
            prevPerformanceIndex = getIndex(performances.length, performanceB.id, -3)
        }
        setPerformanceA(performances[prevPerformanceIndex])
        setPerformanceB(null)
    }

    return (
        <Box className="performances-wrapper fullSize pos-rel">
            <HomePagePerformancesItem performance={performanceA} setSelectedPerformance={setSelectedPerformance} useAnimation={useAnimation} />
            {performanceB && 
                <HomePagePerformancesItem performance={performanceB} setSelectedPerformance={setSelectedPerformance} useAnimation={true} />
            }
            <Box className="slider-performances pos-abs">
                <SliderPerformances 
                    performances={performances}
                    isActivePerformanceA={isActivePerformanceA}
                    setUseAnimation={setUseAnimation}
                    setPerformanceA={setPerformanceA}
                    setPerformanceB={setPerformanceB}
                    moveForward={moveForward}
                    moveBackward={moveBackward}
                    setSelectedPerformance={setSelectedPerformance}
                />
            </Box>
        </Box>
    )
}

const getIndex = (totalCount, num, addNumber) => {
    let tmp = num + (addNumber)
    if(tmp < 0) {
        tmp = totalCount + (tmp)
    }
    return tmp;
}

export default memo(HomePagePerformances)
