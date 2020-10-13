import React from 'react';
// import { NavLink } from 'react-router-dom'  

import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/styles';

//social icons
import FacebookIcom from '../picture/facebookIcon.svg';
import InstagramIcon from '../picture/instagramIcon.svg';
import YoutubeIcon from '../picture/youtubeIcon.svg';
import Logo from '../picture/logo.png';


//import z main
import { Switch, Route, NavLink } from 'react-router-dom';
import MainNavigation from "../components/MainNavigation"
import { makeStyles } from "@material-ui/core/styles";


//import pages
import AboutUsPage from "./AboutUs"
import ContactPage from "./Contact"
import ProductionPage from "./Production"
import TmavoModra from "../picture/modratmava.jpg"
import MainPage from "./MainPage"
import UnderPage from "./UnderPage"
import NewUnderPage2 from "./NewUnderPage2"
import NewKOKOTINA from "./NewKOKOTINA"

import MenuIcon from '@material-ui/icons/Menu';

// import components
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Text } from '../containers/Language';
import CategoryGrid from '../components/CategoryGrid';
import tetComponent from '../components/testCompoment';


import { LanguageProvider } from '../containers/Language';
import { Category } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: 'url(' + TmavoModra + ')'
  }

}));

function Main() {
  return (
    <LanguageProvider>
      <div>
        <header>
          <Header />
        </header>

        <main className="content">
          <Switch >
            <Route path="/about-us" component={AboutUsPage} exact />
            <Route path="/contact" component={ContactPage} exact />
            <Route path="/production" component={ProductionPage} exact/>
            <Route path="/production/balet" component={CategoryGrid} />
            <Route path="/main" component={MainPage} exact />
          </Switch>

        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </LanguageProvider>
  );
}

export default Main;
