import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList.jsx'
import Details from '../Details/Details.jsx'
import AddMovie from '../AddMovie/AddMovie.jsx'
class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movies!</h1>
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
    );
  }
}

export default App;
