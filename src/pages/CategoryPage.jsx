import React, { useState, useEffect, useContext, Fragment } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

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
          <img key={index} className="slider-image" src={require(`../picture/${image}`)}/>
        )
      })}
    </Slider>
  )
};

function SliderMenu({ performances, startedMenuPosition, setSelectedPerformance }) {
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
      setSelectedPerformance(performances[next])
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

  useEffect(() => {
    window.scrollTo(0, 0) // at the beginning go to top of the page
  }, [])

  const showProductionPage = () => {
    window.scrollTo(0, 0) // on click to back to production go to top of the page
    setSelectedPerformance(null)
  }

  return (
    <Box id="category-page">
      <div className="slider-wrapper">
        {selectedPerformance.images.length > 0 &&
          <SliderImages images={selectedPerformance.images}/>
        }
        <div className="category-menu-wrapper t-white fullWidth">
          <div className="category-menu">
            <SliderMenu performances={performances} startedMenuPosition={startedMenuPosition} setSelectedPerformance={setSelectedPerformance}/>
          </div>
        </div>
      </div>

      <Box className="page-content content-light padd-top padd-btm t-center">
        <p className="bold">{selectedPerformance.additionalData.info}<br></br>{selectedPerformance.additionalData.note}</p>
        {selectedPerformance.poster != '' &&
          <Fragment>
            <img className="push-btm-hlf push-top-dbl" src={require(`../picture/${selectedPerformance.poster}`)}/>
            <span>(official poster)</span>
          </Fragment>
        }
        <h3 className='page-title padd-top-dbl'>Review</h3>
        {selectedPerformance.reviews.map((review, index) => {
          return (
            <p key={index} className="quote-block t-center push-btm-dbl">
              <q>{review.body}</q>
              <span className="bold push-top-hlf blc">{review.author}</span>
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