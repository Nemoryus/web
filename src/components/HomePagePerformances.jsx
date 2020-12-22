import React, { memo, useState, useContext, useEffect } from 'react'
import { Box } from '@material-ui/core';
import HomePagePerformancesItem from "./HomePagePerformancesItem";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { PerformancesCtx } from "../pages/Main";

function PrevArrow({ className, style, onClick, moveBackward }) {

    const handleOnClick = () => {
        onClick()
        moveBackward()
    }

    return (
      <div
        className={className}
        style={style}
        onClick={handleOnClick}
      />
    );
}

function NextArrow({ className, style, onClick, moveForward }) {

    const handleOnClick = () => {
        onClick()
        moveForward()
    }

    return (
      <div
        className={className}
        style={style}
        onClick={handleOnClick}
      />
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
    const [forward, setForward] = useState(true)

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
        nextArrow: <NextArrow moveForward={moveForward} />,
        prevArrow: <PrevArrow moveBackward={moveBackward} />,
        beforeChange: (current, next) => {
            if((current == 8 && next == 0) || (current < next && (current != 0 || next != 8))) {
                // hide current performance
                let sliderWrapper = document.getElementsByClassName('slider-performances')[0]
                sliderWrapper.querySelectorAll("[data-index='" +  current + "']")[0].style.opacity = 0;
            }
        },
        afterChange: (current) => {
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
                    <Box key={performance.name} className="pos-rel center hand" onClick={() => setSelectedPerformance(performance)}>
                        <img className="fullWidth" src={require(`../picture/${performance.poster}`)}/>
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
