import React, { memo, useEffect } from "react";

import Link from '@material-ui/core/Link';
import Box from "@material-ui/core/Box";
import ProfilPicture from '../picture/profilPicutre.png'
import ProfilPicture2 from '../picture/profilPicture2.png'
import { Text } from '../containers/Language';

function AboutUsPage({ setHeaderType, setSelectedPerformance }) {

    useEffect(() => {
        setHeaderType(1)
        setSelectedPerformance(null)
    }, [])

    return(
        <Box id="about-us-page" className="content-light content-padd-top padd-btm-dbl">
            <h3 className='page-title push-top-dbl padd-top-dbl'><Text tid="aboutUs"/></h3>
            <p className='page-title-text push-btm push-top padd-btm-hlf padd-top-hlf'>
                Lorem ipsum dolor sit amet, consectetuer 
                adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet dolore magna 
                aliquam erat volutpat. Ut wisi enim ad
                minim veniam, quis nostrud exerci tation 
                ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem 
                vel eum iriure dolor in hendrerit in 
                vulputate velit esse molestie consequat,
                vel illum dolore eu feugiat nulla facilisis
                at vero eros et accumsan et iusto odio
                dignissim qui blandit praesent luptatum 
                zzril delenit augue duis dolore te feugait
                nulla facilisi.
            </p>
            <Box className="page-content t-center">
                <img src={ProfilPicture2}/>
                <h1>JÁN ĎUROVČÍK</h1>
                <img src={ProfilPicture}/>
                <p className='page-content-text push-top push-btm-hlf'>
                    Has studied choreography at the Academy 
                    of Music and Dramatic Arts (VŠMU) in 
                    Bratislava under the direction of 
                    professor Štefan Nosáľ and at the
                    Institute for Dance and Dance Instruction 
                    in Belgian Antwerp. Later on, he acquired 
                    job as the solo dancer in the H.F.
                    Dansetheatre Amsterdam and was teaching 
                    modern dance at the International Dance 
                    Stage Bornem in Belgium.
                </p>
            </Box>
            <Box className='t-center padd-btm push-btm push-top-dbl'>
                <Link className='btn btn-1' rel="noreferrer" target="_blank" href="http://www.jandurovcik.com/en/biography-gallery" >
                    view all
                </Link>
            </Box>
        </Box>
    );   
}
export default memo(AboutUsPage);