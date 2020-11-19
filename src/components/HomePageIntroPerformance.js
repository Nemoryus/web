import React from 'react'
import { Box, Button, Grid } from '@material-ui/core';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

function HomePageIntroPerformance({ introPerformance }) {
    return (
        <Box className="intro-performance-item pos-abs fullSize">
            <TransitionGroup className="fullSize intro-performance-image-wrapper">
                <CSSTransition
                    appear={true}
                    key={`${introPerformance.id}-img`}
                    timeout={2500}
                    classNames="scale"
                >
                    <img className="fullSize pos-abs" src={require(`../picture/${introPerformance.images[0]}`)}/>
                </CSSTransition>
            </TransitionGroup>
            <Box className="overlay pos-abs"/>
            {/* <Box className="t-bold intro-performance-title-wrapper"> */}
            <TransitionGroup className="t-bold intro-performance-title-wrapper">
                <CSSTransition
                    appear={true}
                    key={`${introPerformance.id}-title`}
                    timeout={2500}
                    classNames="scale"
                >
                    <span className="pos-abs intro-performance-title">
                        {introPerformance.name}
                    </span>
                </CSSTransition>
            </TransitionGroup>
            {/* </Box> */}
        </Box>
    )
}

export default HomePageIntroPerformance
