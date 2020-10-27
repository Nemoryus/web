import React from 'react';
import { LanguageProvider } from '../containers/Language';

//import z main
import { Switch, Route } from 'react-router-dom';

//import pages
import AboutUsPage from "./AboutUs"
import ContactPage from "./Contact"
import ProductionPage from "./Production"
import HomePage from "./HomePage"

// import components
import Footer from '../components/Footer'
import Header from '../components/Header'
import CategoryGrid from '../components/CategoryGrid';

function Main() {
  return (
    <LanguageProvider>
        <Header/>

        <main className="content">
          <Switch>
            <Route path="/home" component={HomePage} exact />
            <Route path="/about-us" component={AboutUsPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/production" component={ProductionPage} />
            <Route path="/production/balet" component={CategoryGrid} />
          </Switch>
        </main>

        <Footer/>
    </LanguageProvider>
  );
}

export default Main;
