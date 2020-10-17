import React from 'react';
import './App.css';
import './assets/css/mainCss.css'

import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';


//import pages
import AboutUsPage from "./pages/AboutUs"
import MainPage from "./pages/Main"
import ContactPage from "./pages/Contact"
import ProductionPage from "./pages/Production"
import BaletkaPage from "./pages/Baletka"


function App() {  
  return (

    <div className='appPage'>
<<<<<<< HEAD

      {/* auto */}
      {/* <img alt="user-avatar" className={classes.photo} src={require('../../assets/img/person.png')}/> */}
       <BrowserRouter>
       <CssBaseline />
=======
      <BrowserRouter>
        <CssBaseline />
>>>>>>> d656ca4929e111ebfb2f079384b7c5e67b9228a8
        <Switch>
          <Route path="/" component={BaletkaPage} exact />
          <Route path={["/contact", "/main", "/about-us", "/production"]} component={MainPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
