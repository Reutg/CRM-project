import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import amber from '@material-ui/core/colors/amber';

import NavBar from './components/NavBar';
import Clients from './components/Clients';
import Actions from './components/Actions';




const theme = createMuiTheme({
  palette: {
    primary:  {
      main: '#263238',
    },
    secondary: amber,
  },
});


class App extends Component {
  render() {
    return (
      <Router>
      <MuiThemeProvider theme={theme}>
              <div className="App">
        <NavBar />
        
        <Route exact path="/clients" render={({ match }) => <Clients match={match} />} />
        <Route exact path="/actions" render={({ match }) => <Actions match={match} />} />

      </div>
      </MuiThemeProvider>
</Router>
    )
  }
}

export default App;
