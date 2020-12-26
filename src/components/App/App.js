//MODULES
import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
//COMPONENTS
import MovieList from '../MovieList/MovieList.jsx'
import Details from '../Details/Details.jsx'
import AddMovie from '../AddMovie/AddMovie.jsx'
//STYLING
import './App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

//TYPEFACE/FONTS
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'cursive',
      'Chilanka',
    ].join(','),
  },
});

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          {/* These are the routes to our components */}
          <Router>
            {/* ADD PAGES! */}
            <Route exact path="/" component={MovieList} />
            <Route path="/Details" component={Details} />
            <Route path="/AddMovie" component={AddMovie} />
          </Router>
        </div>
      </ThemeProvider>
    );
  }
};//END App
export default App;