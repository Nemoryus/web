import React from 'react';
// import { NavLink } from 'react-router-dom'  


//social icons


//import z main
import { Switch, Route } from 'react-router-dom';


//import pages
import AboutUsPage from "./AboutUs"
import ContactPage from "./Contact"
import ProductionPage from "./Production"
import MainPage from "./MainPage"
import UnderPage from "./UnderPage"


// import components
import Footer from '../components/Footer'
import Header from '../components/Header'
import CategoryGrid from '../components/CategoryGrid';


import { LanguageProvider } from '../containers/Language';


function Main() {
  return (
    <LanguageProvider>
      <div>
        <header>
          <Header />
        </header>

        <main className="content">
          <Switch >
            <Route path="/main" component={MainPage} exact />
            <Route path="/about-us" component={AboutUsPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/production" component={ProductionPage} />
            <Route path="/production/balet" component={CategoryGrid} />
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
