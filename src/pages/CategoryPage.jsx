import React, { useState, useEffect, useContext, Fragment } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SvgIcon from '@material-ui/core/SvgIcon';
import ScrollToTop from '../components/ScrollToTop'

// Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { PerformancesCtx } from "./Main";

function SliderImages({ images }) {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => {
        return (
          <img key={index} className="slider-image" src={require(`../picture/${image}`)} />
        )
      })}
    </Slider>
  )
};

function SliderMenu({ performances, startedMenuPosition, handleChangeSelectedPerformance }) {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 5,
    focusOnSelect: true,
    slidesToScroll: 1,
    // variableWidth: true,
    swipeToSlide: true,
    initialSlide: startedMenuPosition,
    beforeChange: (current, next) => {
      handleChangeSelectedPerformance(performances[next])
    }
  };

  return (
    <Slider {...settings}>
      {performances.map((performance) => {
        return (
          <Box key={performance.name} className="category-menu-item t-center hand">
            <Box>{performance.name}</Box>
          </Box>
        )
      })}
    </Slider>
  )
};

function CategoryPage({ selectedPerformance, setSelectedPerformance }) {
  const { getPerformances } = useContext(PerformancesCtx);
  const performances = getPerformances(selectedPerformance.category)
  const [startedMenuPosition] = useState(selectedPerformance.id - 1)
  const [showTrailerVideo, setShowTrailerVideo] = useState(false)
  const [showTrailerVideoMini, setShowTrailerVideoMini] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleShowTrailerVideoMini)
    return function cleanupListener() {
      window.removeEventListener('scroll', handleShowTrailerVideoMini) // remove listener when leaving from the page
    }
  }, [])

  const handleShowTrailerVideoMini = () => {
    if (window.scrollY >= 1) {
      setShowTrailerVideoMini(true)
    } else {
      setShowTrailerVideoMini(false)
    }
  }

  const showProductionPage = () => {
    setSelectedPerformance(null)
  }

  const toggleShowTrailerVideo = () => {
    setShowTrailerVideo(prev => !prev)
  }

  const handleChangeSelectedPerformance = (newSelectedPerformance) => {
    setShowTrailerVideo(false) // hide trailer video
    setSelectedPerformance(newSelectedPerformance) // set new performance
  }

  return (
    <Box id="category-page">
      <ScrollToTop forceScroll={true} />
      <div className="slider-wrapper pos-rel">
        {selectedPerformance.images.length > 0 &&
          <SliderImages images={selectedPerformance.images} />
        }
        <div className="category-menu-wrapper t-white fullWidth">
          <div className="category-menu">
            <SliderMenu performances={performances} startedMenuPosition={startedMenuPosition} handleChangeSelectedPerformance={handleChangeSelectedPerformance} />
          </div>
        </div>
        {!(showTrailerVideo && showTrailerVideoMini) &&
          <Box className={`trailer-btn-wrapper pos-abs ${showTrailerVideo ? "zIndex" : ""}`}>
            <IconButton onClick={toggleShowTrailerVideo} className='btn-no-padd btn-4 fullHeight' style={{ padding: 0 }}>
              <span style={{ width: '75%' }}>TRAILER</span>
              {showTrailerVideo ? 
                  <SvgIcon style={{ fontSize: 40, width: '25%', height: '100%', color: '#FF0000', borderLeft: '2px solid #FF0000', padding: '10px' }}>
                    <CloseIcon />
                  </SvgIcon>
                :
                <SvgIcon style={{ fontSize: 100, width: '25%', height: '100%', color: '#FF0000', borderLeft: '2px solid #FF0000' }}>
                  <ArrowDropDownIcon/>
                </SvgIcon>
              }
            </IconButton>
          </Box>
        }
        {showTrailerVideo &&
          <>
            {!showTrailerVideoMini &&
              <Box className="overlay pos-abs"/>
            }
            <Box className={`trailer-video-wrapper ${showTrailerVideoMini ? "mini flex-column" : ""}`}>
              {showTrailerVideoMini &&
                <IconButton className="t-red close-btn"
                  onClick={toggleShowTrailerVideo}
                >
                  <CloseIcon />
                </IconButton>
              }
              <iframe className={`${showTrailerVideoMini ? "flex-grow fullWidth" : "fullSize"}`} src={`${selectedPerformance.trailer}?autoplay=1`}
                frameBorder='0'
                allow='autoplay; encrypted-media'
                title={`${selectedPerformance.name} - trailer`}
              />
            </Box>
          </>
        }
      </div>
      <Box className="page-content content-light padd-top padd-btm t-center">
        <p className="t-bold">
          {selectedPerformance.theaters.map((theater, index) => {
            return (
              <span key={index}>
                {theater}
                <br></br>
              </span>
            )
          })}
        </p>
        {selectedPerformance.poster !== '' &&
          <Fragment>
            <img className="push-btm-hlf push-top-dbl" src={require(`../picture/${selectedPerformance.poster}`)} />
            <span>(official poster)</span>
          </Fragment>
        }
        <h3 className='page-title padd-top-dbl'>Review</h3>
        {selectedPerformance.reviews.map((review, index) => {
          return (
            <p key={index} className="quote-block t-center push-btm-dbl">
              <q>{review.body}</q>
              <span className="t-bold push-top-hlf blc">{review.author}</span>
            </p>
          )
        })}
        <Box className='t-center padd-btm-dbl push-btm push-top-dbl'>
          <Button onClick={() => showProductionPage()} className='btn btn-1'>back</Button>
        </Box>
      </Box>
    </Box>
  );
}
export default CategoryPage;