import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom';

export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

function ScrollToTop({ history, children, forceScroll }) {
    useEffect(() => {
        if(forceScroll) {
            scrollToTop();
        }

        const unlisten = history.listen(() => {
            scrollToTop()
        });
        return () => {
            if(forceScroll) {
                scrollToTop();
            }
            unlisten();
        }
    }, [history, forceScroll])

    return (
        <>
            {children}
        </>
    )
}

export default withRouter(ScrollToTop);