import React, { Component } from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList.jsx'

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
              <li><Link to="/MovieList">MovieList</Link></li>
              {/* <li><Link to="/Understanding">Understanding</Link></li>
              <li><Link to="/Support">Support</Link></li>
              <li><Link to="/Comments">Comments</Link></li>
              <li><Link to="/Review">Review</Link></li>
              <li><Link to="/ThankYou">ThankYou</Link></li> */}
              {/* <li><Link to="/Admin">ADMIN</Link></li> */}
            </ul>
          </nav>
          <Route exact path="/MovieList" component={MovieList} />
          {/* <Route exact path="/Understanding" component={Understanding} />
          <Route exact path="/Support" component={Support} />
          <Route exact path="/Comments" component={Comments} />
          <Route exact path="/Review" component={Review} />
          <Route exact path="/Admin" component={Admin} />
          <Route exact path="/ThankYou" component={ThankYou} /> */}
        </Router>
        <p>Empty Page</p>
      </div>
    );
  }
}

export default App;
