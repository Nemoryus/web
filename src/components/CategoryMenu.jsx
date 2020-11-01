import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

export default function CategoryMenu({ performances, selectedPerformance, setSelectedPerformance}) {
    const countItems = 5; // count shown items in carousel
    const countOfSidesItems = (countItems - 1)/2; 
    const middleIndex = Math.floor(performances.length/2); 
    const [carouselItems, setCarouselItems] = useState([...performances]);

    useEffect(() => {
        // set started carousel items 
        let countMoves = getSelectedPerformanceIndex() - middleIndex; 
        let tmpArray = [...carouselItems]
        if(countMoves < 0) {
            for(let i = countMoves; i < 0; i++) {
                moveCarouselItem(tmpArray, true)
            }
        } else {
            for(let i = 0; i < countMoves; i++) {
                moveCarouselItem(tmpArray, false)
            }
        }
        setCarouselItems(tmpArray)
    }, [])

    // Method moves item in array carouselItems in 2 ways:
    //  - cut item from the end of array and prepend it to the begging of array
    //  - cut item from the begging of array and append it to the end of array
    const moveCarouselItem = (array, isFirstType) => {
        if(isFirstType) {
            let lastItem = array.pop();
            array.unshift(lastItem);
        } else {
            let firstItem = array.shift();
            array.push(firstItem);
        }
    }

    // id of selected properties is always increment by one as an index.
    const getSelectedPerformanceIndex = () => {
        return selectedPerformance.id - 1
    }
    
    const goLeft = () => {
        let tmpArray = [...carouselItems]
        moveCarouselItem(tmpArray, true)
        setCarouselItems(tmpArray)
        handleSetSelectedPerformance(-1)
    }
    
    const goRight = () => {
        let tmpArray = [...carouselItems]
        moveCarouselItem(tmpArray, false)
        setCarouselItems(tmpArray)
        handleSetSelectedPerformance(1)
    }
    
    const handleSetSelectedPerformance = (addend) => {
        if(addend < 0 && getSelectedPerformanceIndex() == 0) {
            // set last item
            setSelectedPerformance(performances[performances.length - 1])
        } else if(addend > 0 && getSelectedPerformanceIndex() == performances.length - 1) {
            // set first item
            setSelectedPerformance(performances[0])
        } else {
            // set side item
            setSelectedPerformance(performances[getSelectedPerformanceIndex() + addend])
        }

    }

    return (
        <Grid container className="category-menu t-center t-white" justify="center" alignItems="center">
            {carouselItems.map((item, index) => {
                return (
                    (index >= (middleIndex - countOfSidesItems) && index <= (middleIndex + countOfSidesItems)) &&
                    <Grid key={index} item xs={index == middleIndex ? 4 : 2} className={index == middleIndex ? "selected" : ""}>
                        {index == middleIndex && 
                            <IconButton className="t-white" onClick={() => goLeft(true)}>
                                <SvgIcon fontSize='large'>
                                    <ArrowLeftIcon />
                                </SvgIcon>
                            </IconButton>
                        }
                        {item.name}
                        {index == middleIndex && 
                            <IconButton className="t-white" onClick={() => goRight(true)}>
                                <SvgIcon fontSize='large'>
                                    <ArrowRightIcon />
                                </SvgIcon>
                            </IconButton>
                        }
                    </Grid>
                )
            })}
        </Grid>
    );
}

