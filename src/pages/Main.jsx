import React, { useCallback, useState, createContext } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { LanguageProvider } from '../containers/Language';

import AboutUsPage from "./AboutUsPage"
import ContactPage from "./ContactPage"
import ProductionPage from "./ProductionPage"
import HomePage from "./HomePage"

import Footer from '../components/Footer'
import Header from '../components/Header'

import { MUSICALS, BALLET_OPERA, SHOW, DANCE_THEATER } from '../data/data';

export const PerformancesCtx = createContext()
const getPerformances = (categoryName) => {
  if (categoryName === 'MUSICALS') {
      return MUSICALS;
  } else if (categoryName === 'BALLET_OPERA') {
      return BALLET_OPERA;
  } else if (categoryName === 'SHOW') {
      return SHOW;
  } else if (categoryName === 'DANCE_THEATER'){
      return DANCE_THEATER;
  } else {
      // all performances
      return [...MUSICALS, ...BALLET_OPERA, ...SHOW, ...DANCE_THEATER]
  }
}

function Main() {
  const history = useHistory()
  const [headerType, setHeaderType] = useState(-1) // -1 - fully transparented, 0 - gradient, 1 - fully colored
  const [selectedPerformance, setSelectedPerformance] = useState(null)
  
  const handleLogoClicked = useCallback(() => {
    setSelectedPerformance(null)
    history.push("/home");
  }, [history])

  return (
    <PerformancesCtx.Provider value={{ getPerformances }}>
      <LanguageProvider>
        <Header headerType={headerType} handleLogoClicked={handleLogoClicked}/>

        <main className="content">
          <Switch>
            <Route path="/home" exact render={() => <HomePage setHeaderType={setHeaderType} selectedPerformance={selectedPerformance} setSelectedPerformance={setSelectedPerformance}/>} />
            <Route path="/about-us" render={() => <AboutUsPage setHeaderType={setHeaderType} setSelectedPerformance={setSelectedPerformance} />}/>
            <Route path="/production" render={() => <ProductionPage setHeaderType={setHeaderType} selectedPerformance={selectedPerformance} setSelectedPerformance={setSelectedPerformance}/>} />
            <Route path="/contact" render={() => <ContactPage setHeaderType={setHeaderType} setSelectedPerformance={setSelectedPerformance} />}/>
          </Switch>
        </main>

        <Footer handleLogoClicked={handleLogoClicked}/>
      </LanguageProvider>
    </PerformancesCtx.Provider>
  );
}

export default Main;
