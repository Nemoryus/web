import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.css';
import './assets/css/main.css'

import Main from "./pages/Main"
import WelcomePage from "./pages/WelcomePage"

// const theme = createMuiTheme({
//   palette: {
//     text: {
//       primary: '#fff',
//       main: 'white'
//     },
//     primary: {
//       main: '#040821',
//       contrastText: 'white'
//     },
//     secondary: {
//       main: '#FF0000',
//       contrastText: 'black'
//     },
//     // error: {
//     //   main: '#dc004e',
//     //   contrastText: 'white'
//     // },
//     // blue: {
//     //   main: blue[500],
//     //   contrastText: 'white'
//     // },
//     // background: {
//     //   default: '#eef2ec'
//     // }
//   },
// })

function App() {
  return (
    <div className='appPage'>
      <BrowserRouter>
        {/* <MuiThemeProvider theme={theme}> */}
          <CssBaseline/>
          <Switch>
            <Route path="/" component={WelcomePage} exact/>
            <Route path={["/contact", "/home", "/about-us", "/production"]} component={Main}/>
          </Switch>
        {/* </MuiThemeProvider> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

//todo:
// alt to images and videos
// header navlinks -> menu items
// spravit textove konstanty z BALLET_OPERA, SHOW, DANCE_THEATER, MUSICAL a mozno aj este nieco ine co sa viac krat pouziva v app  
// preklad
// warnings

// sticky header
// production menu in center 