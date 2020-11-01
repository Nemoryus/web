import React, {useState} from 'react';
import { LanguageProvider } from '../containers/Language';

//import z main
import { Switch, Route } from 'react-router-dom';

//import pages
import AboutUsPage from "./AboutUsPage"
import ContactPage from "./ContactPage"
import ProductionPage from "./ProductionPage"
import HomePage from "./HomePage"

// import components
import Footer from '../components/Footer'
import Header from '../components/Header'

function Main() {
  const [headerType, setHeaderType] = useState(-1) // -1 - fully transparented, 0 - gradient, 1 - fully colored
  
  return (
    <LanguageProvider>
        <Header headerType={headerType}/>

        <main className="content">
          <Switch>
            <Route path="/home" exact render={() => <HomePage setHeaderType={setHeaderType}/>} />
            <Route path="/about-us" render={() => <AboutUsPage setHeaderType={setHeaderType}/>} />
            <Route path="/contact" render={() => <ContactPage setHeaderType={setHeaderType}/>} />
            <Route path="/production" render={() => <ProductionPage setHeaderType={setHeaderType}/>} />
          </Switch>
        </main>

        <Footer/>
    </LanguageProvider>
  );
}

export default Main;
