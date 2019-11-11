import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import "./App.css";
import {AppBar, Button, Toolbar, Typography} from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import NasaTodayImg from "./components/NasaTodayImg";
import NasaImgGrid from "./components/NasaImgGrid";

function App() {
  const theme = createMuiTheme({
    palette: {
      type:'dark',
      primary: {
        main: '#8c9eff',
      },
      secondary: {
        main: 'rgba(0, 0, 0,0.5)',
      },
    },
  })

  return (
    <MuiThemeProvider theme={theme}>
    <div className="App">
    <Router>
      <div>
        <AppBar className="appBar" color="secondary">
          <Toolbar>
          <Icon>image</Icon>
          <h5 className="logo">NASA Image Library</h5>
          <Button><Link className="NavItem" to="/">Image of Today</Link></Button>
          <Button><Link className="NavItem" to="/Gallery">Gallery</Link></Button>  
          </Toolbar>
        </AppBar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Gallery">
            <Gallery />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
    </MuiThemeProvider>
  );
}

function Home() {
  return (
  <div>
  <NasaTodayImg />
  </div>
  );
}

function Gallery() {
  return (
  <div className="container">
    <NasaImgGrid/>
    <div className="fabtn">
      <a href="#">
      <Fab variant="extended" aria-label="like" color="primary">
      <Icon>navigation</Icon>
      Top
      </Fab>
      </a>
    </div>
  </div>
  );
}
    


export default App;
