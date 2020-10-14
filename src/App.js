import React from 'react';
import './App.css';
import './assets/css/mainCss.css'

import { BrowserRouter, Redirect } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';


//import pages
import AboutUsPage from "./pages/AboutUs"
import MainPage from "./pages/Main"
import ContactPage from "./pages/Contact"
import ProductionPage from "./pages/Production"
import BaletkaPage from "./pages/Baletka"

//components
import Header from "./components/Header"

function App() {
  return (

    <div className='appPage'>
      <BrowserRouter>
        <CssBaseline />
        <Switch>
          <Route path="/" component={BaletkaPage} exact />
          <Route path={["/contact", "/main", "/about-us", "/production"]} component={MainPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
