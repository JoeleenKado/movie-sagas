import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList.jsx'
import Details from '../Details/Details.jsx'
import AddMovie from '../AddMovie/AddMovie.jsx'
//STYLING
import Typography from '@material-ui/core/Typography';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Chilanka',
      'cursive',
    ].join(','),
  },});


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <ThemeProvider theme={theme}>
      <div className="App">
        <Typography variant="h4" gutterBottom>
       Joelle's Movie Gallery
      </Typography>
        <Router>
          {/* ADD PAGES! */}
          <nav>
            <ul>
              {/* <li><Link to="/">Movie List</Link></li> */}
              {/* <li><Link to="/Admin">ADMIN</Link></li> */}
            </ul>
          </nav>
          <Route exact path="/" component={MovieList} />
          <Route path="/Details" component={Details} />
          <Route path="/AddMovie" component={AddMovie} />
        </Router>
      </div>
      </ThemeProvider>
    );
  }
}

export default App;
