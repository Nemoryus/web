import React from "react";
import {NavLink} from "react-router-dom"
import ProfilPicture from '../picture/profilPicutre.png'
import ProfilPicture2 from '../picture/profilPicture2.png'
import { Text } from '../containers/Language';

function AboutUsPage(props) {
   return(
        <div className='container-about-us'>
            <h3><Text tid="contact" /></h3>
            <p className='p-first'>
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
            <img src={ProfilPicture2}/>
            <h1>JÁN ĎUROVČÍK</h1>
            <img src={ProfilPicture}/>
            <p className='p-second'>
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
            <NavLink className='nav-link-button'to='/'>view all</NavLink>
        </div>
    );   
}
export default AboutUsPage;